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
  title: CSS variables
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": ""}}

# CSS custom properties

*aka* **CSS variables**

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## why

* DRY: don't repeat yourself
* so far, we have not seen a way to "parametrize" things
* i.e. to use what other languages call *variables*
* and which btw, CSS calls *custom properties*

+++ {"slideshow": {"slide_type": "slide"}}

## example 1: DRY

imagine you'd like to define a custom class:

* where the padding and margin properties are equal
* where the text color matches the border color
* and you want to be able to customize this on specific elements

let's see how that can be done

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
tags: [hide_input]
---
tools.sample_from_stem('../samples/25-simple-vars', {'start_with': 'css'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## example 2

imagine you'd like to define a custom header class:

* &lt;h1&gt; elements with the `dashed` class appear with a dashed underline
* this underline has default attributes (width, height, color)
* here again you want to be able to customize this on specific elements

so in other words, write a kind-of *parameterized* class, that can be tweaked from the outside  

let's see how that can be done

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
tags: [hide_input]
---
tools.sample_from_stem('../samples/25-dashed-headers', {'start_with': 'css', height: '35em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## how it works

* properties whose name starts with `--` are *custom* properties
  * this naming convention should resonate (a bit) with the *dunder* names in Python
* the way to 'solve' the value of such properties  
  * is the same as for regular properties
* you can use `var()` to get the value of such a property
* and - among others - `calc()` to perform computations

+++ {"slideshow": {"slide_type": "slide"}}

## see also

* CSS-tricks' excellent summary on custom properties  
  <https://css-tricks.com/a-complete-guide-to-custom-properties/>

* the original codepen that implements parametrized underlined headers  
  <https://codepen.io/t_afif/pen/bGYEMgG>

+++

****
