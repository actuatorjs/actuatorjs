---
sidebar_position: 5
id: health
title: HealthChecks
pagination_label: HealthChecks
description: Learn how to create your own HealthChecks.
---

The HealthCheck class allows you to define a healthcheck composed of multiple healthindicators.
This class only exposes one method, `check`, which allows you to compute and gather all results from all healthindicators.

The `check` method also returns a list of all the health indicators, and if all are UP, the healthcheck itself is up. If any is DOWN, the healthcheck is DOWN.

## HealthIndicator interface

The HealthIndicator is a simple interface exposing a `check` and a `getName` methods.
The name of a HealthIndicator is used as a unique identifier for a HealthCheck.
If multiple healthinidcators with the same name are instanciated, only one result will be computed.

## SimpleHealthCheck

This is an implementation of the HealthIndicator interface taking a name and a function as a parameter.
The function is called to compute the healthcheck.

## AbstractHealthCheck

This is an abstract class with a name and an abstract check method.
