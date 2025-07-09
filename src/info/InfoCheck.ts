import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

interface GitCommit {
	id: string;
	time: string;
}

interface GitInfo {
	branch: string;
	commit: GitCommit;
}

interface BuildInfo {
	name: string;
	version: string;
}

interface OSInfo {
	name: string;
	version: string;
	arch: string;
}

interface ProcessMemory {
	heapTotal: number;
	heapUsed: number;
	rss: number;
}

interface ProcessInfo {
	pid: number;
	memory: ProcessMemory;
	cpus: number;
	owner?: string;
}

export interface ActuatorInfo {
	git?: GitInfo;
	build?: BuildInfo;
	os: OSInfo;
	process: ProcessInfo;
}

async function getOutDirFromPackageJson(): Promise<string> {
	try {
		const pkgJsonPath = path.resolve(process.cwd(), "package.json");
		const pkgRaw = await fs.readFile(pkgJsonPath, "utf-8");
		const pkg = JSON.parse(pkgRaw);
		return pkg.outDir || "dist";
	} catch {
		return "dist";
	}
}

export function getRuntimeInfo(): Pick<ActuatorInfo, "os" | "process"> {
	const osInfo: OSInfo = {
		name: os.type(),
		version: os.release(),
		arch: os.arch(),
	};

	const memory = process.memoryUsage();
	const processInfo: ProcessInfo = {
		pid: process.pid,
		memory: {
			heapTotal: memory.heapTotal,
			heapUsed: memory.heapUsed,
			rss: memory.rss,
		},
		cpus: os.cpus().length,
	};

	return {
		os: osInfo,
		process: processInfo,
	};
}

export async function getInfo(): Promise<ActuatorInfo> {
	const outDir = await getOutDirFromPackageJson();
	const runtimeInfo = getRuntimeInfo();

	if (outDir) {
		const infoPath = path.resolve(process.cwd(), outDir, "actuator.info.json");
		try {
			const infoRaw = await fs.readFile(infoPath, "utf-8");
			const infoFromFile = JSON.parse(infoRaw) as ActuatorInfo;
			return {
				...infoFromFile,
				...runtimeInfo,
			};
		} catch {
			console.warn(
				`[InfoCheck] No built actuator.info.json found at ${infoPath}. Returning runtime info.`,
			);
		}
	} else {
		console.warn(
			"[InfoCheck] No outDir configured in package.json, returning runtime info.",
		);
	}

	return runtimeInfo;
}
