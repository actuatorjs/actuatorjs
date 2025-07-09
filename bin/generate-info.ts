#!/usr/bin/env node

import { execSync } from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";

async function getOutDirFromPackageJson(): Promise<string> {
	const pkgJsonPath = path.resolve(process.cwd(), "package.json");
	const pkgRaw = await fs.readFile(pkgJsonPath, "utf-8");
	const pkg = JSON.parse(pkgRaw);
	return pkg.outDir || "dist";
}

async function getBuildInfo() {
	const pkgJsonPath = path.resolve(process.cwd(), "package.json");
	const pkgRaw = await fs.readFile(pkgJsonPath, "utf-8");
	const pkg = JSON.parse(pkgRaw);

	return {
		name: pkg.name,
		version: pkg.version,
	};
}

function getGitInfo() {
	try {
		const branch = execSync("git rev-parse --abbrev-ref HEAD")
			.toString()
			.trim();
		const commitId = execSync("git rev-parse --short HEAD").toString().trim();
		const commitTime = execSync("git show -s --format=%cI HEAD")
			.toString()
			.trim();

		return {
			branch,
			commit: {
				id: commitId,
				time: commitTime,
			},
		};
	} catch {
		return null;
	}
}

async function main() {
	const outDir = await getOutDirFromPackageJson();
	const targetPath = path.resolve(process.cwd(), outDir, "actuator.info.json");

	const git = getGitInfo();
	const build = await getBuildInfo();

	const info = {
		git,
		build,
	};

	await fs.mkdir(path.dirname(targetPath), { recursive: true });
	await fs.writeFile(targetPath, JSON.stringify(info, null, 2), "utf-8");

	console.log(`[generate-info] actuator.info.json created at ${targetPath}`);
}

main().catch((e) => {
	console.error("[generate-info] Failed:", e);
	process.exit(1);
});
