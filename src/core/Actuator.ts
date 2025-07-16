import type { HealthCheck, HealthCheckResult } from "../health/HealthCheck";
import { getInfo } from "../info/InfoCheck";
import type { ActuatorInfo } from "../info/types";

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
