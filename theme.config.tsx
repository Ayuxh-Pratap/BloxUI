import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <a href="https://bloxui.vercel.app/" style={{fontSize: "1.6rem" , fontWeight: "bold"}}>Blox UI</a>,
	project: {
		link: "https://github.com/Ayuxh-Pratap",
	},
	chat: {
		link: "https://discord.com/channels/1211252690764701756/12112526913642250",
	},
	docsRepositoryBase: "https://github.com/Ayuxh-Pratap",
	footer: {
		text: (
			<>
				<h1>&#169;{" 2024 BloxUI by Ayush Pratap Singh || ABESIT , Ghaziabad"}</h1>
			</>
		),
	},
	banner: {
		key: "beta-release",
		text: "🎉 Initial BloxUI version is released",
	},
	editLink: {
		text: null,
	},
	feedback: {
		content: null,
	},
	head: () => {
		const { frontMatter } = useConfig();

		return (
			<>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					property="og:title"
					content={frontMatter.title || "Blox UI"}
				/>
				<meta
					property="og:description"
					content={
						frontMatter.description ||
						"Welcome to Blox UI ! This is open source React/Next.js Tailwind UI components and templates to bootstrap your new apps, projects or landing sites."
					}
				/>
			</>
		);
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Blox UI",
		};
	},
	faviconGlyph: "✒️",
};

export default config;
