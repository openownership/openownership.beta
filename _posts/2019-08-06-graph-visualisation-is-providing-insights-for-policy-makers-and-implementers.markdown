---
title: Graph visualisation is providing insights for policy-makers and implementers
date: 2019-08-06 10:00:00 Z
published: false
tags:
- the beneficial ownership data standard
- openownership register
- graph visualisation
- policy impact
- Anticorruption
image: "/uploads/congostate%20cropped1.png"
description: In our last blog, we showcased the new features of our data visualisation
  tool which enable us to better understand the complexities of beneficial ownership
  networks and the wide sphere of influence of named individuals. These examples helped
  spark significant policy insights, particularly when thinking about what beneficial
  ownership data collection should entail. These insights were born from the different
  national beneficial ownership implementations that we could now visualise in the
  OpenOwnership Register.
author: Laurence Bascle
---

In our last blog, we showcased the new features of our data visualisation tool which enable us to better understand the complexities of beneficial ownership networks and the wide sphere of influence of named individuals. These examples helped spark significant policy insights, particularly when thinking about what beneficial ownership data collection should entail. These insights were born from the different national beneficial ownership implementations that we could now visualise in the [OpenOwnership Register](https://register.openownership.org/).

The UK PSC regime allows companies to declare another company as an equivalent of their beneficial owner [under specific conditions](https://register.openownership.org/data_sources/uk-psc-register). While in practice the implementation is very problematic (RLE conditions are essentially not being enforced), the advantage of this approach is that companies are declaring either their Ultimate Beneficial Owners (UBO), and/or the next level of corporate ownership. This allows us to gain visibility of the full ownership network, rather than have intermediary corporate ownership locked away in a black box, which is what happens when only UBO data is provided.

When [EITI](https://eiti.org/) shared data collated from the extractive industries between 2015 and 2017, some countries such as the Democratic Republic of Congo provided indirect ownerships by default. This allows analysts to get a very quick sense of the shape of a local extractive market.

However other national registers, such as the [Denmark Central Business Register (CVR)](https://datacvr.virk.dk/data/) are only sharing ultimate beneficial owner data, arguably driven by a desire for accuracy and efficiency. This is indeed very effective: where many UK networks of ownership end with ‘unknown/no person’, Denmark often tracks down the UBO. However, this makes for pretty boring graphs.

It should be noted that Denmark doesn’t withhold intermediary corporate ownership: this kind of ownership is, perhaps as it should be, defined as ‘legal ownership’ (legale ejere), rather than ‘beneficial ownership’ (reelle ejere), and therefore sits within the normal commerce register, under a separate data feed/API. The separation of concerns is undoubtedly a cleaner and more elegant approach, but the drawback is that more resources and effort are required to present the full picture. To accommodate this, the OpenOwnership Register may start ingesting ‘legal ownership’ data as well.

Another worthwhile consideration is that complex corporate groups tend to be multinational. Provided data is aggregated in a standardised, machine-readable open-data format, ownership networks will be tracked cross-border, benefiting from the visibility of the most transparent regime. This emphasises the need for an international standard, which OpenOwnership has been trialling under the name of BODS, or [Beneficial Ownership Data Standard](https://www.openownership.org/guide/systems/). This can help to reveal complex relationships that would otherwise go unnoticed. For example, the OpenOwnership Register, which is using BODS, reveals how ‘A.P. MØLLER - MÆRSK A/S’, one of the largest Danish corporations has a large network of subsidiaries in the UK.

The graph walks through ownership relationships, regardless of the provenance of the data, connecting nodes and linking entities across multiple jurisdictions.

Graph visualisation is not a gimmick. It is a critical tool in supporting investigations and due diligence and in enabling policy insights to be gleaned from the data. We have developed an accessible solution to ensure that it isn’t confined to a select-few, but on the contrary opens up transparency to a wider section of civil society. Finally and more surprisingly perhaps, graphs allow us to explore the very nature of beneficial ownership and the data models that underpin it, bringing invaluable insights to decision-makers who courageously champion corporate transparency around the world.