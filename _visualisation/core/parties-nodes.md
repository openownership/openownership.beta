---
title: Parties (Nodes)
position: 2
---

Nodes represent interested Parties, such as Persons, Entities or States.
{: .lead}


## Appearance

![Parties, Beneficial Owners and Entities in a BOVS Diagram](/visualisation/diagrams/bovs-core-parties.png){: style="width: 62.5%" }

* Nodes are drawn as a circle containing an icon.
  * Always draw circles/icons at the same size.
  * Try to space nodes at regular intervals across the diagram.
* The icon used indicates the type of Party that the node represents.
  * See the [Vocabulary](/visualisation/core/vocabulary) for the valid types of Party and the correct icons to use for each.


### Labels

Nodes must have a Label underneath, identifying the Party. The Label can either be:

* The Party's proper name (if known).
* A unique Identifier that you create (see below).

For States, the Label may be more specific than the icon. For instance, the icon would identify the governing body (e.g. the UK), while the Label might more specifically identify the "Department of Transport".


### Identifiers

Instead of naming a Party in its Label, you can create an Identifier. Do this when identifying the name is not [relevant](/visualisation/core/relevance) or is not known. An Identifier is formed from **Status + Type + Unique ID**:

|      | Status         | Type               | Unique ID
|      | (if required)  | The type of Party  | A unique incrementing letter or number
| --------------------------------------------
| e.g. | Anonymous      | Person             | A
| e.g. |                | Entity             | 2
{: .unstriped}

For each of these parts:

{% capture IdentifierPartTable %}
| **Status**      | Applies only if the Party is [Unknown or Anonymous](/visualisation/core/unknowns)
| **Type**        | May be any type defined in the [Vocabulary](/visualisation/core/vocabulary)
| **Unique ID**   | UniqueIDInfo
{: .unstriped}
{% endcapture %}

{% capture UniqueIDInfo %}
* Use either only letters or only numbers across an entire diagram.
* The letter or number must be unique even across different types of Party.
  * For instance, you cannot have Person A and Company A. The Identifiers would need to be Person A and Company B.
{% endcapture %}
{% capture UniqueIDInfo %}{{ UniqueIDInfo | markdownify }}{% endcapture %}

{{ IdentifierPartTable | markdownify
  | replace: "UniqueIDInfo", UniqueIDInfo
}}

So, for instance, a valid set of Identifiers might be:

* Anonymous Person A
* Entity B
* Unknown State C
* Organisation D
* Company E


*[Nodes]: {{ site.data.definitions.BOVS.Node }}
*[Parties]: {{ site.data.definitions.BOVS.Party }}
*[State]: {{ site.data.definitions.BOVS.State }}
*[Entities]: {{ site.data.definitions.BOVS.Entities }}