import type { HealthResult } from "./HealthResult";

/**
 * A health indicator represents a specific component or dependency
 * whose status can be checked (e.g. database, cache, external service).
 */
export class HealthIndicator {
	/**
	 * A unique name identifying the health check component.
	 * This will be used as the key in the aggregated health report.
	 */
	name: string;
	private healthFunction: () => Promise<HealthResult>;

	constructor(name: string, healthFunction: () => Promise<HealthResult>) {
		this.name = name;
		this.healthFunction = healthFunction;
	}

	/**
	 * Executes the health check and returns the result.
	 *
	 * @returns A promise that resolves to a `HealthResult` object
	 *          indicating the component's status and optional details.
	 */
	async getHealth(): Promise<HealthResult> {
		return await this.healthFunction();
	}
}
