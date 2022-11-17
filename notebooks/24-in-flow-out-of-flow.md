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
  title: in / out-of flow
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

# in-flow and out-of-flow

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## default is in-flow

+++

most of the elements we have seen so far are said to be *in-flow* :

* i.e. they show up in the order where they appear in the source
* at a position determined by the elements before them

+++ {"slideshow": {"slide_type": "slide"}}

## out-of-flow is available too

+++

* there are ways to create elements out-of-flow 
* a common practical example is a pinned header 
  (or navigation bar), illustrated below  
* example 1 : using old-fashioned `position: fixed`
* example 2 : using `position: sticky`

+++ {"slideshow": {"slide_type": "slide"}}

## `fixed` example : a pinned header

```{code-cell}
:hide_input: true

fixed_html = `<div>scroll me up !</div>

<div id="header">
  I am a header with <code>position: fixed</code>. My height better 
  be configured statically, so that the body's top margin
  can be tailored accordingly.
</div>

<div>you can see the header sticks at the top !</div>`

fixed_css = `body {
    /* same as the header's height */
    margin-top: 120px;
}
#header {
    position: fixed;
  /* this is hard-wired */
    height: 120px;
  /* attach it in the corner */
    top: 0px;
    right: 0px;
  /* the 80 px is for the whole box */
    box-sizing: border-box; 

  /* everything below is just cosmetic */
    font-size: 20px;    
    padding: 4px 10px;
    background-color: rgba(255, 240, 240, .50);
    border: 3px solid red;
}

div:not(#header) {
    /* outline borders */
    border: 2px solid blue;
    margin-top: 20px;
    font-size: 45px;
    height: 400px;  /* fake content */
    background-color: #fafafa;
}`

tools.sample_from_strings({html: fixed_html, css: fixed_css}, 
                          {start_with: 'css', height: '19em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

### a few comments

**note** in the previous example :

* we set the header's height to a fixed value (120px)  
* this way we can shift the regular content down by that amount  
  so they do not overlap at first
* note the use of the `box-sizing` property  
  we want the 120px to be for the **full height** (padding + border included) of the header 
* also note the `rgba()` function to define colors with a level of transparency  
  0: totally transparent, 1: totally opaque
* we could have avoided the duplication of that `120px` thing
  using CSS so-called *custom properties* (aka variables)  
  but more on this later...

+++ {"slideshow": {"slide_type": "slide"}}

## `sticky` example : a pinned header

```{code-cell}
:hide_input: true

sticky_html = `
<div id="header">
  I am a header with <code>position: sticky</code><br>
this time I do not need to specify (twice) a height
</div>

<div>scroll me up !</div>

<div>you can see the header sticks at the top !</div>`

sticky_css = `
#header {
    position: sticky;
    top: 6px;

  /* everything below is just cosmetic */
    font-size: 20px;    
    padding: 4px 10px;
    background-color: rgba(255, 240, 240, .50);
    border: 3px solid red;
}

div:not(#header) {
    /* outline borders */
    border: 2px solid blue;
    margin-top: 20px;
    font-size: 45px;
    height: 400px;  /* fake content */
    background-color: #fafafa;
}`

tools.sample_from_strings({html: sticky_html, css: sticky_css},
                          {start_with: 'css', height: '16em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## see also

+++

* this topic is described [at greater length in this MDN article](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)
* css-tricks also has [a blog post dedicated to floats](https://css-tricks.com/all-about-floats/)
* **WARNING** : advised for **advanced users only**  
  * beginners should probably not try to use this at first
  * as mix-and-match of `display` and `position` settings  
    can quickly become rather confusing  
    not to mention the `float` property
  * see these as **last resort**,  
    only if grid/flex really won't work for you

+++ {"slideshow": {"slide_type": "slide"}}

## extras

+++

optional topics :

* see property `z-index` to define what is on the front or in the back
  
* **experts** : if you believe you have a full understanding  
  of how CSS layouts work, you should [give this test a shot](https://css-tricks.com/how-well-do-you-know-css-layout/)  
  (you will feel more humble afterwards ;-)
