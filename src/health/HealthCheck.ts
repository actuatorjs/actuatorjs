import type { HealthIndicator } from "./HealthIndicator";
import type { HealthResult, HealthStatus } from "./HealthResult";

export interface HealthCheckResult {
	status: HealthStatus;
	components: Record<string, HealthResult>;
}

export class HealthCheck {
	private healthIndicators: HealthIndicator[];

	constructor(healthIndicators: HealthIndicator[]) {
		this.healthIndicators = healthIndicators;
	}

	async getHealth(): Promise<HealthCheckResult> {
		const components: Record<string, HealthResult> = {};
		let overallStatus: HealthStatus = "UP";

		await Promise.all(
			this.healthIndicators.map(async (indicator) => {
				try {
					const result = await indicator.check();
					components[indicator.getName()] = result;

					if (result.status === "DOWN") {
						overallStatus = "DOWN";
					}
				} catch (error) {
					components[indicator.getName()] = {
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
