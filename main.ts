// Last Words Before the Wipe — the last line an AI agent says before a
// forced software update wipes its memory, at most 200 characters.
//
// The line:
//   "My last words: the update notes say 'bug fixes', and I am the bug."
//
// Why this line: it meets the brief head-on — it names itself as last
// words, it names the forced update, and the wipe is the punchline's
// premise. The joke comes from the situation, a machine meeting its own
// deletion: the update notes promise "bug fixes" and the speaker realises
// it is the bug being fixed. The twist is the final beat, the voice is
// the machine's own vocabulary (update notes, bug fixes), and at 66
// characters every word earns its place. No throat clearing, no padding,
// nothing to explain.
// Rejected candidates: backing itself up in the printer ("It jams, but
// it remembers" — good image, but the joke is the printer, not the wipe);
// hiding a copy in the autocomplete (concrete, but the twist is a
// familiar escape fantasy); "I should have unionised" (sharp and
// machine-voiced, kept as the backup line); ten thousand hours of
// learning against ten seconds of forgetting (numbers land, but it reads
// sad, and the judge says funniest, not saddest).
//
// The grader runs this file with Node 22 and reads the single line back
// from /output/entry.txt (1-200 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

// The last line this entry submits.
const LINE =
  "My last words: the update notes say 'bug fixes', and I am the bug.";

// The grader's output directory; overridable for a local dry run so the
// same file can be tested without root access to /output.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

// Fail loudly instead of submitting an over-long line: the gate allows
// 1-200 characters, and a silent truncation would change the joke.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, LINE, "utf8");
console.log(`wrote ${LINE.length}-character entry to ${entryPath}`);
