---
title: Stacks
position: 8
---

You can group multiple Parties into a single Node, called a Stack, to simplify your diagram. Use this judiciously, only when it improves clarity, and when identifying each individual Party isn’t relevant to your point.
{: .lead}

When you group Parties like this, the Parties are said to be "stacked", and are "in" or "inside" the Stack.


## Appearance

![Stack in a BOVS Diagram](/visualisation/diagrams/bovs-core-stacks-appearance.png){: style="width: 50%" }

* Stack Nodes are drawn as a series of overlaid circles.
  * If possible, show as many circles as there were Nodes originally, up to a maximum of 3 circles.
  * The circles in the background may be drawn with a tint.
* Label the Stack with the number and type of grouped Parties.
  * If there is more than 1 type of Party in the Stack, then use the term "Parties".
* Show an icon on the topmost circle for each type of Party in the Stack.
  * Avoid Stacks containing multiple types of Party, if you can – this can get messy.

There are two situations in which you are allowed to group Parties, to create either an Entity Stack or an Owner Stack.


## Entity Stacks

![Entity Stack in a BOVS Diagram](/visualisation/diagrams/bovs-core-stacks-entity.png){: style="width: 62.5%" }

A non-forking Chain of intermediary Entities, where each Entity is directly interested in the next, can be reduced into a Stack.

When drawing an Entity Stack, the circles are overlaid according to the diagram's [Directionality](/visualisation/core/directionality) (that is, in the direction of the Arrows).

Entity Stacks can only ever appear in the middle of a Chain. The last Entity in a Chain (i.e. which has no further interests) must be left out of any Stack.


## Owner Stacks

![Owner Stack in a BOVS Diagram](/visualisation/diagrams/bovs-core-stacks-owner.png){: style="width: 100%" }

If you have multiple Beneficial Owners who are all directly interested in the same Entities, you may choose to reduce some of them into a single Node.

When drawing an Owner Stack, the circles are overlaid perpendicular to the diagram's Directionality (that is, perpendicular to the Arrows).


*[Node]: {{ site.data.definitions.BOVS.Node }}
*[Party]: {{ site.data.definitions.BOVS.Party }}
*[Beneficial Owners]: {{ site.data.definitions.BOVS.BeneficialOwners }}
*[Chain]: {{ site.data.definitions.BOVS.Chain }}
*[Entities]: {{ site.data.definitions.BOVS.Entity }}
