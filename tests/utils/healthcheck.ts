import { HealthCheck } from "../../src/health/HealthCheck";
import type { HealthIndicator } from "../../src/health/HealthIndicator";
import { SimpleHealthIndicator } from "../../src/health/SimpleHealthIndicator";

export const upIndicators: HealthIndicator[] = [
	new SimpleHealthIndicator("database", async () => {
		return { status: "UP" };
	}),
	new SimpleHealthIndicator("auth", async () => {
		return { status: "UP" };
	}),
];

export const upHealthCheck = new HealthCheck(upIndicators);
export const downIndicator = new SimpleHealthIndicator("redis", async () => {
	return { status: "DOWN" };
});
export const downHealthCheck = new HealthCheck([
	...upIndicators,
	downIndicator,
]);
