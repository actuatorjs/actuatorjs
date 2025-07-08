import type { HealthIndicator } from "./HealthIndicator";
import type { HealthResult } from "./HealthResult";

export abstract class AbstractHealthIndicator implements HealthIndicator {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	abstract check(): Promise<HealthResult>;
}
