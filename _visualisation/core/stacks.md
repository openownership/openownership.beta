---
title: Stacks
layout: visualisation
---

You can group multiple Parties into a single Node, called a Stack, to simplify your diagram. Use this judiciously, only when it improves clarity, and when identifying each individual Party isn’t relevant to your point.
{: .lead}

When you group Parties like this, the Parties are said to be "stacked", and are "in" or "inside" the Stack.


## Appearance

![Stack in a BOVS Diagram]()

* Stack Nodes are drawn as a series of overlaid circles.
  * If possible, show as many circles as there were Nodes originally, up to a maximum of 3 circles.
* Label the Stack with the number and type of grouped Parties.
  * If there is more than 1 type of Party in the Stack, then use the term "Parties".
* Show an icon on the topmost circle for each type of Party in the Stack.
  * Avoid Stacks containing multiple types of Party, if you can – this can get messy.

There are two situations in which you are allowed to group Parties, to create either a Chain Stack or a Beneficiary Stack.


## Chain Stacks

![Chain Stack in a BOVS Diagram]()

A non-forking Chain of Parties, where each Party is directly interested in the next, can be reduced into a Stack.

When drawing a Chain Stack, the circles are overlaid according to the diagram's [Directionality](/visualisation/core/directionality) (that is, in the direction of the Arrows).


## Beneficiary Stacks

![Beneficiary Stack in a BOVS Diagram]()

If you have multiple Subjects who are all directly interested in the same Entities, you may choose to reduce some of them into a single Node.

When drawing a Beneficiary Stack, the circles are overlaid perpendicular to the diagram's Directionality (that is, perpendicular to the Arrows).


*[Node]: {{ site.data.definitions.BOVS.Node }}
*[Party]: {{ site.data.definitions.BOVS.Party }}
*[Subjects]: {{ site.data.definitions.BOVS.Subject }}
*[Chain]: {{ site.data.definitions.BOVS.Chain }}
*[Entities]: {{ site.data.definitions.BOVS.Entity }}