---
title: 'What we really mean when we talk about verification: Validation (part 3 of
  4)'
date: 2018-03-01 07:09:00 Z
tags:
- verification
Feature Image: "/uploads/computer-technology-texture-number-wall-web-593221-pxhere.com.jpg"
Author: Zosia Sztykowski and Chris Taggart
---

Welcome to the third instalment of our four-part blog post series on verification. To recap, in our [first post](https://openownership.org/news/what-we-really-mean-when-we-talk-about-verification-part-1-of-4/), we broke down the term “verification” into three distinct steps:

1. Ensuring that the person making a statement about beneficial ownership is who they say they are, and that they have the right to make the claim (authentication and authorization);

2. Ensuring that the data submitted is a legitimate possible value (validation);

3. Verifying that the statement made is actually true (which we will call truth verification).

In our [last post](https://openownership.org/news/what-we-really-mean-when-we-talk-about-verification-authentication-and-authorization-part-2-of-4/), we discussed authentication and authorization. In this post, we will discuss the process of validation and why it’s important for generating high-quality beneficial ownership data.

Validation ensures that data being reported on forms consists of a legitimate possible values – AAA12 344 is not a valid UK postal code, for example, nor is 1990-12-40 a valid date. Such validation is much more effective, more reliable and less burdensome for all when users enter their data on on electronic forms that simply do not allow data to be entered unless it follows clear validation rules. 

The results of [a dive into the UK’s beneficial ownership data](https://www.globalwitness.org/en/blog/what-does-uk-beneficial-ownership-data-show-us/) by [Global Witness](https://www.globalwitness.org/en/), [DataKind](http://www.datakind.org/), and [OpenCorporates](https://opencorporates.com/) highlight a number of areas where validation could significantly improve data quality. People with British nationality indicated this in over 500 different ways (see the word cloud below to get an idea of the variations). There were also over 2,000 beneficial owners who reported being born in 2016, which is stretching the definition of ‘young entrepreneur’! 

![wordcloud.png](/uploads/wordcloud.png)

The more room a system leaves for ambiguities, the more it creates loopholes that allow individuals to hide their identities and escape detection. The risk is heightened when you factor in the global nature of money laundering, and the challenge of collecting beneficial ownership data that is meaningful across jurisdictions. Date of birth is currently the best tool for disambiguating between individuals with similar names who are operating cross-jurisdictionally, as national ID numbers are only meaningful in the jurisdiction of origin. This is why validating the date of birth is so critical. 

These issues could be solved easily by forcing data submitters to choose from an enumerated list of allowed values (for example a drop-down menu of nationalities), and by ensuring that the year of birth entered is in the past, and that possible entries are limited according to the minimum legal age for a company owner (16 in the UK). 

This isn’t difficult to do. The OpenOwnership [Register](https://register.openownership.org/) has had date and nationality validation built in since the very beginning. Should a user attempt to enter an unlikely date of birth, they receive an error that does not allow them to proceed until it’s corrected. Our partners at Global Witness tell us that Companies House has recently made similar changes.

A related issue is that of addresses. To a money laundering investigator in civil society or law enforcement, an address is a critical piece of information that can show a connection between companies that otherwise seem unrelated. [Transparency International UK’s analysis of Scottish Limited Partnerships](http://www.transparency.org.uk/publications/offshore-in-the-uk/#.Woa_QYLLf-Y), a type of corporate entity initially exempt from the obligation to report beneficial ownership, found that a majority of SLPs were registered to just 10 addresses. Although sharing an address doesn’t necessarily indicate any linkage (some addresses of corporate service providers in Delaware have tens of thousands of entities registered at them), it can surface patterns, which together with other data points can provide valuable leads for investigators,

Validating an address is more difficult than, say, a date of birth, but it can be done in most countries (as ecommerce sites do every day). It is also possible (though rare) to validate that the addresses actually exist, [as the New Zealand company register does](https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/6127531/addresses). Similarly, enforcing some validation on company names and company numbers can make it more difficult to hide corporate networks. 

Of course, validation doesn’t make it impossible for people to report incorrect information. But it has a major impact on data quality by limiting the possibility of mistakes. And it does at least make it impossible for individuals to conceal their identities by entering values that are unlikely. That reduces the “noise” of unintentional bad data, making the intentional errors easier to spot. 

It is not clear that company service providers offer any meaningful validation when they collect data on those who set up and benefit from companies, including the beneficial owners. In countries that are establishing central registers of beneficial ownership, the primary difficulty is the medium through which data is submitted. Company registrars in countries with low levels of internet connectivity typically receive data on a paper form that is then entered into an electronic system. 

Even assuming there’s some validation at the point of data entry, this system is prone to generate errors because data submitters are not entering data themselves. Data quality would be significantly improved if company registrars took steps to facilitate the usage of electronic tools by data submitters. 

Both validation and authentication/authorization may make it more difficult for corrupt individuals to lie, and generally improve data quality, but they do not make it impossible. In our next and final post, we return to the crux of the issue of verification: is there a way to tell whether beneficial ownership data that has been reported is true? 

We hope you’ll check back here in a couple of weeks for the last instalment.