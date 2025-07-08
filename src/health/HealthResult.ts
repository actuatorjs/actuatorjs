export type HealthStatus = "UP" | "DOWN";

export interface HealthResult {
	status: HealthStatus;
	details?: Record<string, any>;
}
