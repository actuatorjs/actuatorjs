# Class: SimpleHealthIndicator

Defined in: [health/SimpleHealthIndicator.ts:4](https://github.com/actuatorjs/actuatorjs/blob/8d5b7557cd90e88d26d5c082f758a51285b865b0/src/health/SimpleHealthIndicator.ts#L4)

## Implements

- [`HealthIndicator`](../interfaces/HealthIndicator.md)

## Constructors

### Constructor

> **new SimpleHealthIndicator**(`name`, `healthFunction`): `SimpleHealthIndicator`

Defined in: [health/SimpleHealthIndicator.ts:8](https://github.com/actuatorjs/actuatorjs/blob/8d5b7557cd90e88d26d5c082f758a51285b865b0/src/health/SimpleHealthIndicator.ts#L8)

#### Parameters

##### name

`string`

##### healthFunction

() => `Promise`\<[`HealthResult`](../interfaces/HealthResult.md)\>

#### Returns

`SimpleHealthIndicator`

## Methods

### check()

> **check**(): `Promise`\<[`HealthResult`](../interfaces/HealthResult.md)\>

Defined in: [health/SimpleHealthIndicator.ts:17](https://github.com/actuatorjs/actuatorjs/blob/8d5b7557cd90e88d26d5c082f758a51285b865b0/src/health/SimpleHealthIndicator.ts#L17)

#### Returns

`Promise`\<[`HealthResult`](../interfaces/HealthResult.md)\>

#### Implementation of

[`HealthIndicator`](../interfaces/HealthIndicator.md).[`check`](../interfaces/HealthIndicator.md#check)

***

### getName()

> **getName**(): `string`

Defined in: [health/SimpleHealthIndicator.ts:13](https://github.com/actuatorjs/actuatorjs/blob/8d5b7557cd90e88d26d5c082f758a51285b865b0/src/health/SimpleHealthIndicator.ts#L13)

#### Returns

`string`

#### Implementation of

[`HealthIndicator`](../interfaces/HealthIndicator.md).[`getName`](../interfaces/HealthIndicator.md#getname)
