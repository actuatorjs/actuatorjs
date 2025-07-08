import type { HealthIndicator } from "./HealthIndicator";
import type { HealthResult } from "./HealthResult";

export class SimpleHealthIndicator implements HealthIndicator {
	private readonly name: string;
	private checkFn: () => Promise<HealthResult>;

	constructor(name: string, healthFunction: () => Promise<HealthResult>) {
		this.name = name;
		this.checkFn = healthFunction;
	}

	getName() {
		return this.name;
	}

	async check(): Promise<HealthResult> {
		return await this.checkFn();
	}
}
