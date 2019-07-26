---
title: What graph visualisation teaches us about beneficial ownership
date: 2019-07-26 10:08:00 Z
published: false
tags:
- graph visualisation
- data
- the beneficial ownership data standard
- openownership register
- data jam
image: "/uploads/IMGP1652-small%20copy.jpg"
description: We’re excited to be launching a new version of our graph visualisation
  functionality to the OpenOwnership Register.  We hope this will act as a powerful
  resource for journalists, policy makers and civil society by allowing them to more
  easily interpret the data to expose corruption, undertake due diligence and support
  policy impact.
author: Laurence Bascle
---

We’re excited to be launching a new version of our graph visualisation functionality to the [OpenOwnership Register](https://register.openownership.org/).  We hope this will act as a powerful resource for journalists, policy makers and civil society by allowing them to more easily interpret the data to expose corruption, undertake due diligence and support policy impact.

When the OpenOwnership Register launched in 2017 with the UK’s PSC register data, our priorities were twofold: make the Register a one-stop shop for beneficial ownership investigations and gain insights into the best model for an international data standard.

In order to support data use, we quickly released the ability to search not just by company name or number, but also by beneficial owner name - a feature still missing on the official [Companies House website](https://beta.companieshouse.gov.uk/search/). We later developed a very basic family tree graph featuring UBOs (Ultimate Beneficial Owners) at the top. Two years on, with the addition of beneficial ownership data from Denmark, Slovakia, Ukraine and [EITI](https://eiti.org/beneficial-ownership), and having amassed significant research on investigation and due diligence best practice, it was time to take graph visualisation to the next level.

**How graph visualisation became a feature in our evidence-based roadmap**

<img src="/uploads/image3.jpg"
     alt="OpenOwnership DataJam"
     style="float: left; margin-right: 90px" />

The first step on this journey was to verify some of our assumptions with users themselves. We convened a [discovery session or ‘Data Jam’](https://twitter.com/sheislaurence/status/1123940093679538177) with beneficial ownership data users, in order to understand how they used visualisation in their work (be it journalistic investigation, Know Your Customer (KYC) or due diligence), and the tools that some of the more tech-savvy users were already using. Graph tools such as [Linkurious](https://linkurio.us/) and [Neo4J Bloom](https://neo4j.com/bloom/) turned out to be reasonably popular amongst data journalists and campaigners, who had become increasingly dependent on the analytical power of graph visualisation to investigate very complex networks of ownership. Unsurprisingly, there were custom solutions being developed by KYC and due diligence providers, but sometimes by end users as well (using [D3](https://www.d3-graph-gallery.com/network) for example). However, it quickly became clear that the expense and steep learning curve required to customise and use these tools excluded a number of users. Many key stakeholders interacting with governments and decision-makers didn’t use visualisation at all. We wanted to open up this functionality as visualisation can act as a powerful storytelling tool to showcase the importance of disclosure and open data.

With those insights gained, we were ready to ship a minimum viable product through our 3-week sprint cycle. We chose to use [Cytoscape JS](http://js.cytoscape.org/) due to its broad set of features and ecosystem of plugins. We committed to the following features, previously unavailable on the Register:

* Ensuring that a graph was available not just from a company search result, but also a person search result

* When searching by company, the possibility to walk ‘up’ the ownership tree via all intermediary corporate ownerships (when available), and also to walk ‘down’ to show all the companies owned by the target company

* Greying out ceased relationships, to differentiate them from current ones

Adding to this, we were also able to significantly improve on our previous graph version thanks to features we had already shipped:

* Deduping of person records: this was particularly valuable for the UK PSC data, which is missing unique identifiers, meaning the same person was previously appearing as different people in the same graph.

* Updating company records: this was to ensure that we knew whether a company had changed names or been dissolved: they would now appear as greyed out entities when dissolved.

** How graph visualisation is a game-changing analytical tool** 

In order to demonstrate how powerful decent visualisation can be, let’s take a couple of examples from the [Right Honourable Lord Ashcroft](https://en.wikipedia.org/wiki/Michael_Ashcroft).

Looking at one small portion of his empire, we will zoom in on ‘Marlowe 2016 Limited’. The previous visualisation showed the ultimate beneficial owner (UBO) of ‘Marlowe 2016’ as being Ashcroft himself and it showed the company in-between, referred to as RLE (Relevant Legal Entity), here ‘Marlowe PLC’ b. But nothing else. If the purpose was purely to identify the UBO, it worked.

With the new graph, which now displays the companies owned by ‘Marlowe 2016’ by default, a couple of things quickly become obvious: the significance of ‘Marlowe 2016’, the complexity of the ownership network (which could be questioned in itself), and the sphere of influence of Michael Ashcroft as a beneficial owner.

With the ability to view a person’s network, previously unavailable on the Register, it is now possible to understand how far reaching a single person’s control can be. This also allows analysts to navigate ownership from a single lead (you can click through each name/entity and navigate to the relevant list or graph).

So now we have a more powerful way of visualising beneficial ownership data, but what does this mean in terms of policy impact? Read our next blog to find out…...