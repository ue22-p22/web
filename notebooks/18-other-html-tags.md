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
  title: other html tags
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

# more HTML tags

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## multimedia

+++

* [`<img>`](https://www.w3schools.com/tags/tag_img.asp)
* [`<audio>`](https://www.w3schools.com/html/html5_audio.asp)
* [`<video>`](https://www.w3schools.com/html/html5_video.asp)

find out more on these by yourselves

+++ {"slideshow": {"slide_type": "slide"}}

## graphics and `<svg>`

+++

* SVG is a complete subsystem to deal with vector graphics
* [learn more about SVG at w3schools](https://www.w3schools.com/graphics/svg_intro.asp) (basic)
* [and much more on css-tricks](https://css-tricks.com/svg-properties-and-css/)  
  (very advanced, including animations)

+++ {"slideshow": {"slide_type": "slide"}}

### svg example

```{code-cell}
:hide_input: true

svg_html=`<h1>my first SVG</h1>

<svg width="200" height="200">
  <circle cx="50" cy="50" r="20" />
  <rect x="50" y="20" width="150" height="150" />
</svg>`

svg_css = `svg {
  border: 1px solid black;
}
rect {
  fill: blue;
  stroke: pink;
  stroke-width: 5;
  fill-opacity: 0.1;
  stroke-opacity: 0.8;
}

circle {
  stroke: rgb(100, 200, 50);
  stroke-width: 4;
  fill: yellow;
}`

tools.sample_from_strings({html: svg_html, css: svg_css})
```

+++ {"slideshow": {"slide_type": "slide"}}

## form-oriented

+++

for building forms :

* `<input>` for entering data
* `<button>` for validating data
* `<form>` to group user-provided input  

out of scope for this course though, as it involves a backend

+++ {"slideshow": {"slide_type": "slide"}}

## sectioning

+++

* `<h1>` .. `<h6>` are only meaningful for the title line
* but are too poor to actually convey sectioning information
* so in addition to these, there are also
  * `<section>`
  * `<nav>`
  * [and a few others as described here](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)

+++ {"slideshow": {"slide_type": "slide"}}

### sectioning example

```{code-cell}
:hide_input: true

tools.sample_from_stem("../samples/18-sections")
```

+++ {"slideshow": {"slide_type": "slide"}}

## miscell others

+++

in a jumble :

* `<br>` to insert a linebreak
* `<hr>` to insert a horizontal line
* `<iframe>` to insert another web page
* `<canvas>` is a more recent alternative to SVG for graphics,  
  [see more on css-tricks](https://css-tricks.com/learn-canvas-snake-game/)

+++ {"slideshow": {"slide_type": "slide"}}

## practice

+++ {"cell_style": "center"}

* as a conclusion of this first basic course
  * with all the knowledge you now have about HTML and CSS,
* write your complete resume; you should have 2 files 
  * `resume.html`
  * `resume.css`
* at this point, you may think of it as (if it were) a word document
  * with a header that has your details and photo
  * and the 4 well structured sections,
  * again 'experience', 'education', 'skills' and 'languages'
* try to print it in a PDF file, to evaluate how it fits with respect to an A4 page
* **NOTE** that next course will address overall layout in greater details  
  (i.e. the relative place of all pieces wrt one another)  
  so do not spend too much time on trying to make best usage of space at this point
