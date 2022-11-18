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
  title: exo - calculator
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

# practice : a calculator

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## assignement

start from this tutorial here
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

it comes [**with the html and css template**](https://codepen.io/zellwk/pen/pLgmGL)  
for a nice yet simple, calculator

the assignment is to write the **javascript companion** so that

* the device **actually does calculations**
* in a first step, ignore the '.' and just write an integer calculator

+++ {"slideshow": {"slide_type": "slide"}}

## what it should look like

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
---
tools.sample_from_stem("../samples/42-calculator", {sources_show: false})
```

+++ {"slideshow": {"slide_type": "slide"}}

## how to code: general tips

* first do not think on coding, but think about what do you want to achieve
* decompose the thing you are trying to achieve into smaller things  
  e.g. in the case of the spinning wheel, you need:

  * a button
  * circles
  * to change the color of a circle
  * to start/stop by pressing the button
  * and more ...
* try to achieve the smallest objectives first separately or independently
  * at this step the search engine can help :)
  * **BUT NEVER USE SOMETHING THAT YOU DO NOT UNDERSTAND**
  * **always** try to understand what you are using from others
  * **always** adapt the code you want to use from others
* gather all technics aquired in previous steps and combine them
* merge often
* enjoy ;)
