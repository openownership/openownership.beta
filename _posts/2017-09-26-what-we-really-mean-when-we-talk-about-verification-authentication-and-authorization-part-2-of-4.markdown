---
title: 'What we really mean when we talk about verification: Authentication & authorization
  (Part 2 of 4)'
date: 2017-09-26 15:10:00 Z
permalink: news/what-we-really-mean-when-we-talk-about-verification-authentication-and-authorization-part-2-of-4/
categories:
- blogs
tags:
- verification
author: Zosia Sztykowski and Chris Taggart
---

[In the first post in this series](https://openownership.org/news/what-we-really-mean-when-we-talk-about-verification-part-1-of-4/) on the principles of verification, particularly relating to beneficial ownership, we explained why there is no guarantee that any piece of beneficial ownership data is the absolute truth.

The data collected is still valuable, however, providing it is made available publicly as open data, as it exposes lies and half-truths to public scrutiny, raising red flags that indicate potential criminal or unethical activity.

We discussed a three-step process of verification:

1. Ensuring that the person making a statement about beneficial ownership is who they say they are (authentication), and that they have the right to make the claim (authorization);

2. Ensuring that the data submitted is a legitimate possible value (validation);

3. Verifying that the statement made is actually true (which we will call truth verification).

In this blog post, we will discuss the first of these, focusing on how to tell who is actually making the claims, and whether they are authorized to do so.

When authentication and authorization have been done, you can approach the information with more confidence. Without them, you may have little better than anonymous statements. **Critically, with them, you can also increase the risks for those who wish to hide their true identities and the nature of their control of companies.**

For example, take a classic money-laundering case: perhaps those uncovered by the [OCCRP’s investigation into the theft of $1bn from the tiny country of Moldova](https://www.occrp.org/en/investigations/4203-grand-theft-moldova), or by Global Witness’s [investigation into Kyrgyzstan’s ](https://www.globalwitness.org/sites/default/files/gravesecrecy.pdf)AsiaUniversalBank. Here, many of the individuals associated with the company are mere figureheads, typically no more than lawyers or agents.

However, when these figureheads are put forward as the true beneficial owners of a company by someone who is authenticated and authorized to report this information, *and* when these assertions are open to public scrutiny, the risks for these individuals and the companies mount significantly. This is why criminals, corrupt politicians, and the states and companies that profit from them are so against public, open beneficial ownership registers.

First, users can, as in the OCCRP investigation, see that the beneficial owner’s address is in a run down area -- unlikely for someone controlling companies with vast amounts of turnover -- or, as in the Global Witness investigation, see that they are the figurehead for multiple unrelated businesses.

Once they are caught, if proper authentication and authorization have been done, it is far more difficult for these individuals and companies to wriggle out of the lie. There is no opportunity to claim these common excuses:

* It wasn’t me -- it was someone claiming to be me, or someone with a similar name

* The person wasn’t authorised to make that claim/doesn’t work for us/didn’t know what they were talking about

* Identification is impossible or ambiguous at best. For example, take the case of [Jürgen Mossack](https://en.wikipedia.org/wiki/J%C3%BCrgen_Mossack), co-founder of Mossack Fonseca, the Panamanian-headquartered law firm whose data was the source for the Panama Papers. Searching OpenCorporates records of officers of Panamanian companies for “Mossack” [brings a wealth of names that are close but not quite the same as Jürgen Mossack](https://opencorporates.com/officers/pa?page=2&q=Mossack) (to give just a few examples: JUREEGN, JUGEN, JUREN). Is this the same person, and, crucially, what name was recorded on the individual’s official identity documents?

So how can data publishers do authentication and authorization in a way that makes lying riskier?

We know that existing paper-based systems are flawed in various ways. [The World Bank’s groundbreaking Puppetmasters report](https://star.worldbank.org/star/sites/star/files/puppetmastersv1.pdf) provides a vivid picture of one of these, as conducted by company service providers (CSPs). People opening companies are asked to provide identification and to visit the CSP in person in order to confirm their identity (authentication). It is not known whether all, or indeed any, of the CSP’s confirm that the person is actually authorized to provide an accurate picture of the company’s beneficial ownership (and if so, how they confirm that).

The report also shows that this system has an even more fundamental problem: only 60% of the CSPs approached by World Bank researchers actually conducted such authentication processes. The remaining 40% only required that an online form be completed -- and some in fact advertised this as an advantage of their service.

Even if 100% of CSPs authenticated and authorized beneficial ownership data by confirming the identity of people opening companies in person, they are only addressing the case at time of registration. A common ruse for obfuscating the true nature of a company is to incorporate with one set of owners, and then to transfer the control to another.

A sister industry is the sale of “shelf” companies –- that is, companies that were incorporated some time ago but have had little or no trading activity. The appeal of these companies to buyers is that [they look like much older, more respectable companies than they are](https://www.healyconsultants.com/purchase-companies/vintage-shelf-companies/).

As this discussion shows, the traditional, on-incorporation-only, paper-based systems are no way to authenticate and authorize who controls and benefits from companies. One way to do this well in the future might rely on new technologies such as blockchain to form the basis of [immutable digital identities](https://qz.com/809143/blockchain-tech-refugee-identity/). [A great deal of experimentation](https://medium.com/@LetsTalkPayments/21-companies-leveraging-blockchain-for-identity-management-and-authentication-d09d88e3a4bf) is already taking place in this area, but it is at an early stage, and there will likely be as-yet-unknown downsides.

One thing is certain: only by tackling these problems in the open, and making open, public data a foundational feature of beneficial ownership regimes will we make progress, identifying problems, falsehoods and anomalies and closing loopholes along the way. As part of the continued development of the OpenOwnership Register, we are exploring and testing many different options around authenticating and authorizing user-submitted data and will be reporting on our progress in this important area.

Soon, we explore digital solutions to another important data quality issue: validation. Stay tuned!
