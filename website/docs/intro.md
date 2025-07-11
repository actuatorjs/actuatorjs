---
sidebar_position: 1
id: introduction
title: Introduction
pagination_label: Introduction
---

This library tries to bring Spring Boot Actuator like features to the js/ts environnement.
The goal is to easily expose healtchecks, informations about your running applications (such as git commit, package version, etc) as well as expose functionnalities like changing the log level, checking the environment variables and many more.

The goal is also to have a solid typescript only base with no dependencies and that isn't reliant on any runtime or framework.

In the futur, there will be bindings for frameworks to simplify exposing endpoints, but for now, all is manual.

## Current state

For now, here's the list of features that have been implemented:

- HealthChecks
- InformationsChecks on build, git, os and process
