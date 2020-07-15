---
title: Modelling beneficial ownership data
date: 2020-07-15 09:52:00 Z
---

*Part One in a series of technical posts, collecting our experience from three years of the Global Beneficial Ownership Register.*

**Welcome to the first in a series of technical posts about working with beneficial ownership data. Over the past three years, OpenOwnership has been building a prototype Global Beneficial Ownership Register, in order to prove the feasibility and value of linking beneficial ownership (BO) data across jurisdictions. We have used this project to experiment with a variety of tools and processes, from standardising data under the Beneficial Ownership Data Standard to providing a search engine, disclosure viewer, data archive and network visualisation (amongst others). As this phase of our work draws to a close, we are documenting the things we have learned and sharing our experiences with data users and publishers in the public and private sector.
**

This first post covers the fundamental task of modelling beneficial ownership data. We explain the core decisions made in our Beneficial Ownership Data Standard and the foundational modelling decisions these represent. We then explore the choices one needs to make when building a system to store or query BO data. We finish by sharing our own experiences using a variety of database systems and the open BO data available today.

## What is Beneficial Ownership Data?

Firstly, what are we talking about when we say ‘Beneficial Ownership Data’? Fundamentally, it is data that describes how companies are owned or controlled. This means it describes three things:
1. People, as individual owners
2. Legal entities, such as owned companies, intermediate owners or, in special cases, ultimate owners (e.g. with state-owned enterprises)
3. The ownership or control relationships and means of control – share percentages, details of voting rights, rules around board membership and so on.

Drawing from [our primer](http://standard.openownership.org/en/0.2.0/primer/index.html) on the subject, we know that information describing beneficial ownership is often scattered across documents such as companies’ annual reports, founding articles and filings to regulatory authorities.

IMAGE 1: 

*CAPTION: Image from the Beneficial Ownership Data Standard documentation, showing how parts of different documents combine to create beneficial ownership data.*

Gathering the necessary data can be challenging, but once done it is possible to get a complete picture of a company’s beneficial ownership, realising the benefits for anti-corruption and the market efficiency that beneficial ownership transparency (BOT) promises.

When we talk about modelling BO data, we are talking about the process of bringing disparate sources together and structuring the data for our uses. The use case is paramount. You might be reading this as a developer on a transparency project with no major technological constraints but specific, complicated questions about your data. Conversely, you might be implementing a register for a government with a strict specification to satisfy the needs of multiple stakeholders. Hopefully our experiences can help in both, and many other, situations.

In any modelling task there are three key questions to consider:

1. What are my objects of interest? In other words, what is it that I am representing with data?
2. How should these be stored? The answer to this is often driven by practical considerations as much as theoretical ones.
3. How should these be exchanged between systems? This question is particularly significant when such systems were designed around different legal frameworks or business processes.

Question 1 always comes first, but depending on the kind of system being built, a user might have to answer question 2 or 3 next. If building a national register of beneficial ownership, one might be concerned first with collecting data from users, then with how it gets published. If, like us, users are building a system that aggregates data, they might first think about the ideal ways for data to be exchanged. In fact, this is what led us to create the Beneficial Ownership Data Standard.

## The Beneficial Ownership Data Standard
