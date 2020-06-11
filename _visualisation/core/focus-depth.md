---
title: Focus and Depth
position: 1.06
---

Normally, diagrams will focus on a given Entity and show all Parties with either ownership or control interests in that Entity, either directly or indirectly. However, you may wish to adopt a different focus or limit which parties or interests are shown.
{: .lead}


## Focus

Your diagram's focus determines which Parties and interests are included.

### Parties

**Diagrams have either an Object or Subject Focus.** That is, they either:

* Focus on selected Objects (at the ends of Chains), then trace backwards all of their Beneficiaries.
* Focus on selected Subjects (at the starts of Chains), and trace forwards all the Objects they are interested in.

#### Object Focus

![BOVS Diagram with Object Focus]()

Diagrams with an Object Focus (the most common) show all the Parties that exist in the reverse direction of the Arrows from the selected Objects (usually just one). For instance, it may trace all of the Parties interested in a specific Company, back to a set of Persons.

#### Subject Focus

![BOVS Diagram with Subject Focus]()

Diagrams with a Subject Focus show all the Parties that exist in the forward direction of the Arrows from the selected Subjects (usually just one). For instance, it may show all the interests of a specific Person.

### Interests

**Normally, BOVS diagrams show both ownership and control interests,** that is, they lack an Interest Focus.

#### Interest Focus

![BOVS Diagram with Interest Focus]()

You may choose to adopt an Interest Focus, that is, include only one type of interest. If so:

* Only draw Arrows and Nodes for Parties with your chosen type of interest (known or [unknown](/visualisation/core/unknowns)).
* Clearly indicate on your diagram that it shows only your chosen type of interest.


## Depth

**Diagrams have a Depth, which, unless you decide and note otherwise, is unlimited.** All Chains in the diagram are cut short at a length equal to the Depth.

In **Object Focus** diagrams, the Chains in the reverse direction from the Entities at the end should be cut short after the specified Depth. This allows you to focus on:

* The ultimate Beneficiaries of the Entity you are focusing on (unlimited Depth)
* The Parties interested in the Entity through a given number of intermediaries (Depth X)
* The immediate Beneficiaries of the Entity only (Depth 1)

In **Subject Focus** diagrams, the Chains in the forward direction from the Subjects at the start should be cut short after the specified Depth. This allows you to show either:

* All the Entities that the Subjects you are focusing on have an interest in, through any number of intermediaries (unlimited Depth)
* All the Entities that the Subjects have an interest in, through a given number of intermediaries (Depth X)
* The Direct interests of the Subjects only (Depth 1)

Depth should be limited only for the above reasons, that is, not for cosmetic reasons, to make diagrams fit into a given space, or to hide Parties not relevant to your point. If this is your chief concern, use [Stacks](/visualisation/core/stacks) rather than limiting your diagram's Depth.

### Appearance

![BOVS Diagram with Limited Depth]()

If you choose to use a Depth that is not unlimited:

* You must state the Depth you have chosen clearly in the information provided with your diagram.
* Any Chains that are cut short due to your choice must indicate this with a line that trails off (see image).


*[Parties]: {{ site.data.definitions.BOVS.Party }}
*[Subjects]: {{ site.data.definitions.BOVS.Subject }}
*[Objects]: {{ site.data.definitions.BOVS.Object }}
*[Entity]: {{ site.data.definitions.BOVS.Entity }}
*[Chains]: {{ site.data.definitions.BOVS.Chain }}
*[Direct]: {{ site.data.definitions.BOVS.Direct }}