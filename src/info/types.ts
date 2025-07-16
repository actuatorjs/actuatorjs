export const UNKNOWN = "Unknown";

export interface GitCommit {
	id: string;
	time: string;
}

export interface GitInfo {
	branch: string;
	commit: GitCommit;
}

export interface BuildInfo {
	name: string;
	version: string;
}

export interface OSInfo {
	name: string;
	version: string;
	arch: string;
}

export interface ProcessMemory {
	heapTotal: number;
	heapUsed: number;
	rss: number;
}

export interface ProcessInfo {
	pid: number;
	memory: ProcessMemory;
	cpus: number;
	owner?: string;
}

export enum JsRuntime {
	Node = "Node.js",
	Deno = "Deno",
	Bun = "Bun",
	Unknown = UNKNOWN,
}

export enum JsEngine {
	V8 = "V8",
	JavaScriptCore = "JavaScriptCore",
	Unknown = UNKNOWN,
}

export interface JavascriptRuntime {
	name: JsRuntime;
	version: string;
}

export interface JavascriptEngine {
	name: JsEngine;
	version: string;
}

export interface JavascriptInfo {
	runtime: JavascriptRuntime;
	engine: JavascriptEngine;
}

export interface ActuatorInfo {
	git?: GitInfo;
	build?: BuildInfo;
	os: OSInfo;
	process: ProcessInfo;
	javascript: JavascriptInfo;
}
