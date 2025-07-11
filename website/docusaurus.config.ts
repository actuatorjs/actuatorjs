import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
	title: "Actuatorjs",
	tagline: "Actuators are cool",
	favicon: "img/favicon.ico",

	future: {
		v4: true,
	},

	url: "https://your-docusaurus-site.example.com",
	baseUrl: "/",

	organizationName: "facebook",
	projectName: "docusaurus",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Actuatorsjs",
			logo: {
				alt: "actuatorjs logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Docs",
				},
				{
					href: "https://github.com/actuatorjs/actuatorjs",
					label: "GitHub",
					position: "right",
				},
				{
					label: "npm",
					href: "https://www.npmjs.com/package/@actuatorjs/actuatorjs",
					position: "right",
				},
				{
					href: "https://github.com/hadestructhor/",
					label: "me",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Introduction",
							to: "/docs/intro",
						},
						{
							label: "Installation",
							to: "/docs/install",
						},
						{
							label: "Getting started",
							to: "/docs/getting-started",
						},
						{
							label: "Examples",
							to: "/docs/examples",
						},
					],
				},
				{
					title: "Links",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/actuatorjs/actuatorjs",
						},
						{
							label: "npm",
							href: "https://www.npmjs.com/package/@actuatorjs/actuatorjs",
						},
						{
							href: "https://github.com/hadestructhor/",
							label: "me",
							position: "right",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} actuatorjs, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
