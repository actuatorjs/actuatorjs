import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import type React from "react";

interface InstallTabsProps {
	packageName: string;
}

const InstallTabs: React.FC<InstallTabsProps> = ({ packageName }) => {
	return (
		<Tabs>
			<TabItem value="bun" label="bun" default>
				<CodeBlock language="bash">{`bun add ${packageName}`}</CodeBlock>
			</TabItem>
			<TabItem value="npm" label="npm">
				<CodeBlock language="bash">{`npm install ${packageName}`}</CodeBlock>
			</TabItem>

			<TabItem value="yarn" label="yarn">
				<CodeBlock language="bash">{`yarn add ${packageName}`}</CodeBlock>
			</TabItem>

			<TabItem value="pnpm" label="pnpm">
				<CodeBlock language="bash">{`pnpm add ${packageName}`}</CodeBlock>
			</TabItem>
		</Tabs>
	);
};

export default InstallTabs;
