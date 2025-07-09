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

You can find a simple express server using this library in the example project provided in [examples](https://github.com/actuatorjs/examples).

## Currently supported
Here's a list of the currently supported features:
- HealthChecks
- Info returning global project details (git, build, os, process).
