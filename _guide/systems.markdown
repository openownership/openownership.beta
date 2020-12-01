---
title: Systems
date: 2019-02-16 00:04:00 Z
position: 3
description: Beneficial ownership transparency involves the collection, storage and
  publication of data. This section offers guidance on how to develop systems and
  software that collect, store and publish structured beneficial ownership information
  that is useful and effective at driving policy impact.
tip-text: Put in place systems that can store and publish structured data so that
  it can be easily used and understood. Using the Beneficial Ownership Data Standard
  is the easiest way to achieve this.
questions:
- title: What kind of systems are needed?
  text: |-
    The diagram below shows a typical flow of information, and the key components of a system to collect, store and publish beneficial ownership information. Establishing effective systems does require investment, but creates sustained economic and social benefits.

    ![data-process.png](/uploads/data-process.png)

    The specification of software and hardware systems required to implement beneficial ownership transparency will depend on the requirements in your legal framework, any relevant existing registers and how you want people to access and use the data. This diagram shows the typical components of a beneficial ownership transparency system.

    All systems need to have some basic [functional requirements](http://standard.openownership.org/en/latest/schema/guidance/functional-requirements.html) to enable them to publish structured beneficial ownership data that complies with the [Beneficial Ownership Data Standard](http://standard.openownership.org/).
- title: Six tools & tips for implementing software and systems for beneficial ownership
    transparency
  text: |-
    The following tips will help your technical team and/or contractors to design, build and test systems and software to implement beneficial ownership transparency. For each tip, we provide practical tools that OpenOwnership has developed and tested with countries participating in our Pilot Program. Whilst systems design and development may be led by the technical team responsible for building the beneficial ownership register, OpenOwnership recommends that it is done with close participation of policy staff and other stakeholders involved in implementing beneficial ownership transparency.

    1. Review existing systems and identify what is needed for beneficial ownership transparency. The diagram above illustrates the components of a typical beneficial ownership transparency system, and how they are connected.  You can use this to identify how your current systems relate to beneficial ownership, and what new or amended systems are required.

    2. Map current systems to the [functional requirements](http://standard.openownership.org/en/latest/schema/guidance/functional-requirements.html) for BODS. This will help you think through what changes are required to design a system for capturing beneficial ownership data.

    3. Map any current data to the [BODS schema](http://standard.openownership.org/en/latest/schema/index.html). If you currently collect some beneficial ownership data (which may or may not be public), map this to the fields in the BODS schema using our [Field Mapper](https://docs.google.com/spreadsheets/d/1Ps7CpO-bOQO3c0ytTqvnp8B2u2oxbk7-DchOgqpP_kQ/copy) (when opening this link, click ‘make a copy’ to open the file). The [Field Mapper](https://docs.google.com/spreadsheets/d/1Ps7CpO-bOQO3c0ytTqvnp8B2u2oxbk7-DchOgqpP_kQ/copy) flags where your data is different from the BODS schema, highlights fields that you are not currently collecting, and fields where additional measures such as in-line validation could be used to make the data more structured.

    4. Design your system to export BODS data. You can view [example data](http://standard.openownership.org/en/latest/examples/index.html) in JSON format to understand what is required: At this stage, draw up a clear technical specification for your systems before commencing your technical build or amending existing systems. Use the [example data](http://standard.openownership.org/en/latest/examples/index.html) to help you think through what beneficial ownership data might look like for different company types and what system specifications you will need in order to collect this information.

    5. Use the results from previous steps to create specifications for developing new or amended systems, and commission the necessary work.

    6. Test & validate your data. When your system is in place, you can test the data it outputs against the BODS schema using our [Data Review Tool](https://datareview.openownership.org/).
- title: What is the Beneficial Ownership Data Standard and how does it help?
  text: |-
    The [Beneficial Ownership Data Standard](http://standard.openownership.org/) (BODS) is a template for publishing structured data about beneficial ownership in a format (JSON) that can be read and understood by computer systems around the world. It makes it easier for users of beneficial ownership information, from government departments to civil society and businesses, to utilise the information published in your register and link it with other datasets. This is essential to drive policy impact.

    The Beneficial Ownership Data Standard is an open source (free for anyone to use) product that OpenOwnership is developing in partnership with Open Data Services Cooperative. If you are new to BODS, you can read Open Data Services’ [primer](http://standard.openownership.org/en/latest/primer/index.html) that introduces BODS. If you are a developer or data analyst, you can jump straight to the BODS [data schema](http://standard.openownership.org/en/latest/schema/index.html).

    All information relating to the Beneficial Ownership Data Standard is available at a dedicated website: standard.openownership.org. If you can’t find what you need, you can ask our technical team by contacting our [Helpdesk](mailto:support@openownership.org).
- title: Can my country add beneficial ownership to our existing company register?
  text: "Most countries have central registers of companies that include, for example,
    information about the directors/founders, registered address etc. If a country
    is looking to establish a new beneficial ownership register, they may therefore
    consider ‘adding’ beneficial ownership into this existing company register. Our
    technical team at Open Data Services have put together this [primer](http://standard.openownership.org/en/latest/primer/index.html)
    explaining what beneficial ownership is and how it differs from legal ownership
    (which is normally recorded in company registers).\n\nTo understand the technical
    considerations of adding beneficial ownership to an existing company register,
    OpenOwnership recommends that existing systems (both digital and paper) that are
    involved in collecting, storing and publishing company information should be mapped.
    There may be technical differences in the system requirements for a company register
    and a beneficial ownership register that require architectural changes. For example,
    a company register database may use a company-centric model (i.e. each record
    is a different company), whereas a beneficial ownership database should be capable
    of recording “statements” about how a person is related to a company (i.e. each
    record is a different statement about a person owning a particular company). \n"
- title: What are other beneficial ownership registers like?
  text: We are compiling case studies of how open beneficial ownership registers operate
    around the world, and they will be added to the guide soon.
- title: What is good practice for evaluating and improving systems?
  text: Beneficial ownership transparency is a relatively new policy area, and the
    initial systems developed will require ongoing maintenance, and are likely to
    require more substantive periodic improvements. Such improvements may be required
    from a purely technical perspective, or may become necessary as a result of changes
    to the legal framework for beneficial ownership transparency, or changing needs
    of stakeholders. OpenOwnership recommends that an agile, user-centered approach
    is taken to identify where improvements can be made on an ongoing basis. This
    approach should include end-users of beneficial ownership data, as well as staff
    and companies who use the systems.
resource-text:
- 'Website: [BODS information & documentation](http://standard.openownership.org/)'
- "[Primer](http://standard.openownership.org/en/latest/primer/index.html) outlining
  what beneficial ownership transparency is"
- 'BODS Tools: [BODS data schema](http://standard.openownership.org/en/latest/schema/index.html)'
- 'BODS Tools: [Field Mapper ](https://docs.google.com/spreadsheets/d/1Ps7CpO-bOQO3c0ytTqvnp8B2u2oxbk7-DchOgqpP_kQ/copy)'
- 'BODS Tools: [Functional Requirements for systems](http://standard.openownership.org/en/latest/schema/guidance/functional-requirements.html)'
- 'BODS Tools: [Example BODS data](http://standard.openownership.org/en/latest/examples/index.html)'
- 'BODS Tools: [Data Review Tool](https://datareview.openownership.org/)'
- 'Principles: [12 Principles for Effective Beneficial Ownership Disclosure](/principles/)'
layout: guide-page
---
