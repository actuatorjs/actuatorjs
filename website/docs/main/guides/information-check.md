---
sidebar_position: 6
id: info
title: InformationChecks
pagination_label: InformationChecks
description: Get global information on your running app.
---

Two types of informations on the running app can be fetched:
- Runtime: these can easily be guessed when running any application.
- Build time: these need to be built beforehand using the `generate-info` script.


## Runtime

### OS
Informations about the architecture, name and version.

### Process
Informations about the current process and memory used.

### JavaScript
Informations about the javascript runtime (node, deno or bun) as well as engine version.

## Build time

### Git
Informations about the branch, commit and date.

### Package
Informations about the name of the package.json and the version.
