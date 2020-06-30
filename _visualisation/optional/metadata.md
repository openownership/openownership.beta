---
title: Metadata Overlays
position: 4
short_title: Metadata
---

Metadata Overlays is an [Optional Feature](/visualisation/optional/) of BOVS Diagrams. It allows further information about Parties to be shown as icons overlaid on their Nodes.
{: .lead}


## Metadata Types

The types of metadata you wish to show are your choice; we envisage that these are likely to include properties such as:

| Metadata Type              | Explanation
| ----------------------------
| Jurisdiction               | Which State (e.g. country) has jurisdiction over this Party?
| Disclosure Status          | Has this Party fully disclosed its beneficial ownership information?
| Below Disclosure Threshold | Is this Party below the threshold for disclosure?
{: .unstriped }

Each metadata type must be a property of a Party that can take on one or more of a finite list of values.


## Appearance

Metadata values are shown by overlaying icons around the circumference of the related Party's Node.

![BOVS Diagram with Optional Feature for Metadata Overlays](/visualisation/diagrams/bovs-optional-metadata.png){: style="width: 62.5%" }

For each type of metadata, determine all of its possible values, and what icons will be used to indicate each of these values.

Each type of metadata has a reserved position where its related icons can appear.

![Examples of positions where metadata can appear on a Node in a BOVS Diagram](/visualisation/diagrams/bovs-optional-metadata-positions.png){: style="width: 62.5%" }

You may determine these positions as you see fit, however we recommend:

* Prefer positions at 45, 135, 225 and 315 degree (i.e. the diagonal compass points)
* Avoid positions on the bottom of the circle, where icons may appear too close to the Node's label.

When a particular value for a type of metadata applies to a Party, show the icon for that value in the position reserved for that type of metadata.

### Null Values

Where a type of metadata can have a value of **false, none, zero or not applicable**:

* You may use an explicit icon for this.
* You may denote this simply by *not* showing an icon in these cases.

### Unknown Values

![BOVS Diagram with metadata that have unknown values](/visualisation/diagrams/bovs-optional-metadata-unknowns.png){: style="width: 25%" }

It is possible that the value for a type of metadata is unknown for some Parties. In this case, show a question mark in place of an icon, in the correct position for that type of metadata.

### Key

![BOVS Diagram with metadata and key](/visualisation/diagrams/bovs-optional-metadata-key.png){: style="width: 87.5%" }

Include a key on your diagram fully explaining all of your icons.


## Relevance

Show metadata icons on all and only the [relevant](/visualisation/core/relevance) Nodes in your diagram.

* Metadata should not be added to non-relevant Nodes.
* Omission of metadata (on a relevant Node) is meaningful. This either means:
  * Compared with when the icon is shown, the opposite is true.
  * Zero, none or not applicable.


## Multiple Metadata

![BOVS Diagram with multiple values for given types of metadata](/visualisation/diagrams/bovs-optional-metadata-multiple.png){: style="width: 25%" }

If there are multiple values for a type of metadata:

* Show multiple icons.
* Cluster the icons together by slightly overlapping them in a line extending from the Node.

Selected icons can be grouped into a Metadata Stack. Do this if too many types of metadata apply.

![BOVS Diagram with multiple values for given types of metadata, and some of these values grouped into stacks](/visualisation/diagrams/bovs-optional-metadata-stacks.png){: style="width: 53.125%" }

* Replace grouped icons with a series of overlaid circles.
* If possible, show as many circles as there were icons originally, up to a maximum of 3 circles.
* The Metadata Stack shows the number of icons grouped, in place of an icon.


## Standard Metadata

Currently, only one type of metadata is defined in a standard format by BOVS:

| Type                   | Icon
| ------------------------
| **Jurisdiction**       | Identify the State that has jurisdiction using the same icon you would use for that State as a Party.
{: .unstriped }


*[Party]: {{ site.data.definitions.BOVS.Party }}
*[State]: {{ site.data.definitions.BOVS.State }}