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
image: "/uploads/congostate%20cropped2.png"
description: In our last blog, we showcased the new features of our data visualisation
  tool which enable us to better understand the complexities of beneficial ownership
  networks and the wide sphere of influence of named individuals. These examples helped
  spark significant policy insights, particularly when thinking about what beneficial
  ownership data collection should entail. These insights were born from the different
  national beneficial ownership implementations that we could now visualise in the
  OpenOwnership Register.
author: Laurence Bascle
---

In our [last blog](https://www.openownership.org/news/what-graph-visualisation-teaches-us-about-beneficial-ownership/), we showcased the key benefits of our new graph visualisation tool: supporting end users in understanding the complexities of beneficial ownership networks and the wide sphere of influence of named individuals. But graph visualisation is also of benefit to another, perhaps less obvious set of users: policy-makers and implementers.

OpenOwnership's unique positioning is to be at the intersection between beneficial ownership policy and tech: this doesn't mean 'appifying' policies, seeking to give them cool creds, nor legitimising financial investigation solutions with a policy veneer. At its core, our model is built on drawing policy insights from beneficial ownership data use and requirements. The requirements surrounding a feature such as graph visualisation forces us to think beyond the obvious implementation provisions of beneficial ownership. 

A simple insight that visualisation surfaced in a very striking manner was which national data collection model worked best. A few definitions might help unpack what this statement refers to:

- 'Worked best' means which model best serves the end user needs. With user-centered design as a mantra, the definition of 'what's a good policy or a good implementation?' becomes very simple indeed: can users complete specific investigation tasks successfully and rapidly? Can they do so straight from the open data available, or is a costly transformation required to make that data truly useable?
- 'national data collection model': at a macro level, there are two models currently live in the world. Either asking companies to only provide their ultimate beneficial owners (UBOs), which must correspond to actual people, and/or asking companies to provide the next level up of legal ownership, even when that ownership is only corporate rather than individual.


The [OpenOwnership Register](https://register.openownership.org/) currently aggregates data from two countries that embody these models: Denmark and the United Kingdom.

The UK PSC regime allows companies to declare another company as an equivalent of their beneficial owner [under specific conditions](https://register.openownership.org/data_sources/uk-psc-register). While in practice the implementation of Relevant Legal Entities (RLEs) is very problematic (RLE conditions are essentially not being enforced, creating gaps in real ownership), the advantage of this approach is that companies are declaring either their Ultimate Beneficial Owners (UBO), and/or the next level of corporate ownership. This allows us to gain visibility of the full ownership network, rather than have intermediary corporate ownership locked away in a black box, which is what happens when only UBO data is provided.

<img src="/uploads/congostate%20cropped2.png" alt="Congo extractives ownership" style="float: left; margin-right: 1rem; margin-bottom: 0.5rem; max-width: 70%;" />This approach is not unique to the UK. When [EITI](https://eiti.org/) shared data collated from the extractive industries between 2015 and 2017, some countries such as the Democratic Republic of Congo provided indirect ownerships by default. This allows analysts to get a very quick sense of the shape of the entire local extractive market.


Arguably working closer to the [AMLD4 definition](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32015L0849&from=EN) of beneficial owner ('any natural person who exercises ownership or control over a legal entity), the [Denmark Central Business Register (CVR)](https://datacvr.virk.dk/data/) is clearly separating concepts of legal ownership and beneficial ownership: this means that UBO data only contains people data, not corporate data. And this is indeed very effective: the Danish legislation doesn't offer any escape route from declaring who the people behind the companies are, and ownership trees tend to be complete. However, this makes for pretty boring graphs.


<img src="/uploads/maersk%20dk.png" alt="Maersk Tanker, DK ownership" style="float: left; margin-right: 1rem; margin-bottom: 0.5rem; max-width: 70%;" />Denmark doesn’t purposely withhold intermediary corporate ownership: it simply draws a very clear separation of concerns between legal ownership 'legale ejere', and beneficial ownership, 'reelle ejere'. These concepts are separate in the data/the code, so that it is possible to only pull one without the other, just as it is possible to pull both if we so wished. The separation of concerns is undoubtedly a cleaner and more elegant approach, but the drawback is that more resources and effort are required to present the full picture. To accommodate this,  ingesting Danish ‘legal ownership’ data is currently under consideration in our roadmap.

Another check point for data collection model value is how these national models intersect in practice: indeed all complex ownership networks are multinational. The OpenOwnership Register is able to link ownership cross-border, allowing users to benefit from the most effective and transparent regime. Graph visualisation walks through ownership relationships, regardless of the provenance of the data, connecting nodes and linking entities across multiple jurisdictions.

For this to work, data has to be aggregated in a standardised, machine-readable open-data format. This emphasises the need for an international standard, which OpenOwnership has been trialling under the name of BODS, or [Beneficial Ownership Data Standard](https://www.openownership.org/guide/systems/). But that's a matter for another blog entry!


With graph visualisation, we have developed an accessible solution that opens up transparency to a wider section of civil society. Promoting and supporting data use beyond an expert corporate audience is critical to gain insights into what constitutes a good policy. For in the end, the technical assistance OpenOwnership provides to policy implementers is ultimately to ensure the policy meets its purpose: benefiting society as a whole.