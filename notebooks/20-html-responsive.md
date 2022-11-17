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
  title: responsiveness
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

+++ {"slideshow": {"slide_type": ""}}

# responsiveness

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## responsive, meaning ?

+++

* as opposed to a Word document - designed for a fixed page size
  * a web page gets displayed on **many**   
    different devices (computer, phone, tablet)
  * even on the computer, windows  
    can be **resized** arbitrarily
* a responsive page **adapts** its layout to the **device size**
  * technically the visible area is called the **viewport**

+++ {"slideshow": {"slide_type": "slide"}}

this means for example :

+++ {"cell_style": "split", "slideshow": {"slide_type": ""}}

wide viewport

![](../media/responsive-wide.svg)

+++ {"cell_style": "split"}

narrow viewport

![](../media/responsive-narrow.svg)

+++ {"slideshow": {"slide_type": "slide"}}

### logical zoom

+++

* be aware also that all browsers have a feature   
  that let users artificially zoom in and out
* e.g. on Chrome on the mac, this is activated with `⌘ +` and `⌘ -`
* this also triggers changes, to which  
  **responsive** pages are expected to **react** properly

+++ {"slideshow": {"slide_type": "slide"}}

## default layout policy

+++ {"cell_style": "split"}

* if you do not override  
  the `display:` property,  
  you use a **historical** layout policy 
* very well summarized  
  in [this document on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)  
  (MDN = Mozilla Developer Network)
* mostly fits a written document flow  
  (think, a **Word document**)
* **not at all suited**  
  for a responsive design

+++ {"cell_style": "split"}

![](../media/css-display-block-inline.png)

+++ {"slideshow": {"slide_type": "slide"}}

##  `display` property : basic policies

+++

* layout policy is primarily materialized  
  in the **`display` property**
* values `inline`, `block` and `inline-block`  
  account for these legacy "document-oriented" policies
  * have been supported from the very beginning of the Web 
  * well illustrated [on this page on css-tricks.com](https://css-tricks.com/almanac/properties/d/display/)

+++ {"slideshow": {"slide_type": "slide"}}

## `display` - modern alternatives

+++

more modern values include :

* `grid` (**2-dimensional**)  like the name suggests,  
  allows to define a **rectangular area** as an array of rows and columns
* `flex` (**1-dimensional**)  a flexible layout, with more control  
  on how children will **fill the available space**

we will study these 2 policies in separate notebooks

+++ {"slideshow": {"slide_type": "slide"}}

## `display: none`

+++

* as an aside,
* one specific value for the `display` property is `none`
* in that case the element is present in the DOM
* but it does not show up at all in the rendered page

+++ {"slideshow": {"slide_type": "slide"}}

### `display: none` illustrated

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
---
display_none_html = `<p> an element can easily be 'hidden' from the output </p>

<p id="do-not-show"> let us hide this part altogether </p>

<p> in that case it won't show up at all, as if
it were not in the DOM at all - although it is present,
can be easily retrieved and turned back on,
using e.g. JavaScript (not demo'ed here though)</p>`

display_none_css = `#do-not-show {
    display: none;
    background-color: red;
}`
tools.sample_from_strings({html: display_none_html, css: display_none_css})
```
