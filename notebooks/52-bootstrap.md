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
  title: bootstrap
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

+++ {"slideshow": {"slide_type": "slide"}}

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": ""}}

# bootstrap

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## what is bootstrap ?

+++

* originally developped by twitter, [bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) is a - mostly CSS - library that offers
  * a [grid-based framework for easier responsive layouts](https://getbootstrap.com/docs/4.4/layout/overview/)
  * a distinctive look & feel for [usual content](https://getbootstrap.com/docs/4.4/content/typography/)
  * [some components](https://getbootstrap.com/docs/4.4/components/alerts/) like navbars, paginations...

* note that bootstrap depends on jQuery

+++ {"slideshow": {"slide_type": "slide"}}

## why bootstrap

+++

* here again bootstrap has been **very widely adopted**  
* and for this reason is a **must know** as well  
* the grid system may be one of the reasons  
  that made bootstrap so popular

* on next slide we give a very small glimpse at what  
  can be done with no CSS (our css just outlines the layout)
  and no JavaScript at all

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
tags: [hide_input]
---
tools.sample_from_stem("../samples/52-bootstrap", {height: "30em"})
```

<div class="note">

many more effects are available - read the components page !

</div>

+++ {"slideshow": {"slide_type": "slide"}}

### bootstrap grid system

+++

the basics of the grid system rely on an overall container `<div>` that has a class `container` or `container-fluid`
the latter taking all the available space (in width), while the former will impose the width to belong in a finite set of values as far as possible (see example above)

[make sure to rtfm](https://getbootstrap.com/docs/4.0/layout/overview/)

+++ {"slideshow": {"slide_type": "slide"}}

### grid system (continued)

+++

* inside a `div.container`, you insert elements `div.row` that materialize a row in your layout
* a row is divided into 12 equal parts
*  then inside a `.row` you put subcontainers that are `class`'ed with names like e.g.
  * `col` : use in width as much as possible
  * `col-6` : use 6 elements of grid

There are means to define separate layouts for different device widths ([details here](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints))

[make sure to rtfm](https://getbootstrap.com/docs/4.0/layout/grid/)

+++ {"slideshow": {"slide_type": "slide"}}

## more examples

+++

bootstrap provides [a gallery of example codes](https://getbootstrap.com/docs/4.0/examples/)

it is strongly recommended to browse that page to see the kind of results that you can expect with bootstrap; all this should feel rather familiar, given the number of sites that are built on bootstrap.

the code for each of these examples is generally reasonably small, although the constructions required with bootstrap tend to be rather verbose.

again remember that you

+++ {"slideshow": {"slide_type": "slide"}}

## practice

+++

* make sure you use `git` to store the latest version of your resume  
  as this exercise may damage your work 

* inject `bootstrap.css` into your resume
* **try to** write a version of your resume that uses **the bootstrap grid system** to handle grid layout and responsiveness
* which approach (with or without bootstrap) do you have better ? why ? 
* are there other aspects of bootstrap that you can leverage to improve the look of your resume ?
