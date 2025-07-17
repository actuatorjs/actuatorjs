import ActuatorTabs from "./ActuatorTabs"; // Reuse your existing component
import styles from "./HomeHero.module.css";

export default function HomeHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.inner}>
				<h1 className={styles.title}>
					Define and expose healthchecks and key informations about your running
					apps.
				</h1>

				<div className={styles.tabsWrapper}>
					<ActuatorTabs />
				</div>

				<div className={styles.buttons}>
					<a className="button button--primary" href="/docs/main/introduction">
						Read the Docs
					</a>
					<a
						className="button button--secondary button--outline"
						href="https://github.com/actuatorjs/actuatorjs"
						target="_blank"
						rel="noopener noreferrer"
					>
						View on GitHub
					</a>
				</div>
			</div>
		</section>
	);
}
