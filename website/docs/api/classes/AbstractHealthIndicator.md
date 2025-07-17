# Class: `abstract` AbstractHealthIndicator

Defined in: [health/AbstractHealthIndicator.ts:4](https://github.com/actuatorjs/actuatorjs/blob/64baddb9a0ce51aa12b7b5f27d1deac02ba881d9/src/health/AbstractHealthIndicator.ts#L4)

## Implements

- [`HealthIndicator`](../interfaces/HealthIndicator.md)

## Constructors

### Constructor

> **new AbstractHealthIndicator**(`name`): `AbstractHealthIndicator`

Defined in: [health/AbstractHealthIndicator.ts:6](https://github.com/actuatorjs/actuatorjs/blob/64baddb9a0ce51aa12b7b5f27d1deac02ba881d9/src/health/AbstractHealthIndicator.ts#L6)

#### Parameters

##### name

`string`

#### Returns

`AbstractHealthIndicator`

## Methods

### check()

> `abstract` **check**(): `Promise`\<[`HealthResult`](../interfaces/HealthResult.md)\>

Defined in: [health/AbstractHealthIndicator.ts:12](https://github.com/actuatorjs/actuatorjs/blob/64baddb9a0ce51aa12b7b5f27d1deac02ba881d9/src/health/AbstractHealthIndicator.ts#L12)

#### Returns

`Promise`\<[`HealthResult`](../interfaces/HealthResult.md)\>

#### Implementation of

[`HealthIndicator`](../interfaces/HealthIndicator.md).[`check`](../interfaces/HealthIndicator.md#check)

***

### getName()

> **getName**(): `string`

Defined in: [health/AbstractHealthIndicator.ts:9](https://github.com/actuatorjs/actuatorjs/blob/64baddb9a0ce51aa12b7b5f27d1deac02ba881d9/src/health/AbstractHealthIndicator.ts#L9)

#### Returns

`string`

#### Implementation of

[`HealthIndicator`](../interfaces/HealthIndicator.md).[`getName`](../interfaces/HealthIndicator.md#getname)
