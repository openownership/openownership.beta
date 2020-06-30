---
title: Unknowns
position: 9
---

Often, our picture of a beneficial ownership situation contains many unknowns. The following rules allow BOVS Diagrams to portray what we *do* know and indicate what we *don't*.
{: .lead}


## Unknown Parties

**We may know that Parties exist, but *lack detail* about them.** For instance:

* We may know that an intermediary exists in between two Entities, but have no information about it
* We may know that an Entity is owned by a Person, but not know whom
* A Person may be anonymous
  * For legitimate reasons
  * Due to non-disclosure or missing data

As a Party is known to exist – despite its details being unknown – we still draw a Node for it:

![BOVS Diagram with Unknown Party using unknown icon variant and labelled Unknown](/visualisation/diagrams/bovs-core-unknowns.png){: style="width: 62.5%" }

* Use the Unknown variant of the icon for that type of Party (see below)
* Label the Node with an [Identifier](/visualisation/core/parties-nodes), using the status "Unknown" or "Anonymous" as appropriate

### Icons

Each icon in the [Vocabulary](/visualisation/core/vocabulary) has an Unknown variant. In general, the Unknown variant of an icon is the outline of the original icon, with a question mark inside it.

### Unknown Number

![BOVS Diagram containing Parties of an unknown number](/visualisation/diagrams/bovs-core-unknowns-number.png){: style="width: 100%" }

**We may know that Parties exist, but not *how many*.** In such situations:

* Show a dotted [Stack](/visualisation/core/stacks).
* Use an Unknown Party icon on the Stack.
  * If you know the *type* of Party but not the *number*, use the Unknown variant of the icon for that type of Party.
  * If you also don't know the type of Party, just show a question mark on the Stack.
* Label the Stack as "X or more Y", where
  * X is a number, 0 or greater
  * Y is the type of Party, written in the plural

### Stacking Unknowns

Nodes for Unknown Parties can be [stacked](/visualisation/core/stacks) following the same rules as for known Parties.

* If a Stack contains only unknown Parties, include the status "Unknown" in the Stack Label, e.g. "3 Unknown Entities".
  * If you are including an Unknown Number Node in the Stack, the Stack Label must also include "or more". For instance, an "Unknown Person" stacked together with "2 or more Unknown Parties" gives a Stack labelled with "3 or more Unknown Parties".
* If a Stack contains both both known and unknown types of Parties:
  * Consider the Labels for just the known Parties and the unknown Parties separately.
  * The Label for the Stack is the combination of the two, joined with a "+", e.g. "2 Persons + 3 Unknown Organisations".


## Obscured Interests

**We may know an interest exists, but lack information about it** – such interests are referred to as 'obscured'. This applies in the cases of:

**Unknown *nature*** of interest
: Not known if the interest includes control, and/or not known if the interest includes ownership.

**Unknown *strength*** of interest
: The nature of interest is known, but not the strength of interest (it is not quantified).

The Arrows for the above two types of unknown interest may be drawn with a tint.

***Uncertain* strength** of interest
: The nature of interest is known, but the strength of interest is only known to be within a range, e.g. 10-20%.

**Unquantifiable** aspects of interest
: All or part of the interest is of a nature that cannot be expressed objectively as a number.

All of these obscured interests, despite the missing information, should be included in your diagram.

The Arrows for obscured interests may be treated differently by other rules, such as those for [Annotation](/visualisation/optional/annotation). As such, it is recommended to use Annotation especially when your diagram includes obscured interests.


*[Entity]: {{ site.data.definitions.BOVS.Entity }}
*[Entities]: {{ site.data.definitions.BOVS.Entity }}
