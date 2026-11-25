import fs from "node:fs";

// One-line joke excusing a missed deadline, written verbatim: exactly one
// line, 128 characters, no trailing newline, so the output file is
// byte-identical to the line below. Three reminders conspired against their
// owner — the excuse owns the miss, the turn is the conspiracy, and the
// punch lands on the final clause ("just not mine").
const LINE =
  "I set three reminders, and all three conspired to remind each other instead of me, which is technically teamwork, just not mine.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
