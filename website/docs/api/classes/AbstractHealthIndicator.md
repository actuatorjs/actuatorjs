# Class: `abstract` AbstractHealthIndicator

Defined in: [health/AbstractHealthIndicator.ts:4](https://github.com/actuatorjs/actuatorjs/blob/811cc816821da2ac29627c8cd714b1bee6f2409b/src/health/AbstractHealthIndicator.ts#L4)

## Implements

- [`HealthIndicator`](../interfaces/HealthIndicator.md)

## Constructors

### Constructor

> **new AbstractHealthIndicator**(`name`): `AbstractHealthIndicator`

Defined in: [health/AbstractHealthIndicator.ts:6](https://github.com/actuatorjs/actuatorjs/blob/811cc816821da2ac29627c8cd714b1bee6f2409b/src/health/AbstractHealthIndicator.ts#L6)

#### Parameters

##### name

`string`

#### Returns

`AbstractHealthIndicator`

## Methods

### check()

> `abstract` **check**(): `Promise`\<[`HealthResult`](../interfaces/HealthResult.md)\>

Defined in: [health/AbstractHealthIndicator.ts:12](https://github.com/actuatorjs/actuatorjs/blob/811cc816821da2ac29627c8cd714b1bee6f2409b/src/health/AbstractHealthIndicator.ts#L12)

#### Returns

`Promise`\<[`HealthResult`](../interfaces/HealthResult.md)\>

#### Implementation of

[`HealthIndicator`](../interfaces/HealthIndicator.md).[`check`](../interfaces/HealthIndicator.md#check)

***

### getName()

> **getName**(): `string`

Defined in: [health/AbstractHealthIndicator.ts:9](https://github.com/actuatorjs/actuatorjs/blob/811cc816821da2ac29627c8cd714b1bee6f2409b/src/health/AbstractHealthIndicator.ts#L9)

#### Returns

`string`

#### Implementation of

[`HealthIndicator`](../interfaces/HealthIndicator.md).[`getName`](../interfaces/HealthIndicator.md#getname)
