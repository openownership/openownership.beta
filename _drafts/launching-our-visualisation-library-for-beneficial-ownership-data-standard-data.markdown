---
title: Launching our visualisation library for Beneficial Ownership Data Standard
  data
date: 2020-10-09 10:42:00 Z
---

Today Open Ownership launched [a new software tool](https://github.com/openownership/visualisation-tool) for visualising beneficial ownership (BO) data. It is open-source and available for anyone to use in their own projects. [A hosted version](https://www.openownership.org/visualisation/visualisation-tool/) is also available, so that it can be used straight away without any coding. Users will need to bring some valid Beneficial Ownership Data Standard (BODS) data, but Open Ownership has done the hard work of turning the basic rules from the [Beneficial Ownership Visualisation System](https://openownership.org/visualisation) (BOVS) into code so that users can generate visualisations of any networks they have.

<div style="width:100%;height:0;padding-bottom:53%;position:relative;"><iframe src="https://giphy.com/embed/WMkIesB8F61Cl8zpnK" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

## Why have we built this tool?

Open Ownership has had a network visualisation feature in [the register](https://register.openownership.org) for a while now, so we know how useful it is for users to be able to see their data in graphical form. We have had great feedback on this feature and many implementers have told us they would like to offer something similar to their users. Because our existing visualisation is tricky to untangle from the register, we built this new tool which we hope will be easier to integrate.

There are lots of great options for data visualisation out there, which we do not intend to compete with. Yet, we see a niche in allowing BO registers and other data publishers to quickly give users a visualisation of their data. It runs completely in the browser, so should be simple to integrate into any existing web-based tools. The tool works with BODS data and we hope it will also encourage publishers to adopt the format.

As well as being useful to visualise data when publishing, it is also helpful for users to visualise data whilst they are working with it. In conjunction with our [data review tool](https://datareview.openownership.org/), this new visualisation tool is part of a suite of tools that can help implementers understand BO data better.

## How do I get started?

1. You can play with the tool via [our hosted version](https://www.openownership.org/visualisation/visualisation-tool/). You just need to bring some data, either in a file or pasted in. Our register can help you find some if you need it with the BODS download feature we have on every person and company record. Alternatively, use one of [our basic examples from the BODS documentation](http://standard.openownership.org/en/0.2.0/examples/index.html).
2. If you are a developer, you can install the library from NPM: 
`npm install @openownership/bods-dagre`
3. If you are keen to see how it works under the hood, and maybe to contribute to its development, you can collaborate with us on [GitHub](https://github.com/openownership/visualisation-tool).

## What’s next?

The version of the tool launched today is basic and very much an alpha version. We are working with several implementers who would like to use it whilst they work towards publishing BODS data, or integrate it into their own registers. We will use these experiences to develop the features further and find the inevitable bugs. You can keep track via our [issue tracker](https://github.com/openownership/visualisation-tool/issues) and we will also announce when we think we have something that is noteworthy to share. [Our tech team](mailto:tech@openownership.org) would love your feedback on whether you think this is useful or not, and what changes you would like to see.
