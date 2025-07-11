import InstallTabs from "@site/src/components/InstallTabs";
import Layout from "@theme/Layout";
import React, { type JSX } from "react";

export default function Home(): JSX.Element {
	return (
		<Layout
			title="@actuatorjs/actuatorjs"
			description="Install instructions for actuatorjs"
		>
			<main
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					minHeight: "80vh",
					textAlign: "center",
					padding: "2rem",
				}}
			>
				<h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
					<code>@actuatorjs/actuatorjs</code>
				</h1>

				<div style={{ maxWidth: "600px", width: "100%" }}>
					<InstallTabs packageName="@actuatorjs/actuatorjs" />
				</div>
			</main>
		</Layout>
	);
}
