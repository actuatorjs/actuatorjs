import type { HealthCheck, HealthCheckResult } from "../health/HealthCheck";

/**
 * The Actuator class provides methods to check various informations about the running application.
 */
export class Actuator {
	/**
	 * The healthCheck component that is used to get the application's health.
	 */
	healthCheck: HealthCheck;

	/**
	 * Creates a new Actuator instance.
	 *
	 * @param healthCheck - A `HealthCheck` instance responsible for managing and executing health indicators.
	 */
	constructor(healthCheck: HealthCheck) {
		this.healthCheck = healthCheck;
	}

	/**
	 * Retrieves the overall application health by delegating to the internal `HealthCheck`.
	 *
	 * @returns A `HealthCheckResult` containing the global status and component results.
	 */
	async getHealth(): Promise<HealthCheckResult> {
		return await this.healthCheck.getHealth();
	}
}
