import CodeBlock from "@theme/CodeBlock";
import { useState } from "react";
import styles from "./ActuatorTabs.module.css";

const responses = {
	health: {
		status: "UP",
		components: {
			"abstract-postgres": { status: "UP" },
			"simple-postgres": { status: "UP" },
		},
	},
	info: {
		git: {
			branch: "main",
			commit: {
				id: "81d5453",
				time: "2025-07-10T00:57:28+02:00",
			},
		},
		build: {
			name: "express-actuatorjs-app",
			version: "0.0.1",
		},
		os: {
			name: "Windows_NT",
			version: "10.0.19045",
			arch: "x64",
		},
		process: {
			pid: 6288,
			memory: {
				heapTotal: 10780672,
				heapUsed: 9518928,
				rss: 55115776,
			},
			cpus: 4,
		},
		javascript: {
			runtime: {
				name: "Deno",
				version: "2.4.2",
			},
			engine: {
				name: "V8",
				version: "13.7.152.14-rusty",
			},
		},
	},
};

export default function ActuatorTabs() {
	const [activeTab, setActiveTab] = useState<"health" | "info">("health");

	const renderResponse = () => {
		const data = activeTab === "health" ? responses.health : responses.info;
		return (
			<CodeBlock language="json">{JSON.stringify(data, null, 2)}</CodeBlock>
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.tabs}>
				<button
					type="button"
					className={
						activeTab === "health"
							? "button button--primary"
							: "button button--secondary button--outline"
					}
					onClick={() => setActiveTab("health")}
				>
					Health
				</button>
				<button
					type="button"
					className={
						activeTab === "info"
							? "button button--primary"
							: "button button--secondary button--outline"
					}
					onClick={() => setActiveTab("info")}
				>
					Info
				</button>
			</div>
			<div className={styles.endpoint}>
				<code>GET /actuator/{activeTab}</code>
			</div>
			<div className={styles.output}>{renderResponse()}</div>
		</div>
	);
}
