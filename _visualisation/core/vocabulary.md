---
title: Vocabulary and Icons
position: 2
---

The BOVS "vocabulary" specifies the types of Parties that can appear at the Nodes in a BOVS diagram.
{: .lead }


## Beneficial Owners

The following types of Parties are types of Beneficial Owner, and so must appear at the start of all Chains in a diagram.


{% capture PersonInfo %}
{{ site.data.definitions.BOVS.Person }} Note that the plural in the context of BOVS is "Persons" not "people".

Persons are indicated with the [Person icon](/visualisation/resources).
{% endcapture %}
{% capture PersonInfo %}{{ PersonInfo | markdownify }}{% endcapture %}


{% capture StateInfo %}
{{ site.data.definitions.BOVS.State }}

States are indicated with the [State icon](/visualisation/resources).

A specific State is indicated either with:

* The flag of that State. If you use this style at all, you must use it for all States that have a flag.
* The State icon, with the addition of a textual abbreviation for that State written inside the icon.

{% endcapture %}
{% capture StateInfo %}{{ StateInfo | markdownify }}{% endcapture %}


{% capture ListedInfo %}
{{ site.data.definitions.BOVS.Listed }}

Public Listed Companies are indicated with the [Public Listed Company icon](/visualisation/resources).
{% endcapture %}
{% capture ListedInfo %}{{ ListedInfo | markdownify }}{% endcapture %}


{% capture OwnerTable %}
| ![Person](/visualisation/resources/bovs-person.png){: style="width: 10em" }              | **Person** | PersonInfo
| ![State](/visualisation/resources/bovs-state.png){: style="width: 10em" }  | **State** | StateInfo
| ![Listed Company](/visualisation/resources/bovs-listed.png){: style="width: 10em" }      | **Public Listed Company** | ListedInfo
{: .unstriped}
{% endcapture %}

{{ OwnerTable | markdownify
  | replace: "PersonInfo", PersonInfo
  | replace: "StateInfo", StateInfo
  | replace: "ListedInfo", ListedInfo
}}


## Owned Entities

The following types of Parties are Owned Entities, and so never appear at the start of a Chain.

{% capture EntityInfo %}
{{ site.data.definitions.BOVS.Entity }}

Entities are indicated with the [Entity icon](/visualisation/resources).

"Entity" is the most generic term for all the types of Party which can be owned. All of the Parties in this table are kinds of Entity.
{% endcapture %}
{% capture EntityInfo %}{{ EntityInfo | markdownify }}{% endcapture %}

{% capture OrganisationInfo %}
{{ site.data.definitions.BOVS.Organisation }}

Organisations are indicated with the [Organisation icon](/visualisation/resources).

You may use the Label "Organisation" with the Organisation icon, or, if you are able, and want, to be more specific than Organisation, you can use a more specific label like "Company" or "Charity".
{% endcapture %}
{% capture OrganisationInfo %}{{ OrganisationInfo | markdownify }}{% endcapture %}

{% capture EntitiesTable %}
| ![Entity](/visualisation/resources/bovs-entity.png){: style="width: 10em" }             | **Entity**       | EntityInfo
| ![Organisation](/visualisation/resources/bovs-organisation.png){: style="width: 10em" } | **Organisation** | OrganisationInfo
{: .unstriped}
{% endcapture %}

{{ EntitiesTable | markdownify
  | replace: "EntityInfo", EntityInfo
  | replace: "OrganisationInfo", OrganisationInfo
}}

You may choose just to identify all Owned Entities just as "Entities", or select certain types of Parties (e.g. Companies) for which you will identify their type more specifically.


## Icons

We provide icons for the above types of Party in our [Resources](/visualisation/resources) section. You are free to use either these or your own icons. However, if using your own icons, they must closely resemble the BOVS icons.


*[Nodes]: {{ site.data.definitions.BOVS.Node }}
*[Parties]: {{ site.data.definitions.BOVS.Party }}
*[Beneficial Owner]: {{ site.data.definitions.BOVS.BeneficialOwner }}
*[Owned Entities]: {{ site.data.definitions.BOVS.OwnedEntities }}
*[Chains]: {{ site.data.definitions.BOVS.Chain }}
