---
title: Annotation
position: 2.01
---

Annotation is an [Optional Feature](/visualisation/optional) of BOVS Diagrams. It allows you to label Arrows to be more specific about the interest relationships they represent.
{: .lead}


## Appearance

Annotations are text labels that appear alongside Arrows. They may appear at the beginning, middle or end of the Arrow; whatever is the clearest in each situation. These labels are written in a standard way:

* The nature of interest is given in the active voice, e.g. "Owns" or "Controls"
* The level of interest is given as a percentage, e.g. "10%".

Annotations respect the [Chirality](/visualisation/core/chirality) rule, that is:

* Annotations about ownership appear on the left/below Arrows
* Annotations about control appear on the right/above Arrows


## Detail Level

Annotations across your diagram must use a consistent detail level. Annotations may either *qualify* interests or additionally *quantify* them. In most cases, you should prefer to provide full detail, that is, to quantify interests.

### Qualifying Interests

![BOVS Diagram with Annotations Qualifying Interests]()

Annotations indicate if the nature of interest is ownership, control or both; but they do not indicate the level of interest.

If your diagram also has an [Interest Focus](/visualisation/core/focus-depth), omit all annotations except those to mark Unknown or Unquantifiable interests (see below).

### Quantifying Interests

![BOVS Diagram with Annotations Quantifying Interests]()

Annotations additionally indicate the level of ownership or control.

If your diagram also has an [Interest Focus](/visualisation/core/focus-depth), omit the nature of interest and write the level (percentage) only.


## Relevance

All [relevant](/visualisation/core/relevance) Arrows in your diagram must be annotated.

* Annotations should not be added to non-relevant Arrows.
* Omission of an annotation (of a relevant Arrow) means absence of interest.
  * e.g. if there is no annotation on the side of the Arrow where ownership information appears, it means there is no ownership interest.


## Indirect Arrows

![BOVS Diagram with Indirect Arrow]()

You may choose to add Arrows that connect distant Parties, and annotate these. These are indirect Arrows.

* Indirect Arrows are drawn with a dotted or dashed line.
* This Arrow must be annotated with the [compounded interest](/visualisation/core/summarisation) of the first Party in the last.


## Stacks

![BOVS Diagram with Annotated Stack]()

If a [Stack](/visualisation/core/stacks) appears at a Node you are considering to be [relevant](/visualisation/core/relevance), you must annotate the Node with a [summary](/visualisation/core/summarisation) of the interests within the Stack. This ensures the interest flow along the Chain remains clear.

Where a **Chain Stack** appears along a relevant Chain:

* Add an annotation directly to the Chain Stack, as if the Stack were a Arrow.
* Label this with the [compounded interests](/visualisation/core/summarisation) of the Parties within the Stack.

Where a **Beneficiary Stack** appears along a relevant Chain:

* Draw the Arrow from the Beneficiary Stack as an Indirect Arrow (see above).
* Label this with the [combined interests](/visualisation/core/summarisation) of the Parties in the Stack.


## Obscured Interests

If the **nature** of interest is unknown:

* Write '?' on the appropriate side of the Arrow, respecting the [Chirality](/visualisation/core/chirality) rule, if it is not known whether the interest includes control, or it is not known whether the interest includes ownership.
* If the nature of interest is completely unknown, write a '?' on both sides of the Arrow.

If the **level** of interest is unknown, and you quantifying interests:

* Write '?%' on the appropriate side of the Arrow.
* Don’t skip the '%'. Otherwise it looks like the nature is in question, not the level.

If the level has **uncertainty** in it:

* Write a percentage range, e.g. "Owns 10-15%", "Controls 50-100%".

If there is an **unquantifiable** interest:

* In place of a textual annotation, or alongside one, show an icon.
* Use a different icon for each type of unquantifiable interest in your diagram.
* Include a key in your diagram offering information about each type of unquantifiable interest.