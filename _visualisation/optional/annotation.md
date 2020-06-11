---
title: Annotation
position: 2.01
---

Annotation is an [Optional Feature](/visualisation/optional) of BOVS Diagrams. It allows you to label Arrows to be more specific about the interest relationships they represent.
{: .lead}


* TOC
{:toc}

## Appearance

![BOVS Diagram with Annotations](/visualisation/diagrams/bovs-optional-annotation.png){: style="width: 62.5%" }

Annotations are text labels that appear alongside Arrows. They may appear at the start, middle or end of the Arrow; whatever is the clearest in each situation (this is usually the start). These labels are written in a standard way:

* The nature of interest is given in the active voice, e.g. "Owns" or "Controls"
* The level of interest is given as a percentage, e.g. "10%".

Annotations respect the [Chirality](/visualisation/core/chirality) rule, that is:

* Annotations about ownership appear on the left/below Arrows
* Annotations about control appear on the right/above Arrows


## Detail Level

Annotations across your diagram must use a consistent detail level. Annotations may either *qualify* interests or additionally *quantify* them. In most cases, you should prefer to provide full detail, that is, to quantify interests.

### Qualifying Interests

Annotations indicate if the nature of interest is ownership, control or both; but they do not indicate the level of interest.

![BOVS Diagram with Annotations Qualifying Interests](/visualisation/diagrams/bovs-optional-annotation-qualified.png){: style="width: 100.5%" }

If your diagram also has an [Interest Focus](/visualisation/core/focus-depth), omit all annotations except those to mark Unknown or Unquantifiable interests (see below).

### Quantifying Interests

Annotations additionally indicate the level of ownership or control.

![BOVS Diagram with Annotations Quantifying Interests](/visualisation/diagrams/bovs-optional-annotation-quantified.png){: style="width: 100%" }

If your diagram also has an [Interest Focus](/visualisation/core/focus-depth), omit the nature of interest and write the level (percentage) only.

![BOVS Diagram with Annotations and Interest Focus](/visualisation/diagrams/bovs-optional-annotation-interest-focus.png){: style="width: 75%" }


## Relevance

![BOVS Diagram showing Annotation applied only to relevant Arrows](/visualisation/diagrams/bovs-optional-annotation-relevance.png){: style="width: 100%" }

All [relevant](/visualisation/core/relevance) Arrows in your diagram must be annotated.

* Annotations should not be added to non-relevant Arrows.
* Omission of an annotation (of a relevant Arrow) means absence of interest.
  * e.g. if there is no annotation on the side of the Arrow where ownership information appears, it means there is no ownership interest.


## Indirect Arrows

![BOVS Diagram with Indirect Arrow](/visualisation/diagrams/bovs-optional-annotation-indirect.png){: style="width: 100%" }

You may choose to add Arrows that connect distant Parties, and annotate these. These are indirect Arrows.

* Indirect Arrows are drawn with a dotted or dashed line.
* This Arrow must be annotated with the [compounded interest](/visualisation/core/summarisation) of the first Party in the last.


## Stacks

If a [Stack](/visualisation/core/stacks) appears at a Node you are considering to be [relevant](/visualisation/core/relevance), you must annotate the Node with a [summary](/visualisation/core/summarisation) of the interests within the Stack. This ensures the interest flow along the Chain remains clear.

Where a **Chain Stack** appears along a relevant Chain:

![BOVS Diagram with Annotated Chain Stack](/visualisation/diagrams/bovs-optional-annotation-stack-chain.png){: style="width: 100%" }

* Add a disconnected Indirect Arrow, floating beside the Node, parallel to the Arrows leading into/out of it.
  * Add an Arrow for each nature of interest present inside the Stack (i.e. ownership or control).
  * Add these Arrows on the appropriate sides of the Node, respecting the [Chirality](/visualisation/core/chirality) rule.
* Label these Arrows with the [compounded interests](/visualisation/core/summarisation) of the Parties within the Stack.

Where a **Beneficiary Stack** appears along a relevant Chain:

![BOVS Diagram with Annotated Beneficiary Stack](/visualisation/diagrams/bovs-optional-annotation-stack-beneficiary.png){: style="width: 100%" }

* Draw the Arrow from the Beneficiary Stack as an Indirect Arrow (see above).
* Label this with the [combined interests](/visualisation/core/summarisation) of the Parties in the Stack.


## Obscured Interests

### Unknown Nature

![BOVS Diagram with Annotations for interests that are unknown in nature](/visualisation/diagrams/bovs-optional-annotation-unknown-nature.png){: style="width: 100%" }

If the **nature** of interest is unknown:

* Write '?' on the appropriate side of the Arrow, respecting the [Chirality](/visualisation/core/chirality) rule, if it is not known whether the interest includes control, or it is not known whether the interest includes ownership.
* If the nature of interest is completely unknown, write a '?' on both sides of the Arrow.

### Unknown Level

![BOVS Diagram with Annotations for unknown levels of interest](/visualisation/diagrams/bovs-optional-annotation-unknown-level.png){: style="width: 75%" }

If the **level** of interest is unknown, and you are quantifying interests:

* Write '?%' on the appropriate side of the Arrow.
* Don’t skip the '%'. Otherwise it looks like the nature is in question, not the level.

### Uncertain Level

![BOVS Diagram with Annotations for uncertain levels of interest](/visualisation/diagrams/bovs-optional-annotation-uncertain-level.png){: style="width: 75%" }

If the level has **uncertainty** in it:

* Write a percentage range, e.g. "Owns 10-15%", "Controls 50-100%".

### Unquantifiable Interest

![BOVS Diagram with Annotations for interests that are unquantifiable](/visualisation/diagrams/bovs-optional-annotation-unquantifiable.png){: style="width: 75%" }

If there is an **unquantifiable** interest:

* In place of a textual annotation, or alongside one, show an icon.
* Use a different icon for each type of unquantifiable interest in your diagram.
* Include a key in your diagram offering information about each type of unquantifiable interest.