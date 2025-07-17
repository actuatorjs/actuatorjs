---
sidebar_position: 4
id: actuator
title: Actuator
pagination_label: Actuator
description: Actuator class and details.
---

The main class that you should use is the `Actuator` class.
It exposes methods that return JSON formatted values.

To use it, you will need to instantiante all the components that are used internally, such as HealthChecks.

## Health

The `getHealth()` method returns a promise of the health result.
Depending on how you defined your healthchecks and healthindicators.

For more information on healthchecks and healthindicators, check out [HealthChecks](/docs/guides/health).

Here's an example of a failing healthcheck with multiple healthindicators:

```json
{
  "status": "DOWN",
  "components": {
    "abstract-postgres": {
      "status": "DOWN",
      "details": {
        "error": "connect ECONNREFUSED ::1:5432; connect ECONNREFUSED 127.0.0.1:5432"
      }
    },
    "simple-postgres": {
      "status": "DOWN",
      "details": {
        "error": "connect ECONNREFUSED ::1:5432; connect ECONNREFUSED 127.0.0.1:5432"
      }
    }
  }
}
```

Here's an example of a succesful healthcheck:

```json
{
  "status": "UP",
  "components": {
    "simple-postgres": {
      "status": "UP"
    },
    "abstract-postgres": {
      "status": "UP"
    }
  }
}
```

## Info

The `getInfo()` method returns a promise of the application global informations.

For more details on how that works, check out [InformationChecks](/docs/guides/info).

Depending on your config and what you generated before running the app, you should get an output similar to this:

```json
{
  git: {
   branch: "main",
   commit: {
    id: "81d5453",
    time: "2025-07-10T00:57:28+02:00",
   },
  },
  build: {
   name: "express-actuatorjs-app",
   version: "0.0.1",
  },
  os: {
   name: "Windows_NT",
   version: "10.0.19045",
   arch: "x64",
  },
  process: {
   pid: 6288,
   memory: {
    heapTotal: 10780672,
    heapUsed: 9518928,
    rss: 55115776,
   },
   cpus: 4,
  },
  javascript: {
   runtime: {
    name: "Deno",
    version: "2.4.2",
   },
   engine: {
    name: "V8",
    version: "13.7.152.14-rusty",
   },
  }
}
```
