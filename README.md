# ActuatorJs

This library attempts to rewrite most of Spring Boot Actuator library for the Javascript/Typescript ecosystem.

## How to install

If you're using npm, run:

```bash
npm install @actuatorjs/actuatorjs
```

If you're using another package manager, you can adapt the command above.

## Quickstart

This library is the core functionnality of actuators.
For now, only HealthChecks have been abstracted and implemented in a reusable, modular and simple way.

This library has no bindings to automatically register routes in express, bun, or any other server, but that will be added in subsequent libraries.

For now, you need to manually create your `HealthCheck`.

If you're using `postgres` and their `pg` library, you could redefine a `PostgresHealthIndicator.ts` containing the following in a file named `src/health/indicators/PostgresHealthIndicator.ts`:

```bash
import { HealthIndicator } from "@actuatorjs/actuatorjs";
import type { HealthResult } from "@actuatorjs/actuatorjs";
import { Client } from "pg";

export class PostgresHealthIndicator extends HealthIndicator {
 private client: Client;

 constructor(name: string, client: Client) {
  super(name, async () => this.checkDatabase());
  this.client = client;
 }

 private async checkDatabase(): Promise<HealthResult> {
  try {
   // Check if connection works
   await this.client.query("SELECT 1");
   return { status: "UP" };
  } catch (err) {
   return {
    status: "DOWN",
    details: {
     error: err instanceof Error ? err.message : String(err),
    },
   };
  }
 }
}
```

And if you have an express application, this could be how you expose the health actuator endpoint:

```ts
import express from "express";
import { Client } from "pg";
import { HealthCheck } from "@actuatorjs/actuatorjs";
import { PostgresHealthIndicator } from "./src/health/indicators/PostgresHealthIndicator";

const app = express();
const port = 3000;

const client = new Client({
 host: "localhost",
 port: 5432,
 user: "your_user",
 password: "your_password",
 database: "your_database"
});

client.connect().catch((err) => {
 console.error("Failed to connect to PostgreSQL:", err);
 process.exit(1);
});

const indicators = [
 new PostgresHealthIndicator("postgres", client)
];

const healthCheck = new HealthCheck(indicators);
const actuator = new Actuator(healthCheck);

app.get("/actuator/health", async (req, res) => {
 const result = await actuator.getHealth();
 res.status(200).json(result);
});

app.listen(port, () => {
 console.log(`Server listening on http://localhost:${port}`);
});
```

If you run a simple docker container for a postgres image like so:

```bash
docker run -d \
  -e POSTGRES_USER=your_user \
  -e POSTGRES_PASSWORD=your_password \
  -e POSTGRES_DB=your_database \
  -p 5432:5432 \
  postgres:15-alpine
```

Then run the express application example, you should be able to see the actuator result.

If you run this curl command, or open your browser on `localhost:3000/actuator/health`:

```bash
curl http://localhost:3000/actuator/health
```

You should get:

```json
{"status":"UP","components":{"postgres":{"status":"UP"}}}
```
