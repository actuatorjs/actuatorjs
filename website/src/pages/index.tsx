import Layout from "@theme/Layout";
import type { JSX } from "react";
import HomeHero from "../components/HomeHero";

export default function Home(): JSX.Element {
	return (
		<Layout
			title="ActuatorJS"
			description="Expose health and info endpoints for Node.js apps."
		>
			<main>
				<HomeHero />
			</main>
		</Layout>
	);
}
