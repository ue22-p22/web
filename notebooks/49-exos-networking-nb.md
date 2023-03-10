---
celltoolbar: Slideshow
jupytext:
  cell_metadata_filter: all,-hidden,-heading_collapsed,-run_control,-trusted
  formats: md:myst
  notebook_metadata_filter: all,-language_info,-toc,-jupytext.text_representation.jupytext_version,-jupytext.text_representation.format_version
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: JavaScript (Node.js)
  language: javascript
  name: javascript
nbhosting:
  title: exo - xkcd
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

+++ {"slideshow": {"slide_type": ""}}

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": ""}}

# practice : a couple networking apps

```{code-cell}
tools = require('../js/tools'); tools.init()
```

the common objective here is: how to talk directly to a backend from JS

+++

## xkcd


build a small app that will let us browse the collection of drawings by xkcd

clone the repo below, and follow the instructions

<https://github.com/ue22-p22/web-xkcd.git>

+++

## pixel-war


build a small app that will let us paint a commonly shared image one pixel at a time

clone the repo below, and follow the instructions

<https://github.com/ue22-p22/web-pixelwar>
