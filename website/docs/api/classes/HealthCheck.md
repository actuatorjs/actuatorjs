# Class: HealthCheck

Defined in: [health/HealthCheck.ts:9](https://github.com/actuatorjs/actuatorjs/blob/f0209262f8c8f84a7a32273f89c4339c3ebcee84/src/health/HealthCheck.ts#L9)

## Constructors

### Constructor

> **new HealthCheck**(`healthIndicators`): `HealthCheck`

Defined in: [health/HealthCheck.ts:12](https://github.com/actuatorjs/actuatorjs/blob/f0209262f8c8f84a7a32273f89c4339c3ebcee84/src/health/HealthCheck.ts#L12)

#### Parameters

##### healthIndicators

[`HealthIndicator`](../interfaces/HealthIndicator.md)[]

#### Returns

`HealthCheck`

## Methods

### getHealth()

> **getHealth**(): `Promise`\<[`HealthCheckResult`](../interfaces/HealthCheckResult.md)\>

Defined in: [health/HealthCheck.ts:16](https://github.com/actuatorjs/actuatorjs/blob/f0209262f8c8f84a7a32273f89c4339c3ebcee84/src/health/HealthCheck.ts#L16)

#### Returns

`Promise`\<[`HealthCheckResult`](../interfaces/HealthCheckResult.md)\>
