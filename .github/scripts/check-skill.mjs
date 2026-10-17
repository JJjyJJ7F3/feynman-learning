// Validates the one thing this repository has to get right: a SKILL.md whose
// frontmatter the skills CLI and the agents can actually load.
import { readFileSync } from 'node:fs';

const fail = (message) => {
  console.error(`::error::${message}`);
  process.exit(1);
};

let text;
try {
  text = readFileSync('SKILL.md', 'utf8');
} catch {
  fail('SKILL.md is missing from the repository root');
}

const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
if (!frontmatter) fail('SKILL.md: no YAML frontmatter block at the top of the file');

const lines = frontmatter[1].split(/\r?\n/);

const nameLine = lines.find((line) => /^name:/.test(line));
if (!nameLine) fail('SKILL.md: frontmatter has no name');
const name = nameLine.slice('name:'.length).trim();
if (name !== 'feynman-learning') {
  fail(`SKILL.md: name must be "feynman-learning", found "${name}"`);
}

const descriptionIndex = lines.findIndex((line) => /^description:/.test(line));
if (descriptionIndex === -1) fail('SKILL.md: frontmatter has no description');

const inline = lines[descriptionIndex].slice('description:'.length).trim();
const parts = [];
if (inline !== '' && !/^[>|][+-]?$/.test(inline)) parts.push(inline);
for (let i = descriptionIndex + 1; i < lines.length; i += 1) {
  const line = lines[i];
  if (line.trim() === '') continue;
  if (!/^\s/.test(line)) break;
  parts.push(line.trim());
}

const description = parts.join(' ').replace(/\s+/g, ' ').trim();
if (description.length < 50) {
  fail(`SKILL.md: description is too short to describe the skill (${description.length} chars)`);
}

console.log(`frontmatter ok: name=${name}, description=${description.length} chars`);
