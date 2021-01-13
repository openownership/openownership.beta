---
title: 'Connecting the dots between beneficial ownership and procurement data: improving
  processes and identifying risk'
date: 2021-01-13 10:25:00 Z
published: false
categories:
- blogs
tags:
- procurement
- beneficial ownership
image: "/uploads/image-571901.jpeg"
author: Jack Lord
is_featured: true
---

_Dr Jack Lord is a Member and Director at Open Data Services Cooperative and a leading expert on integrating the data and policy aspects of open data. He is the current lead author of the Beneficial Ownership Standard and, with Open Ownership, has continued to develop policy recommendations to advance beneficial ownership transparency. Jack is the author of a chapter on [corporate transparency](https://stateofopendata.od4d.net/chapters/sectors/corporate-ownership.html) in the recent book, The State of Open Data._

_ \
This is the first in a series of blog posts exploring how beneficial ownership and procurement transparency can support each other. We explore:_



1. _How the different requirements of procurement and beneficial ownership transparency result in very different systems and data structures_
2. _How contracting processes can be strengthened by incorporating beneficial ownership data in the near future._

How do we know who is behind the companies our governments work with?

We can start by joining up two streams of transparency reform: procurement and beneficial ownership. There is a growing momentum to use company ownership data to strengthen procurement processes, and this work has been made more urgent by the speed and scale of the public response to the COVID-19 crisis. The [IMF’s pandemic relief program](https://www.imf.org/en/About/Factsheets/Sheets/2020/04/30/how-imf-covid19-financial-help-is-used), for example, has seen many countries, including Nigeria, South Africa and Afghanistan, commit to publishing the beneficial owners of firms that win public contracts.

Open Data Services Co-op supports two data standards that make the technical aspect of this work possible. The [Open Contracting Data Standard](https://standard.open-contracting.org/latest/en/) (OCDS) provides a structured way of representing procurement processes, while the [Beneficial Ownership Data Standard](http://standard.openownership.org/en/0.2.0/) (BODS) provides a structured way of representing ownership and control of companies and other legal entities. Combining data standards allows us to tackle issues that go beyond the original aims of the individual standards.

We’re always interested in the potential for the standards we build to work together. Separately, data standards allow organisations to analyse data more quickly, using reproducible methods and a common set of tools. Combining data standards allows us to tackle issues that go beyond the original aims of the individual standards.

This is the first in a series of blog posts exploring how beneficial ownership and procurement transparency can support each other. This blog examines 



1. How the different requirements of procurement and beneficial ownership transparency result in very different systems and data structures
2. How contracting processes can be strengthened by incorporating beneficial ownership data in the near future.


## Describing contracts and ownership as data 

Beneficial ownership and procurement transparency overlap in many ways but these complex policy areas are governed by distinct sets of laws and regulations. As a result, _data_ about beneficial ownership and procurement is normally stored on separate systems built by different institutions with very different priorities. Both types of systems need to describe people, organisations and the relationships between them, but have a different set of assumptions about capturing, updating and structuring that data. This, in turn, is reflected in the data standards for beneficial ownership (BODS) and for procurement transparency (OCDS).


### Procurement systems and data

Procurement systems focus on _contracts_. Data about people, companies and relationships is bound to this context. In general, we know _if_ companies and people exist only when they are recorded as part of a contracting process. We know particular details _about_ those companies and people only for the duration of a contracting process (and perhaps only at key moments in that process, like the signing of a contract). In OCDS, modelling the [contracting process](https://standard.open-contracting.org/latest/en/getting_started/contracting_process/) also requires identifying and describing people and organisations - but their existence _outside_ the contracting process is of secondary importance.


### Beneficial ownership systems and data

Beneficial ownership systems prioritise _companies, people and the relationships between them_.  Implemented well, beneficial ownership systems should provide an auditable ledger of a company's ownership, in which changes are recorded as they happen and the information periodically confirmed as accurate. By combining individual company declarations, and identifying people and companies, a broader ownership _network_ will emerge and evolve over time. In BODS, organisations, people and relationships are modelled to allow this ownership network to emerge and in such a way that individual ‘statements’ can be pieced together to create a full audit trail of what was known about company ownership.  


# Improving contracting processes using beneficial ownership data

These differing assumptions mean that we can think of ‘using beneficial ownership data in procurement’ in two complementary ways. 

This blog concentrates on the simpler case of modifying existing procurement systems and processes to collect beneficial ownership for all parties during the relevant procurement stages. On its own, this has huge advantages for compliance, internal controls and fraud detection by identifying networks between people and companies involved in procurement. In a future blog, we will talk about how applying the ideas of an auditable ledger and evolving ownership network could strengthen procurement on a systemic level.


## Making compliance and external risk assessment faster and more effective


###  \
Sanctions and debarred persons

Many countries or institutions prohibit dealing with certain firms or individuals on the grounds of [corruption](https://www.worldbank.org/en/projects-operations/procurement/debarred-firms), involvement in terrorism or other offences. Beneficial ownership data allows easier detection of debarred persons or individuals on sanctions lists_ _in procurement processes. Without beneficial ownership disclosure, it would be too easy for a debarred firm to reincorporate and for a sanctioned individual to disguise ownership via an intermediary.


### Risk-based assessment of beneficial owners

Procurement authorities may also need to conduct enhanced due diligence of certain individuals involved in a procurement process. For example, politically-exposed persons (PEPs) might need to declare their status or be detected by cross-checking against external lists. A PEP failing to declare their status in either the procurement process or a company register_ _could be seen as a red flag requiring further investigation.


###  \
Risk-based assessment of corporate structures

The risks associated with corporate structures can also be assessed and reduced_ _by requiring disclosure of the chain through which a beneficial owner exercises control. This might mean applying higher standards of due diligence where an owner exercises control through entities incorporated in secrecy jurisdictions or where risk factors like nominee arrangements are visible.


## Detecting undeclared conflicts of interest

Procuring entities need to ensure that procurement decisions are taken for the right reason -- and not because the winning bidder knew the right person. Public interest in PPE procurement during the Covid-19 pandemic shows that [such links](https://www.theguardian.com/society/2020/may/01/revealed-nhs-procurement-official-privately-selling-ppe) can be found at times of heightened scrutiny -- but to reliably detect potential conflicts of interest beneficial ownership information needs to be used systematically. 


### Detecting political influence

In many countries elected officials or senior appointees have a responsibility to [declare their assets and interests ](https://medium.com/opendatacoop/opening-up-political-influence-announcing-declared-a1b5530f4ee1)as a way of maintaining the integrity of public office. Where such officials can influence procurement decisions, these declarations can be checked for potential conflicts of interest. Requiring beneficial ownership to be declared makes it harder to disguise ownership interests behind complex structures.


### Effective internal controls

Integrating beneficial ownership information with procurement processes should also allow procurement authorities and audit institutions to detect undeclared conflicts of interest between those with procurement responsibility and parties involved in the tendering process. These can lead to the misuse of public resources through mispriced or inappropriately awarded contracts – for example a contract awarded to a firm beneficially owned by a procurement official.


## Identifying common ownership to signal collusion or deception. 

Procurement processes rely in part on fair competition to deliver legitimacy and value for money. Beneficial ownership data can help [identify common ownership among bidders](https://medium.com/neo4j/graph-databases-for-journalists-5ac116fe0f54) that could signal collusion or deception and allow procurement authorities to accurately gauge the number of genuine bids received for a contract.


## Accurately describing risk 

All of the benefits described above have the effect of reducing uncertainty about _who_ procuring agencies are doing business with and, in turn, making it easier to assess the risk of entering into a contract with a particular company. The reduction of uncertainty and the accurate presentation of risk should allow procurement processes to shift onto more important assessments of quality, value-for-money and social value and to take the right kinds of risk in procurement decisions. 


## In short, what does this all mean?

Judicious use of beneficial ownership information should make procurement systems more secure, with a lower risk of internal fraud and collusion. Procurement processes should also be made much harder to access and exploit for those deemed a risk to the system, and sanctions and debarring regimes more effective and enforceable. And removing the uncertainty about who people are should also make procurement fairer, more efficient and more able to take the right kinds of risk.

**In Part Two of this series we will talk about how some of the concepts from beneficial ownership systems of recording information about people and organisations as a network that evolves over time could be used to strengthen procurement on a systemic level and how the needs of procurement systems might inform broader beneficial ownership disclosure regimes and system design.**

*[This blog was originally posted here](https://medium.com/opendatacoop/connecting-the-dots-between-beneficial-ownership-and-procurement-data-improving-processes-and-2fd0df9d9653)*