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

Drawing from our primer on the subject, we know that information describing beneficial ownership is often scattered across documents such as companies’ annual reports, founding articles and filings to regulatory authorities.

IMAGE 1: 

*CAPTION: Image from the Beneficial Ownership Data Standard documentation, showing how parts of different documents combine to create beneficial ownership data.*

