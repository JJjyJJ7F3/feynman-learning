# feynman-learning

An agent skill that runs the Feynman Technique as an interactive diagnostic loop, not a one-shot summary.

The success criterion is not "the learner has read an explanation." It is: without looking at the source,
can the learner explain the idea in their own words, justify the causal chain, give examples and
counterexamples, predict what changes when conditions change, and apply the model somewhere new?

## What the skill gives the agent

- **Five session modes** — Learn, Explain, Diagnose, Test, Review — inferred from the request, defaulting to Learn.
- **A ten-phase workflow** — define the target, baseline retrieval, first explanation, gap probes, concrete
  example, counterexample and boundary, prediction, targeted repair, second explanation, transfer, close.
- **A ten-type gap taxonomy** (G1–G10) — definition, terminology, causal, mechanism, assumption, trade-off,
  example-only understanding, verbal-fluency illusion, application, memory. Naming the missing link beats
  "study more".
- **A five-point mastery rubric** — own-words explanation, causal/mechanistic understanding, examples and
  boundaries, prediction, transfer.
- **Interaction rules** — retrieve before explaining, one diagnosed gap per turn, no chains of unexplained
  terminology, no silent invention of source content.

## When it triggers

Understanding-heavy learning of a concept, principle, mechanism, algorithm, mathematical idea, or technical
topic — including reviewing or testing understanding you think you already have.

The skill explicitly declines the cases it is wrong for: pure memorization, physical/perceptual skills, and
procedures that need hands-on practice. It defers those to retrieval practice, exercises, or real practice.

## Install

```bash
npx skills@latest add JJjyJJ7F3/feynman-learning -g -a codex
```

- `-g` installs to the user directory (`~/.agents/skills/` for Codex and most agents). Drop it to install into
  the current project (`.agents/skills/`) instead.
- `-a` selects the target agent: `-a claude-code`, `-a cursor`, `-a codex -a opencode`, or `--agent '*'` for
  every detected agent.
- Append `-y` for a non-interactive install.

Any agent supported by the `skills` CLI works here, not only Codex.

## Update

```bash
npx skills@latest add JJjyJJ7F3/feynman-learning -g -a codex -y
```

Or update whatever is already installed by name:

```bash
npx skills update feynman-learning
```

Use it without installing:

```bash
npx skills use JJjyJJ7F3/feynman-learning@feynman-learning --agent claude-code
```

## Layout

| Path | Purpose |
| --- | --- |
| `SKILL.md` | The skill itself: session modes, ten-phase workflow, gap taxonomy, mastery rubric, interaction rules |
| `references/diagnostic-rubric.md` | Signals of shallow understanding, probe families, feedback format — loaded when a diagnosis needs to be explicit |
| `assets/session-template.md` | Fill-in worksheet for running a session yourself |
| `.github/workflows/validate-skill.yml` | CI: on every push and pull request to `main`, checks the frontmatter and that the `skills` CLI still discovers exactly this one skill |
| `.gitattributes` | Pins LF line endings for every checkout, whatever the local Git configuration says |

## Maintenance

This repository is the source of truth. The installed copy under `~/.agents/skills/` is a build artifact of it —
never edit it in place.

1. Edit `SKILL.md` here. Keep the frontmatter `name:` as `feynman-learning`.
2. Commit and push to `main`.
3. Re-install so the local copy matches the published one:

   ```bash
   npx skills@latest add JJjyJJ7F3/feynman-learning -g -a codex -y
   ```

Pushing to `main` also runs CI. A red run means the repository no longer installs cleanly — read the failing step
before re-installing anything.

To try unpublished edits before pushing, install from the local checkout, then run the command above once the
change is published:

```bash
npx skills@latest add <path-to-this-repo> -g -a codex -y
```

## License

MIT — see [LICENSE](LICENSE).
