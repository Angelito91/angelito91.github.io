import { execFileSync } from "node:child_process";

// Fechas reales del repo, para no mentir en <lastmod> del sitemap ni en
// dateModified del JSON-LD. Si no hay git en el build, cae a la fecha actual.
function gitDates(): { first: string; last: string } | undefined {
    try {
        const out = execFileSync("git", ["log", "--format=%cI"], {
            encoding: "utf8",
            stdio: ["ignore", "pipe", "ignore"],
        });
        const lines = out.split("\n").map((l) => l.trim()).filter(Boolean);
        if (lines.length === 0) return undefined;
        // git log emite del más reciente al más antiguo.
        return { first: lines[lines.length - 1], last: lines[0] };
    } catch {
        return undefined;
    }
}

let cached: { first: string; last: string } | undefined;

function dates(): { first: string; last: string } {
    cached ??= gitDates() ?? { first: new Date().toISOString(), last: new Date().toISOString() };
    return cached;
}

/** Última fecha de commit del repo (ISO 8601). */
export function getLastModified(): string {
    return dates().last;
}

/** Fecha del primer commit del repo (ISO 8601). */
export function getDatePublished(): string {
    return dates().first;
}
