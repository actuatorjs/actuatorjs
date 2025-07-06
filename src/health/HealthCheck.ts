import type { HealthIndicator } from "./HealthIndicator";
import type { HealthResult, HealthStatus } from "./HealthResult";

/**
 * The aggregated result of a health check.
 */
export interface HealthCheckResult {
	/**
	 * The overall system status.
	 * Will be `'DOWN'` if any indicator returns `'DOWN'`.
	 */
	status: HealthStatus;

	/**
	 * A map of each health indicator's name to its individual result.
	 */
	components: Record<string, HealthResult>;
}

/**
 * A service that aggregates health indicators and returns their combined status.
 */
export class HealthCheck {
	/**
	 * Internal list of registered health indicators.
	 */
	private healthIndicators: HealthIndicator[];

	/**
	 * Creates a new HealthCheck instance.
	 *
	 * @param healthIndicators - The list of health indicators to include in the check.
	 */
	constructor(healthIndicators: HealthIndicator[]) {
		this.healthIndicators = healthIndicators;
	}

	/**
	 * Executes all registered health indicators concurrently and aggregates their results.
	 *
	 * - If any indicator fails or returns `DOWN`, the overall status will be `DOWN`.
	 * - Errors thrown by indicators are caught and recorded in their component's details.
	 *
	 * @returns A `HealthCheckResult` with overall status and individual component results.
	 */
	async getHealth(): Promise<HealthCheckResult> {
		const components: Record<string, HealthResult> = {};
		let overallStatus: HealthStatus = "UP";

		await Promise.all(
			this.healthIndicators.map(async (indicator) => {
				try {
					const result = await indicator.getHealth();
					components[indicator.name] = result;

					if (result.status === "DOWN") {
						overallStatus = "DOWN";
					}
				} catch (error) {
					components[indicator.name] = {
						status: "DOWN",
						details: {
							error: error instanceof Error ? error.message : String(error),
						},
					};
					overallStatus = "DOWN";
				}
			}),
		);

		return {
			status: overallStatus,
			components,
		};
	}
}
