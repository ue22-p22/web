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
  title: loading css
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": ""}}

# how to apply CSS

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## 3 ways to apply CSS

+++ {"slideshow": {"slide_type": ""}}

* located in a separate **CSS file** - via its own URL
* embedded in html within a `<style>` html tag
* hard-attached to an element itself with `style=`

+++ {"slideshow": {"slide_type": "slide"}}

## preferred method : a separate CSS

+++ {"slideshow": {"slide_type": ""}}

* write your CSS in a separate file, e.g. `mystyle.css`
* which, assuming it is in the same directory as your `hello.html`
* can be kind-of included in `hello.html`
* by inserting the following <link> line
* in the `<head>` part of your html

+++ {"slideshow": {"slide_type": "slide"}}

### separate CSS in action

```{code-cell}
---
cell_style: center
hide_input: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
separate_html = `
<html>
  <head>
    <!-- this is the line that matters -->
    <link rel="stylesheet" href="hello.css">  
  </head>
  <body>
     Hello
  </body>
</html>
`

/* const */ fs = require('fs')
/* const */ separate_css = fs.readFileSync('hello.css', 'utf8')


tools.sample_from_strings({html: separate_html, css: separate_css})
```

+++ {"slideshow": {"slide_type": "slide"}, "tags": ["level_intermediate"]}

##### notes on relative URLs

the way we load a css from *the same folder* as the html  
is a consequence of a general rule to build  
so-called *relative* URLs, that work like this:

if you have loaded a document as, say  
<code>http://hostname.io/the/path/to.html</code>  
then **from within that document**:

* <code>href="to.css"</code> is interpreted as <code>href="http://hostname.io/the/path/to.css"</code></li>
* <code>href="/to.css"</code> is interpreted as <code>href="http://hostname.io/to.css"</code></li>
* <code>href="/other/path/to.css"</code> is interpreted as <code>href="http://hostname.io/other/path/to.css"</code></li>
* <code>href="other/path/to.css"</code> is interpreted as <code>href="http://hostname.io/the/path/other/path/to.css"</code></li>

and the same goes with the <code>file:///</code> URL scheme

+++ {"slideshow": {"slide_type": "slide"}}

##### notes on self-closing tags

* note also the absence of a `</link>`,
* which may remind you of `<br>`
* such elements are called **void** or **empty** elements
* among others : `<br>`, `<hr>`, `<link>`, `<img>`,...

+++ {"slideshow": {"slide_type": "slide"}}

## second method : inline in html

+++

* you can also insert a `<style>` tag in your html
* and mention the CSS code there directly
* it is **less recommended** as it kind of ruins the  
  **separation** between **contents** and **presentation**

+++ {"slideshow": {"slide_type": "slide"}}

### inline CSS in action

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
tags: [hide-input]
---
embedded_html = `<div> CSS can be inlined right into the HTML
    as a &amp;lt;style&amp;gt; tag
</div>

<style>
div {
    color: red;
    font-size: x-large;
}
</style>
`

tools.sample_from_strings({html: embedded_html})
```

+++ {"slideshow": {"slide_type": "slide"}}

## method 3: hardwired with `style=`

+++ {"slideshow": {"slide_type": ""}}

* attach a `style=` attribute on a HTML tag
* this method is by far **the worst**
* and should be used in last resort

```{code-cell}
:hide_input: true
:tags: [hide-input]

embedded_html = `<div
style="background-color: red;
font-size: x-large;
line-height: 50px;
padding:30px;" >

If you attach styling to a HTML tag with a
<code>style=</code> attribute, it will
<b>take precedence</b> on
everything else
<br>
more on this later on

</div>`

tools.sample_from_strings({html: embedded_html})
```

+++ {"slideshow": {"slide_type": "slide"}}

## practice

+++ {"slideshow": {"slide_type": ""}, "hide_input": true}

* copy `hello.html` into `mycv.html`
* create a more realistic skeleton for a résumé
  * with 4 sections 'experience', 'education', 'skills' and 'languages'
  * **keep it simple** for now, nothing too elaborate
  * make sure all the text gets attached to  
    adapted tags like `<div>` or `<li>`

  * and **not** directly under `<body>`  
    like it was done in `hello.html`

  * make sure to insert at least one `<a href=...>` hyperlink

+++ {"slideshow": {"slide_type": "slide"}}

### practice (continued)

+++ {"slideshow": {"slide_type": ""}, "hide_input": true}

* create a CSS file `mycv.css`
  * with some settings that should apply to `mycv.html`
* add a `<link>` tag in the html `<head>` area
  * so the css is loaded by the html
* load `mycv.html` in a browser
  * change the CSS and reload the browser page
  * to see the effect of your changes
* we recommend you use a local git repo all along

+++ {"slideshow": {"slide_type": "slide"}}

## the browser cache

+++

for performance reasons primarily :

* fetching a file may be slow in poor network conditions
* so, once a file has been loaded
  * it may be **cached inside** the browser
  * so that future references do not fetch it again

**beware of that** during development

* reloading the html file
* may **not reload** the css because it is cached

+++ {"slideshow": {"slide_type": "slide"}}

## the browser cache (continued)

+++

a couple hints and workarounds

* reload with the `Shift` modifier pressed  
  either with a mouse-click (&#x21bb;),  
  or keyboard shortcut (⌘-r on e.g. chrome/mac)  
  double-check that with the browser you actually use

* devel tools have a *Sources* tab that let you check  
  the content of each individual loaded file

* often browsers have more advanced tools to manage cache  
  e.g. Chrome : `⠸` menu → *More Tools* → *Clear Browsing Data*
