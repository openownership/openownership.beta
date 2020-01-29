---
title: 'Identity & identifiers: what we’ve learned'
date: 2017-04-11 13:04:00 Z
tags:
- the beneficial ownership data standard
author: Jack Lord
permalink: news/identity-and-identifiers-what-weve-learned/
categories:
  - blogs
---

Beneficial ownership is a complex domain to model, as we’ve seen from the [work we’ve already done on the OpenOwnership data standard](https://github.com/openownership/data-standard). At the most fundamental level, the beneficial ownership standard needs to be able to identify legal entities and help users to identify natural persons.

Identifying natural persons is tricky because unique identifiers, such as a social security number, may not be suitable for public consumption or may not be available for all beneficial owners. The fuzzier identifiers of name, address, date of birth and so on, are either liable to change or to have been recorded differently in different contexts.

Uniquely identifying legal entities is easier because of the obligations on companies to register and report on their activities, but decisions still need to be made about how to link identity to jurisdiction, how to deal with trading names, and so on.

In both cases, these concepts are made more difficult to model because we are dealing with multiple jurisdictions, where legal entities may take various forms and our Western means of identifying individuals -- for instance, by first and last name -- may not hold.

The identification of natural persons and legal entities is one challenge among several that the OpenOwnership Standard will face. Luckily, there is much to learn from existing standards in related, and unrelated, fields. As part of the development of the OpenOwnership Data Standard, I conducted a [review](https://github.com/openownership/data-standard/issues/3) of what these existing standards can tell us. Here, I summarize some of my main findings relating to the identification of natural persons and legal entities.

**Identifying natural persons**

In a tightly-focused domain, a viable solution is simply to assign a unique identifier to an individual. This is the approach taken with opt-in data standards like [ISO 27729 International Standard Name Identifier](http://www.isni.org/), for linking creative works to their authors, and [ORCID](http://support.orcid.org/knowledgebase/articles/116780-structure-of-the-orcid-identifier), an implementation of ISO 27729 for academic researchers.

National identity numbers, like a social security number, work in a similar way. But a third-party -- such as, for instance, a user of the [Global Beneficial Ownership Register](http://openownership.org) -- who wants to identify an individual from a national ID number also needs the context of the identifying scheme (i.e. which authority issued the identifier, and which set of identifiers it is. A tax office, for example, may issue multiple types of identifier). In order to resolve this ambiguity,the [Popolo Person Spec](http://www.popoloproject.com/specs/person.html) and the [EU ISA Core Person Vocabulary](https://joinup.ec.europa.eu/asset/core_person/asset_release/core-person-vocabulary#download-links) data standards store a unique identifier for each person that also contains a reference pointing to the identifying scheme the identifier belongs to.

One of the most important use-cases for the Beneficial Ownership Data Standard is unravelling complex chains of corporate ownership across multiple jurisdictions. To do so, users of the data standard will want to identify natural persons across jurisdictions, and this means fuzzy identifiers (names, addresses, citizenships, date of birth) will be used instead of unique identifiers to match individuals. With names, the challenge is to balance structuring the data, while staying universal enough that all names can in fact be represented. The Popolo and EU ISA Core standards take the approach of having a single field to represent a person’s name; EU ISA Core also allows the components of a name to be broken down into separate fields.

Another related data modelling issue is matching pseudonyms and previous names to the right person. Here, data standards relating to sanctions, like the [US Specially Designated Nationals List](https://www.treasury.gov/resource-center/sanctions/SDN-List/Documents/sdn_advanced_notes.pdf), are an interesting comparator because they are designed to accommodate the uncertainty about how names are spelt, the aliases being used, and so on.

One thing to bear in mind is that the more uncertainty is built into the data model, the more false positive identifications will be made. In the context of sanctions, where the punishment for breaking the law is high, that might be the desired behaviour. In the context of beneficial ownership, false positive identifications might be desirable, or they might push up the cost of investigating the data in a way that benefits bad actors.

**Identifying legal entities**

In comparison to natural persons, uniquely identifying legal entities (like a limited company) is relatively straightforward. In a similar way to using a social security number to identify a person, a company number and a reference to a company register in which that number is unique can be used to identify a corporate entity. This model is used by the [EU ISA Core Business Vocabulary](https://joinup.ec.europa.eu/asset/core_business/asset_release/all), among others.

Another approach, rather than simply record existing identifiers, is for a data standard to establish a method by which issuing authorities assign unique identifiers to legal entities. This involves defining the format of the identifier itself and the means by which identifiers are issued. The Global Legal Identifier, for example, uses a 20-digit alphanumeric code, compatible with [ISO 17442](https://en.wikipedia.org/wiki/Legal_Entity_Identifier); these are issued to legal entities involved in financial markets by the [Global Legal Entity Identifier Foundation](https://www.gleif.org).

**Next steps**

With the help of the Data Standard Working Group, [we have released the first draft version of the standard](http://beneficial-ownership-data-standard.readthedocs.io/en/latest/schema.html). Discussions on modelling issues related to identification, including the potential for obfuscation, continue on the Github [issue tracker](https://github.com/openownership/data-standard/issues)– contributions are welcome.
