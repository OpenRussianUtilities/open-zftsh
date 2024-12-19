import katex from "katex"

export function renderTex(tex: string): string {
    return katex.renderToString(tex, {throwOnError: false, strict: "ignore", output: "mathml"})
}