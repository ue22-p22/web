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
  title: flex layout
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": ""}}

# `display: flex`

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## purpose

+++ {"slideshow": {"slide_type": ""}}

* `flex` is another modern layout engine  
* that tries to solve or at least alleviate  
* the obvious deficiencies of the old-school  
 `block` model and related tools

* as opposed to grids, it is concerned with **1-dimension** flow of data
* it **complements nicely** what is doable with grids

+++ {"slideshow": {"slide_type": "slide"}}

examples, as per [this article on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

<div style="font-size: 70%;">

> The following simple layout requirements are either difficult or impossible to achieve with such tools, in any kind of convenient, flexible way:

> * Vertically centering a block of content inside its parent.
> * Making all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
> * Making all columns in a multiple column layout adopt the same height even if they contain a different amount of content.
    

</div>

+++ {"slideshow": {"slide_type": "slide"}}

## flex example (1)

by default, direction = row, wrap = nowrap

```{code-cell}
:hide_input: true
:tags: [hide-input]

flex1_html = `<div class="container">
<div class="item"> Dolor quiquia </div>
<div class="item"> aliquam </div>
<div class="item"> sed numquam </div>
<div class="item"> voluptatem </div>
<div class="item"> quisquam modi. </div>
</div>`

flex1_css = `/* the important part is just this */
.container {
    display: flex;
    justify-content: space-evenly;
}

/* cosmetic: outline borders */
body {
    border: none;
}
* { border: 1px solid red;
    padding: 4px; border-radius: 4px;}

.item {
    font-size: 30px;
}
`

tools.sample_from_strings({html: flex1_html, css: flex1_css}, {id: 'flex1', start_with: 'css'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## flex example (2)

identical except for `flex-wrap: wrap`

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
tags: [hide-input]
---
flex2_html = `<div class="container">
<div class="item"> Dolor quiquia </div>
<div class="item"> aliquam </div>
<div class="item"> sed numquam </div>
<div class="item"> voluptatem </div>
<div class="item"> quisquam modi. </div>
</div>`

flex2_css = `.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

/* outline borders */
body { border: none; }
* { border: 1px solid red;
    padding: 4px; border-radius: 4px;}

.item {
    font-size: 40px;
}
`

tools.sample_from_strings({html: flex2_html, css: flex2_css}, {id: 'flex2', start_with: 'css'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## assignment

* [this page on css-trick.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is an easy, and very complete, read on flex
* it is again **strongly recommended**
  * to bookmark it
  * and to browse it but thoroughly
    to get a perception of what is doable with this layout

+++ {"slideshow": {"slide_type": "slide"}}

## use cases

+++

* the `flex` display is an extremely powerful tool  
  for fine-grained control over your layout

* it could clearly be the default behaviour  
  (but is not just for **legacy**)

* when writing a new page from scratch,  
  using `flex` is almost always a good idea

* rather recent (circa 2017) but [supported in all modern browsers](https://caniuse.com/#feat=flexbox)

+++ {"slideshow": {"slide_type": "slide"}}

## no longer bottom-up only

+++

* let us outline that the flex display model
  * is disruptive as compared to its predecessors
* in the sense that older models were essentially bottom up
  * i.e. an element had a size and the container was to deal with that size
  * now, a flex container can influence the size of its contained items

+++ {"slideshow": {"slide_type": "slide"}}

## grid's and flex's

+++

* as mentioned earlier, both display policies have their own pros and cons
* you should not think in terms or one **or** the other
* but rather in terms of using **both** depending on the situation
* so **do not hesitate** to define **nested** layouts
* with flex's in grid's in flex's in grid's
  or the other way around, of course

* this is why the `<div>` tag is so all over the place

+++ {"slideshow": {"slide_type": "slide"}}

## practice

1. mimick the layout below

```{code-cell}
:hide_input: true
:tags: [hide-input]

tools.sample_from_stem("../samples/23-exo-flex", {sources_show: false})
```

+++ {"slideshow": {"slide_type": "slide"}}

## see also

- Flexbox Froggy <https://flexboxfroggy.com/>  
  a game to practice the flexbox properties
