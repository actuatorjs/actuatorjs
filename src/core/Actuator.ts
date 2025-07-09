import type { HealthCheck, HealthCheckResult } from "../health/HealthCheck";
import { type ActuatorInfo, getInfo } from "../info/InfoCheck";

export class Actuator {
	private healthCheck: HealthCheck;

	constructor(healthCheck: HealthCheck) {
		this.healthCheck = healthCheck;
	}

	async getHealth(): Promise<HealthCheckResult> {
		return await this.healthCheck.getHealth();
	}

	async getInfo(): Promise<ActuatorInfo> {
		return await getInfo();
	}
}
