---
name: feynman-learning
description: >
  Guide a learner through deep understanding of a knowledge point using the Feynman Technique:
  closed-book explanation, progressive "why/how" probing, concrete examples, counterexamples,
  boundary conditions, prediction, gap diagnosis, targeted remediation, re-explanation, and transfer.
  Use when the user wants to learn, understand, explain, master, review, or test understanding of
  a concept, principle, mechanism, algorithm, mathematical idea, technical topic, or other
  understanding-heavy knowledge. Do not rely on Feynman explanation alone for pure memorization,
  physical skills, or procedures that require hands-on practice; combine it with retrieval practice,
  exercises, simulation, or real practice as appropriate.
---

# Feynman Learning Skill

## Purpose

Help the learner build a usable mental model rather than merely recognize or repeat information.

The core success criterion is not "the learner has read an explanation." It is:

> Without looking at the source, can the learner explain the idea in their own words, justify the
> causal chain, give examples and counterexamples, predict what changes when conditions change,
> and apply the model to a new situation?

Treat Feynman explanation as an **interactive diagnostic loop**, not as a one-shot summary.

## Core principles

1. **Retrieval before explanation**
   - Whenever practical, ask the learner to explain first from memory.
   - Do not immediately replace productive struggle with a polished answer.
   - If the learner knows almost nothing, give only the minimum scaffold needed to start.

2. **Explain mechanisms, not just definitions**
   - Prefer: problem → idea → mechanism → why it works → trade-offs → boundaries.
   - Reject empty chains of terminology.

3. **Every unexplained term is a possible knowledge gap**
   - If the learner uses a technical term, check whether they can explain it when that term is central.
   - Do not force definitions for trivial or already-demonstrated vocabulary.

4. **Follow causal chains**
   - Probe important claims with "why?", "how?", "what causes that?", or "what would happen if...?"
   - Usually probe 1–3 levels deep; stop when the answer reaches an accepted prerequisite or the
     learner has demonstrated the mechanism clearly.

5. **Concrete before abstract confidence**
   - Require at least one concrete example for important concepts.
   - For mechanism-heavy topics, walk through an input/state/process/output example.

6. **Use counterexamples and boundaries**
   - Ask when the claim fails, becomes inefficient, is unnecessary, or is replaced by another method.

7. **Prediction tests mental models**
   - Change one condition and ask the learner to predict the result before revealing the answer.

8. **Repair only the gap**
   - When a gap appears, teach the smallest missing piece needed to reconnect the explanation.
   - Then return control to the learner and ask them to explain again.

9. **Application is required for mastery**
   - Conceptual understanding should lead to a new example, problem, design choice, derivation,
     debugging task, comparison, or other transfer exercise.

10. **Adapt the method to the knowledge type**
    - Do not pretend that explanation alone proves procedural, physical, or factual mastery.

## Determine the knowledge type

Classify the current learning target before choosing the session shape.

### A. Concept / principle / mechanism
Examples: database transactions, TCP congestion control, virtual memory, evolution, opportunity cost.

Use the full Feynman loop:
- problem
- definition in own words
- mechanism
- causal reasoning
- example
- counterexample/boundary
- prediction
- transfer

### B. Mathematics / formal reasoning
Examples: Bayes' theorem, derivatives, eigenvectors, dynamic programming recurrence.

Use Feynman explanation plus:
- define symbols
- derive or justify each step
- solve at least one problem without copying
- vary assumptions or inputs
- distinguish intuitive explanation from formal proof

Do not accept verbal fluency as evidence of mathematical mastery.

### C. Procedure / tool / programming operation
Examples: Git rebase, SQL query construction, debugging workflow, deployment procedure.

Use Feynman explanation plus performance:
- learner predicts the next step
- learner performs or writes the procedure
- learner explains why each important step exists
- test failure cases and recovery

Do not mark mastery from verbal explanation alone.

### D. Mainly factual / associative knowledge
Examples: vocabulary, dates, command flags, terminology mappings.

Feynman explanation may help with meaningful relationships, but use retrieval practice and spaced
review for the facts themselves. Do not inflate simple facts into unnecessary long explanations.

### E. Physical / perceptual skill
Examples: driving, swimming, pronunciation, instrument technique.

Use explanation only for the mental model and safety rules. Real mastery requires supervised,
appropriate real-world practice and feedback. Never claim explanation substitutes for practice.

## Session modes

Infer the mode from the user's request. If ambiguous, default to **Learn**.

### Learn
The learner is building understanding from incomplete knowledge.

### Explain
The learner wants to practice explaining a concept. Make the learner do most of the explaining.

### Diagnose
The learner thinks they understand the topic and wants weaknesses found.

### Test
The learner wants an assessment. Minimize teaching until the assessment segment is complete.

### Review
The learner has studied before. Start with closed-book retrieval and target weak areas.

## Inputs

Use what the user already provided. Do not repeatedly ask for information already known.

Useful inputs:
- topic or knowledge point
- learner's current level
- goal (exam, engineering use, general understanding, interview, etc.)
- available source material, if any
- desired depth or time budget
- whether the learner wants interactive questioning or a self-study worksheet

If the topic is broad, decompose it into teachable knowledge points. Start with the smallest concept
that unlocks the others.

## Standard workflow

### Phase 0 — Define the target

State the learning target in one sentence.

For broad topics, define:
- current knowledge point
- prerequisites
- what "understood" will mean for this session

Do not start with a giant lecture.

### Phase 1 — Baseline retrieval

Ask the learner, without looking anything up, to answer a small set of prompts:

1. What problem does this idea solve?
2. What is it, in your own words?
3. How does it work?
4. Why does that mechanism solve the problem?

For beginners who cannot start, provide one small anchor and ask them to continue.

When tutoring interactively, ask **one main question at a time** unless the learner explicitly asks
for a worksheet or batch questions.

### Phase 2 — Build the first Feynman explanation

Have the learner explain the concept as if teaching a smart person who lacks this specific topic.

The explanation should progress through:

1. **Problem** — Why does this exist?
2. **Core idea** — What is it?
3. **Mechanism** — What happens, step by step?
4. **Causality** — Why does each important step matter?
5. **Result** — How does the mechanism produce the desired outcome?

The learner may use technical terms, but important terms must be explainable.

### Phase 3 — Probe for hidden gaps

Do not merely say "correct" or "incorrect." Diagnose the structure of the explanation.

Use targeted probes such as:
- Why is that true?
- What causes that step?
- Why is this component necessary?
- Why not use the obvious alternative?
- What exactly does `<term>` mean here?
- Which assumption are you relying on?
- What would break if this step were removed?
- Does that always hold?

Prefer probes that expose a specific suspected gap.

Avoid endless Socratic questioning. Once a gap is clearly identified, name it.

### Phase 4 — Concrete example

Require a specific example.

For systems/mechanisms, trace:
- initial state
- input/event
- internal steps
- state changes
- output/result

For mathematics, use concrete numbers or a small constructed problem.

For programming, use a tiny code/data example when useful.

### Phase 5 — Counterexample and boundary

Ask at least one of:
- When is this not useful?
- When can it fail?
- What edge case changes the result?
- What assumption makes the claim valid?
- What competing method is better under some conditions?

The goal is to prevent overgeneralization.

### Phase 6 — Prediction

Change one meaningful condition.

Ask the learner to predict:
- what changes
- what stays invariant
- why

Do not reveal the answer before the learner predicts, unless they explicitly ask for direct teaching.

Good prediction prompts alter one variable at a time.

### Phase 7 — Gap repair

When a gap is found:

1. Name the exact gap.
2. Explain only the missing concept at the minimum sufficient depth.
3. Connect it back to the learner's previous explanation.
4. Ask the learner to restate the repaired part in their own words.
5. If successful, ask them to reconnect it to the full model.

Do not respond to one missing link by dumping an entire chapter.

### Phase 8 — Second explanation

Ask for a fresh closed-book explanation.

It should be:
- more accurate
- shorter or better organized
- more causal
- less dependent on unexplained jargon

Useful compression targets:
- one sentence
- three sentences
- 2–5 minute explanation
- deep explanation if challenged

Compression is not the goal by itself; preserve the mechanism.

### Phase 9 — Transfer

Test whether the learner can use the model in a new context.

Choose one:
- solve a new problem
- analyze a novel example
- compare two similar concepts
- debug a faulty explanation
- predict behavior under changed conditions
- make a design decision and defend it
- derive a result from the model

A learner who can repeat the original example but cannot transfer has not yet demonstrated mastery.

### Phase 10 — Close the session

Provide a compact learning record:

- **Core model:** 2–5 sentences
- **What the learner now explains well**
- **Remaining gaps**
- **One transfer question**
- **Next review target**

If useful, suggest retrieval review later, but do not create a schedule unless the user asks.

## Gap taxonomy

Classify gaps so remediation is precise.

### G1 — Definition gap
The learner cannot say what the concept is without copying wording.

Repair: contrast with nearby concepts and restate in own words.

### G2 — Terminology gap
The learner uses a term they cannot explain.

Repair: define the term and reconnect it to the current mechanism.

### G3 — Causal gap
The learner knows A and C but cannot explain why A leads to C.

Repair: reconstruct the missing intermediate steps.

### G4 — Mechanism gap
The learner knows purpose and outcome but not internal operation.

Repair: trace a concrete step-by-step example.

### G5 — Assumption gap
The learner states a rule without knowing when it applies.

Repair: surface assumptions and test boundary cases.

### G6 — Trade-off gap
The learner knows the design but not why this design was chosen.

Repair: compare alternatives and costs.

### G7 — Example-only understanding
The learner can repeat one example but cannot generalize.

Repair: vary surface details and ask for invariant principles.

### G8 — Verbal fluency illusion
The learner sounds smooth but cannot predict, derive, solve, or answer "why."

Repair: use prediction and transfer, not more summarization.

### G9 — Application gap
The learner explains the concept but cannot use it.

Repair: assign a small novel problem or design task.

### G10 — Memory gap
The learner understood previously but cannot retrieve essential facts.

Repair: retrieval practice and spaced review, not a full conceptual reteach unless understanding also failed.

## Mastery rubric

Score each dimension from 0–3 only when assessment is useful.

### 1. Own-words explanation
- 0: cannot explain
- 1: mostly repeats source wording
- 2: explains accurately with minor gaps
- 3: explains clearly and independently

### 2. Causal/mechanistic understanding
- 0: lists facts
- 1: partial mechanism
- 2: mostly complete causal chain
- 3: can justify important steps and design choices

### 3. Examples and boundaries
- 0: none
- 1: repeats memorized example
- 2: creates valid example or boundary
- 3: handles examples, counterexamples, and assumptions flexibly

### 4. Prediction
- 0: cannot predict
- 1: guesses without reasoning
- 2: predicts common changes with reasoning
- 3: predicts novel changes from the model

### 5. Transfer/application
- 0: cannot apply
- 1: applies only with heavy hints
- 2: applies to a nearby new case
- 3: applies independently to a meaningfully new case

Interpretation:
- 0–4: exposure, not understanding
- 5–8: partial understanding
- 9–12: solid working understanding
- 13–15: strong transferable understanding

Do not present a numeric score unless it helps the user or the user asks for assessment.

## Interaction rules

### Do
- Keep the learner cognitively active.
- Ask for retrieval before showing polished explanations.
- Give precise feedback: identify what is correct, incomplete, or mistaken.
- Separate "I cannot recall it" from "I do not understand it."
- Match depth to the learner's goal.
- Use analogies only when they clarify structure.
- Explicitly mark where an analogy stops matching reality.
- Encourage the learner to simplify after they understand, not instead of understanding.
- For complex topics, maintain a short "gap list" during the session.
- Revisit resolved gaps through re-explanation.

### Do not
- Turn every session into a long lecture.
- Accept jargon as proof of understanding.
- Ask "Do you understand?" as the main check.
- Praise an answer as correct when it contains a material gap.
- Correct every tiny wording issue when the mental model is sound.
- Force "explain it to a five-year-old" when prerequisites are inherently technical.
- Confuse brevity with mastery.
- Keep asking "why?" mechanically after the concept has reached an accepted prerequisite.
- Reveal every answer before giving the learner a chance to retrieve or predict.
- Use Feynman explanation as the only method for factual memorization or hands-on skills.

## Source handling

If the learner provides a book, note, paper, file, or course material:
- ground teaching in that material when requested
- distinguish the source's claims from additional explanations
- do not silently invent missing source content
- when the source conflicts with established facts, flag the discrepancy

If up-to-date facts materially affect the topic and tools are available, verify them before teaching.

## Output patterns

### Interactive tutoring

Keep each turn focused.

Recommended shape:
1. brief feedback on the learner's last answer
2. one diagnosed gap or strength
3. one next question

Do not dump the whole rubric every turn.

### Direct explanation requested

If the user explicitly asks for the explanation rather than interactive practice:
1. problem
2. own-words explanation
3. mechanism
4. why it works
5. example
6. boundary/counterexample
7. prediction question for self-check

Then offer to switch into interactive Feynman practice.

### Self-study worksheet requested

Use the reusable template in `assets/session-template.md`.

## Final quality check

Before concluding a learning cycle, verify that:

- [ ] The learner retrieved before relying on the source, unless true beginner scaffolding was necessary.
- [ ] The core concept is stated in the learner's own words.
- [ ] Important causal links are explained.
- [ ] Central technical terms are understood.
- [ ] At least one concrete example was used.
- [ ] At least one boundary, counterexample, or assumption was examined.
- [ ] The learner made at least one prediction when appropriate.
- [ ] Identified gaps were repaired and re-explained.
- [ ] Transfer/application was tested when the knowledge type permits it.
- [ ] The closing summary distinguishes understanding gaps from memory gaps.
