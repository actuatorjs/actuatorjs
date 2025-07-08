import type { HealthResult } from "./HealthResult";

export interface HealthIndicator {
	getName: () => string;
	check: () => Promise<HealthResult>;
}
