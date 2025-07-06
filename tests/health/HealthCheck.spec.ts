import { describe, expect, it } from "bun:test";
import {
	downHealthCheck,
	downIndicator,
	upHealthCheck,
	upIndicators,
} from "../utils/healthcheck";

describe("HealthCheck", () => {
	it("Should be UP if all indicators are up", async () => {
		const result = await upHealthCheck.getHealth();
		expect(result).toBeDefined();
		expect(result.status).toBe("UP");
		const upIndicatorsMap = new Map(
			upIndicators.map((indicator) => [indicator.name, indicator]),
		);
		for (const [name, _indicator] of upIndicatorsMap) {
			expect(result.components).toContainKey(name);
			expect(result.components[name]).toBeDefined();
			expect(result.components[name].status).toBe("UP");
		}
	});
	it("Should be DOWN if one indicator is DOWN", async () => {
		const result = await downHealthCheck.getHealth();
		expect(result).toBeDefined();
		expect(result.status).toBe("DOWN");
		const upIndicatorsMap = new Map(
			upIndicators.map((indicator) => [indicator.name, indicator]),
		);
		for (const [name, _indicator] of upIndicatorsMap) {
			expect(result.components).toContainKey(name);
			expect(result.components[name]).toBeDefined();
			expect(result.components[name].status).toBe("UP");
		}
		expect(result.components).toContainKey(downIndicator.name);
		expect(result.components[downIndicator.name]).toBeDefined();
		expect(result.components[downIndicator.name].status).toBe("DOWN");
	});
});
