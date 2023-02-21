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
  title: more exos
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

# practice : additional assignments

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": ""}}

## pythagore

+++

you are tasked to write a "graphical demonstration" for the Pythagorean Theorem, getting inspiration from the page below

the sample app is not responsive, you will need to open it in a separate window

```{code-cell}
:hide_input: true
:tags: [hide_input]

tools.sample_from_stem("../samples/44-pythagore/pythagore",
                       {sources_show: false, separate_height: '1000px', separate_width: '800px'})
```

+++ {"slideshow": {"slide_type": ""}}

## fibonacci and the golden number

you are asked to write a small app as a html+css+js that explores the neighbourhood between fibonacci numbers and the golden number, taking - as loose as you want - inspiration from the page below

here again the sample app is not responsive, you will need to open it in a separate window

**HINT** the slope of the 2 fixed rules is of course the golden ratio and its inverse

```{code-cell}
:hide_input: true
:tags: [hide_input]

// the minified version somehow was not working...
tools.sample_from_stem("../samples/44-fibonacci/fibonacci",
                       {sources_show: false, separate_height: '1000px', separate_width: '900px'})
```

## a snake

+++

* clone the github repo from <https://github.com/patorjk/JavaScript-Snake.git>
* open `index.html` in your browser - check that the game works for you
* could you read the code ?  
  if not what percentage can you read ?

* imagine some change that you'd like to make on the game  
  be it in terms of colors, speed, behaviour, whatever you  
  think could improve the game  
  are you able to implement that change ?

+++

## a tic-tac-toe

+++

xxx
*I ran into totally unexpected issues while trying to write
`sample_from_urls` - so leaving this alone for now*

the intention is to be able to insert pages that come from anywhere,
as the tic-tac-toe for example could be thought of as a separate repo

```{code-cell}
delete require.cache[require.resolve('../js/tools')]
tools = require('../js/tools'); tools.init()
```

```{code-cell}
:hide_input: false
:tags: [hide_input]

// not yet using tic-tac-toe as it is not yet under git
tools.sample_from_urls(
    {html: "https://github.com/ue22-p22/web/blob/main/samples/44-pythagore/pythagore.html",
     css:  "https://github.com/ue22-p22/web/blob/main/samples/44-pythagore/pythagore.css",
     js:   "https://github.com/ue22-p22/web/blob/main/samples/44-pythagore/pythagore.js",
    },
    {sources_show: false, separate_height: '1000px', separate_width: '900px'})
```
