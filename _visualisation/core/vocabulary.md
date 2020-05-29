---
title: Vocabulary and Icons
layout: visualisation
---

**The "vocabulary" of the Beneficial Ownership Visualisation System (BOVS) specifies the types of Parties that can appear at the Nodes** in a BOVS diagram.


## Subjects

The following types of Parties are Subjects, and so must appear at the start of all Chains in a diagram.

{% capture PersonInfo %}
{{ site.data.definitions.BOVS.Person }} Note that the plural in the context of BOVS is "Persons" not "people".

Persons are indicated with the [Person icon](/visualisation/resources).
{% endcapture %}
{% capture PersonInfo %}{{ PersonInfo | markdownify }}{% endcapture %}

{% capture RegimeInfo %}
{{ site.data.definitions.BOVS.Regime }}

Regimes may be indicated either with:

* The flag of that Regime.
* A horizontal rectangle containing a textual abbreviation for that Regime. The abbreviation should be the Regime's [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2){:target="_blank"} 2-letter country code, if such a code exists.

You must choose one of these styles for how Regimes are visualised across your entire diagram.
{% endcapture %}
{% capture RegimeInfo %}{{ RegimeInfo | markdownify }}{% endcapture %}

{% capture SubjectTable %}
| ![Person](bovs-person.jpg) | Person | PersonInfo
| ![Regime](bovs-regime.jpg) | Regime | RegimeInfo
{: .unstriped}
{% endcapture %}

{{ SubjectTable | markdownify
  | replace: "PersonInfo", PersonInfo
  | replace: "RegimeInfo", RegimeInfo
}}


## Objects

The following types of Parties are Objects, and so never appear at the start of a Chain.

{% capture EntityInfo %}
{{ site.data.definitions.BOVS.Entity }}

Entities are indicated with the [Entity icon](/visualisation/resources).

If you are able, and want, to be more specific than Entity, then the following more specific types of Party can be used.
{% endcapture %}
{% capture EntityInfo %}{{ EntityInfo | markdownify }}{% endcapture %}

{% capture OrganisationInfo %}
{{ site.data.definitions.BOVS.Organisation }}

Organisations are indicated with the [Organisation icon](/visualisation/resources).

You may use the Label "Organisation" with the Organisation icon, or, if you are able, and want, to be more specific than Organisation, you can use a more specific label like "Company" or "Charity".
{% endcapture %}
{% capture OrganisationInfo %}{{ OrganisationInfo | markdownify }}{% endcapture %}

{% capture ObjectTable %}
| ![Entity](bovs-person.jpg)       | Entity       | EntityInfo
| ![Organisation](bovs-regime.jpg) | Organisation | OrganisationInfo
{% endcapture %}

{{ ObjectTable | markdownify
  | replace: "EntityInfo", EntityInfo
  | replace: "OrganisationInfo", OrganisationInfo
}}


## Icons

We provide icons for the above types of Party in our [Resources](/visualisation/resources) section. You are free to use either these or your own icons. However, if using your own icons, they must closely resemble the BOVS icons.


*[Nodes]: {{ site.data.definitions.BOVS.Node }}
*[Parties]: {{ site.data.definitions.BOVS.Party }}
*[Subjects]: {{ site.data.definitions.BOVS.Subject }}
*[Objects]: {{ site.data.definitions.BOVS.Object }}
*[Chains]: {{ site.data.definitions.BOVS.Chain }}