/**
 * Possible statuses for health checks.
 */
export type HealthStatus = "UP" | "DOWN";

/**
 * A structured result for a single health indicator.
 */
export interface HealthResult {
	status: HealthStatus;
	details?: Record<string, any>;
}
