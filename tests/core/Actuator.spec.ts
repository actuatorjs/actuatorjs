import { describe, expect, it } from "bun:test";
import { Actuator } from "../../src/core/Actuator";
import { upHealthCheck } from "../utils/healthcheck";

describe("Actuator", () => {
	describe("Health", () => {
		it("Should return health", async () => {
			const actuator = new Actuator(upHealthCheck);
			const healthResult = await actuator.getHealth();
			expect(healthResult).toBeDefined();
			expect(healthResult.status).toBe("UP");
		});
	});
});
