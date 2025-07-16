import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import {
	type ActuatorInfo,
	type JavascriptInfo,
	JsEngine,
	JsRuntime,
	UNKNOWN,
} from "./types";

export async function getOutDirFromPackageJson(): Promise<string> {
	try {
		const pkgJsonPath = path.resolve(process.cwd(), "package.json");
		const pkgRaw = await fs.readFile(pkgJsonPath, "utf-8");
		const pkg = JSON.parse(pkgRaw);
		return pkg.outDir || "dist";
	} catch {
		return "dist";
	}
}

export function getJavascriptInfo(): JavascriptInfo {
	let runtimeName: JsRuntime = JsRuntime.Unknown;
	let runtimeVersion = UNKNOWN;
	let engineName: JsEngine = JsEngine.Unknown;
	let engineVersion = UNKNOWN;

	if (typeof Bun !== "undefined") {
		runtimeName = JsRuntime.Bun;
		runtimeVersion = Bun.version;
		engineName = JsEngine.JavaScriptCore;
		engineVersion = UNKNOWN;
	} else if (
		typeof Deno !== "undefined" &&
		typeof Deno.version !== "undefined"
	) {
		runtimeName = JsRuntime.Deno;
		runtimeVersion = Deno.version.deno;
		engineName = JsEngine.V8;
		engineVersion = Deno.version.v8;
	} else if (typeof process !== "undefined" && process.versions?.node) {
		runtimeName = JsRuntime.Node;
		runtimeVersion = process.version;
		engineName = JsEngine.V8;
		engineVersion = process.versions.v8;
	}

	return {
		runtime: {
			name: runtimeName,
			version: runtimeVersion,
		},
		engine: {
			name: engineName,
			version: engineVersion,
		},
	};
}

export function getRuntimeInfo(): Pick<
	ActuatorInfo,
	"os" | "process" | "javascript"
> {
	const osInfo = {
		name: os.type(),
		version: os.release(),
		arch: os.arch(),
	};

	const memory = process.memoryUsage();
	const processInfo = {
		pid: process.pid,
		memory: {
			heapTotal: memory.heapTotal,
			heapUsed: memory.heapUsed,
			rss: memory.rss,
		},
		cpus: os.cpus().length,
	};

	const javascriptInfo = getJavascriptInfo();

	return {
		os: osInfo,
		process: processInfo,
		javascript: javascriptInfo,
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
