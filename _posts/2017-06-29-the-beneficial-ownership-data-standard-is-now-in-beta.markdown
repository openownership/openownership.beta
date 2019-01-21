---
title: Introducing the Beneficial Ownership Data Standard
date: 2017-06-29 09:36:00 Z
image: "/uploads/introducing.jpg"
author: Tim Davies
---

## What specific fields of data should a beneficial ownership register collect and publish for re-use? How can that information be shared so that other individuals and systems can integrate, interpret, analyse and take action with it?

Those are some of the key questions that drive the development of a beneficial ownership data standard. A common data standard for exchanging beneficial ownership information is vital to both gathering in data, and sharing data on something like the OpenOwnership Register - as well as to creating an ecosystem of tools and approaches to re-use of the data.

In early April we published the first (beta) release of the [Beneficial Ownership Data Standard](http://beneficial-ownership-data-standard.readthedocs.io/en/master/) [(BODS)](http://beneficial-ownership-data-standard.readthedocs.io/en/master/), developed through a rapid-prototyping process that involved:

* Identifying [key users and use-cases](https://github.com/openownership/data-standard/issues/4) for structured beneficial ownership data;

* Exploring [existing precedents](https://github.com/openownership/data-standard/issues/3) for data standardisation;

* Looking at existing published data;

* Developing an [overall conceptual model](https://github.com/openownership/data-standard/issues/7); and

* Putting together a [draft schema and documentation](http://beneficial-ownership-data-standard.readthedocs.io/en/master/schema.html) that provides a test-ready data model for representing beneficial ownership information.

Throughout the process we were supported by inputs from the [Beneficial Ownership Data Standard Working Group](http://beneficial-ownership-data-standard.readthedocs.io/en/master/governance.html#membership-term-and-role).

In the coming months, we’re hoping to work with some test implementations of the BODS beta specification: refining the model based on real-world experience. This will provide a basis for revisions before the first production-ready release.

In this post, I outline some of the key design considerations that went into the standard, and what they mean for those early pilot implementations.

## Statements, not facts

It’s important to recognise that a beneficial ownership register will generally not contain the absolute facts of ownership. Instead, it contains statements, made by particular people, at particular points in time, about the facts of ownership.

This might sound like hair-splitting, but it’s an important part of any beneficial ownership data model -- particularly for a standard to support integration of data from multiple sources. Because ownership of companies changes over time, and data may not always keep up, it’s important to know where and when statements about ownership came from. This will help users decide on which data to trust, and which data to treat as the more authoritative.

For that reason, BODS is modelled in terms of a series of ‘statements’ - each describing either a person, a company (or other legal entity), or the ownership relationship between them.

By including meta-data about the date on which the statement is made, and including within the statements, details on the date at which an ownership relationship is said to exist, the standard provides enough information to construct a [bi-temporal](https://en.wikipedia.org/wiki/Bitemporal_Modeling) database - crucial for a number of research and compliance use cases.

The statement-centric model also recognises the immutable nature of open data. Once a statement is published as open data, copies may exist, and the statement itself should not be changed. Instead, new statements can be issued to update or replace it. This may require publishing systems that keep track of the identifiers they assigned to statements, so that it’s clear which version is being shown as most current.

## Direct and indirect ownership

A beneficial ownership disclosure regime may require the disclosure of only ‘ultimate beneficial ownership’ (UBO), or may also require disclosure of some intermediate firms in an ownership chain. In our data model we allow both direct and indirect ownership statements to be made. For example, if a publisher of data knows that Person A owns Company Z, but through some chain of unknown companies, they can publish an indirect beneficial ownership statement. However, if they know the identity and order of the intermediate ownership chain, they could also add a set of direct ownership statements to provide this additional information.

This same approach can be used to model complex ownership structures, where two or more people own shares in common, or ownership is expressed via an anonymous trust. A BODS entity statement, generally used for describing a company, can also be used to describe artificial ‘entities’ such as co-shareholdings or informal relationships.

## Supporting simple and detailed data

As [was outlined in a recent post on identification](http://openownership.org/news/identity-and-identifiers-what-weve-learned/), fields like names are far from simple. For example, in different cultures names are expressed differently, and may consist of different parts (first name, family name, patronymic name) etc. Similarly, the format for writing addresses varies from country to country.

A standard could require that names and addresses are rendered in the most broken-down form possible, with separate fields for first name, family name, patronymic name, title and suffix, as well as breaking down the address into property number, street address, town, county, district and postcode. However, if publishers do not have data in this format in their existing legacy systems, they will be unable to fill in such granular fields, or will need to apply unreliable parsing to their data to try and split it up across such fields.

This lowers the overall quality of data, as it means users cannot trust that the data they find in patronymic name field, or a street address field actually is what it claims to be. For that reason, in BODS we either:

\(a) Provide a summary-level field (such as full name) with guidance on how it should be populated, and the possibility to provide further more structured breakdown in additional ‘advanced’ objects such as the array of alternateNames.

or

\(b) Provide only a summary-level field, but give guidance to users on how to parse the data. In particular, for address we only provide a breakdown into address, postcode and country - pointing users instead towards libraries for parsing address data.

## A flexible identifier approach

Matching a statement about a company or a person to that company or person in the real world is central to the use of beneficial ownership data, allowing you to confirm that you are looking at a statement about a company you’re investigating or doing due diligence on. There are two broad approaches to do this:

\(1) Matching official identifiers - for example, matching two statements that refer to the same company on the basis that they use the same officially issued company registration number;

\(2) Matching features - for example, matching to statements that refer to the same person on the basis that they refer to someone with a similar name, with the same birth year, and city of residence.

Whilst, in general, company numbers are public information, the extent to which identifier numbers for individuals are public information or not varies between country and culture, and different disclosure systems may collect different identifiers for the same individual.

For this reason, BODS has to support a range of approaches to identification, and includes space for disambiguating information where it exists. It also asks publishers of data to [always declare the ‘scheme’ from which they draw any identifiers](http://beneficial-ownership-data-standard.readthedocs.io/en/latest/schema.html#identifier).

## Linking out to sources

Many use cases of beneficial ownership data rely on not only having access to the statements made about who owns what, but also on being able to trace that back to the source material, and checking whether or not that information is verified and trusted in some way.

The beta of BODS does not get into questions of data verification, but it does include a clear space in each statement to cite and link out to the source, providing an important provenance trail. How this source material should be hosted and made accessible is a question to be addressed in future phases of development.

## Next steps

Over the coming months, we hope that members of the Beneficial Ownership Data Standard Working Group will be able to work on pilot implementations, allowing us to understand: (a) the strengths and weaknesses of the model for representing existing data; and (b) the utility of data produced from these pilots.

You can continue to engage via the project GitHub repository - and do get in touch if you are interested in being part of a pilot.