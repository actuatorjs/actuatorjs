import { HealthCheck } from "../../src/health/HealthCheck";
import { HealthIndicator } from "../../src/health/HealthIndicator";

export const upIndicators: HealthIndicator[] = [
	new HealthIndicator("database", async () => {
		return { status: "UP" };
	}),
	new HealthIndicator("auth", async () => {
		return { status: "UP" };
	}),
];

export const upHealthCheck = new HealthCheck(upIndicators);
export const downIndicator = new HealthIndicator("redis", async () => {
	return { status: "DOWN" };
});
export const downHealthCheck = new HealthCheck([
	...upIndicators,
	downIndicator,
]);
