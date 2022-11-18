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
  title: css @media rules
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": ""}}

# CSS `@media` rules

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## purpose

+++

as per [this article on w3schools](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) :

> The @media rule is used in media queries to apply **different styles** for **different media** types/devices

> Media queries can be used to check many things, such as:

> * width and height of the viewport
> * width and height of the device
> * orientation (is the tablet/phone in landscape or portrait mode?)
> * resolution
> * printing, ...

+++ {"slideshow": {"slide_type": "slide"}}

## example - width

```{code-cell}
:hide_input: true

threshold = '500px'

media_width_html = `<body>Click above to open
in a separate window, turn on
devel tools to see the window size, and resize
the window so the width becomes smaller
or larger than ${threshold}
<br><b>NOTE:</b> make sure your zoom factor is 100%
</body>`

media_width_css = `body {
    background-color: #fae3d9; /* light pink */
}

/* applies if the browser window width
   is less than 500px */

@media only screen and (max-width: 500px) {
  /* here we use a rule MORE SPECIFIC than above */
  html>body {
    background-color: #bbded6; /* light green */
  }
}`

tools.sample_from_strings({html: media_width_html, css: media_width_css}, {start_with: 'css'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## common pitfall

+++

* in this first example, note that
  * either the default `body` rule **must come first**
  * or the second rule must be **more specific**
* the reason is that when the `@media` rule applies
  * the browser sees **TWO RULES** for `body`
  * and if they have the **same specificity**
  * then the last one wins
* so it is a good practice to use  
  more specific rules in a media clause  
  hence our `html>body` (for instance)

+++ {"slideshow": {"slide_type": "slide"}}

## example - print

```{code-cell}
:hide_input: true

media_print_html = `<body class="media">
It is often very useful to tweak the print
layout, in terms of margins and the like.
<hr>
Click above to open in a separate window,
and pretend to print so you get a preview;
</body>`

media_print_css = `/* our body tag has a media class
 * with this trick the order now won't matter */
body {
    font-family: Trebuchet MS;
}

@media print {
  body.media {
    font-family: Papyrus;
    font-size: 50px;
    margin-left: 3cm;
  }
}`

tools.sample_from_strings({html: media_print_html, css: media_print_css}, {start_with: 'css'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## `<link>` examples

+++

another way to use media rules is from the `<head>` tag

+++

```html
<link rel="stylesheet"
    <!-- NOTE the new media attribute here -->
    media="screen and (min-width: 900px)"
    href="widescreen.css">
<link rel="stylesheet"
    media="screen and (max-width: 600px)"
    href="smallscreen.css">
```

+++

<div class="rise-footnote">
    
remember that `<html>` contains 2 sons, a `<head>` and a `<body>`
    
</div>

+++ {"slideshow": {"slide_type": "slide"}}

## see also

* [this w3schools page](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) has more details  
  on the admissible **syntax for media rules**

+++ {"slideshow": {"slide_type": "slide"}}

## practice

+++

1. open the example below in a separate window

  * observe behaviour on narrow, mid-size, and large viewport
1. write an HTML document and related CSS that mimicks it

  * at least for viewports smaller and larger than 512px

```{code-cell}
:hide_input: true

tools.sample_from_stem("../samples/22-exo-grid", {sources_show: false})
```
