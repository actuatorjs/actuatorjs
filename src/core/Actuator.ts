import type { HealthCheck, HealthCheckResult } from "../health/HealthCheck";

export class Actuator {
	private healthCheck: HealthCheck;

	constructor(healthCheck: HealthCheck) {
		this.healthCheck = healthCheck;
	}

	async getHealth(): Promise<HealthCheckResult> {
		return await this.healthCheck.getHealth();
	}
}
