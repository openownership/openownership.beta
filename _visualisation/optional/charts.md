---
title: Charts
position: 2.04
---

Charts are an [Optional Feature](/visualisation/optional) of BOVS Diagrams. It allows you to add a chart directly into the diagram in order to show a given Entity's ownership/control breakdown in detail.
{: .lead}


## Beneficiaries

There are two charting modes. The mode determines which Beneficiaries are shown on the chart.

### Ultimate Beneficiaries

The chart includes an item for each Subject with a Chain leading to the given Entity.

This is the most common mode, which can be used to clearly show the end result of all the interests in your diagram.

### Direct Beneficiaries

The chart includes an item for each of the given Entity's directly interested Parties (i.e. the Nodes just before it).

If you use this mode, you should not also use [Annotation](/visualisation/optional/annotation) as this duplicates information.


## Appearance

Charts are shown as bar charts attached to the Node of the given Entity.

* The chart shows a breakdown of either the Beneficiaries with ownership interest or those with control interest.
* The chart appears on the appropriate side of the Node according to the [Chirality](/visualisation/core/chirality) rule.
* Nodes may have 2 charts; one each for its ownership and control breakdown.

Each chart should include one bar for each Beneficiary.

* The Beneficiaries may be different between ownership and control charts.
* Label each bar with the same Label that appears beneath that Beneficiary's Node.
  * The bar label should appear on the outside end of the bar.
* Colour the bar according to the [Colour](/visualisation/optional/colour) rules (if you are using them).
* Attempt to sort bars by the level of interest, using a consistent sorting direction across your diagram.

The chart must have a scale.

* The scale runs from 0% at the closest point to the Node, to 100% at the further point.
* Label the scale either Ownership or Control as appropriate.

If a Beneficiary is shown in the diagram, it must appear in the chart (otherwise the breakdown is misleadingly simplified). However, you can group Beneficiaries into a single bar (see below) if desired.


## Bar Grouping

You may choose to combine several bars into one.

* The value of the grouped bar is the [combined interest](/visualisation/core/summarisation) of the Beneficiaries that are grouped.
* Label grouped bars with the number and type of Parties grouped. e.g.
  * 3 Persons
  * 2 Unknown Entities
  * 6 Parties (if Parties of more than one type are grouped)
  * 3 or more Unknown Parties


## Obscured Interests

The rules below describe how to handle obscured interests in bar charts.

### Unknown Interests

If it is not known whether a Beneficiary has an interest:

* Do not show a bar.
* Instead, show a question mark.

### Uncertain Interests

Uncertain ranges are indicated by a semi-shaded region of the bar. For instance:

* If ownership is between 50-100%, draw a bar 50% fully-shaded and 50% semi-shaded.
* If ownership is 0-25%, draw a 25% bar that is only semi-shaded.

"Semi-shading" can be any style that is less prominent than the regular colouring for the bar.

### Unquantifiable Interests

Where an interest has an unquantifiable element:

* Show an icon representing this unquantifiable property.
* The icon should appear just before the label.
* Use a different icon for each type of unquantifiable interest in your diagram.
* Include a key in your diagram offering information about each type of unquantifiable interest.