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
  title: fetch() & HTTP requests
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

+++ {"slideshow": {"slide_type": "slide"}}

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

+++ {"slideshow": {"slide_type": ""}}

# networking in JavaScript

or: how to use the backend from JS - or another backend for that matter 

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## scope

as a conclusion, we will now just scratch the surface  
of a more realistic example that "talks back" to a backend  
just to see the JS features that let us  
**initiate network requests** from the frontend


as an example, we write a small app that:
* shows a single html page
* that can query <https://xkcd.com> for displaying the last comic

+++ {"slideshow": {"slide_type": "slide"}}

## how it works

primarily we have

* a builtin function called `fetch`
* that can issue an HTTP request
* so that we can interrogate a remote API
* the result of `fetch` is .. a promise
* and so we can act appropriately when the answer shows up
* see e.g. <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>

+++ {"slideshow": {"slide_type": "slide"}}

## the xkcd API

it is documented here <https://xkcd.com/json.html> (♡)  
and as you can see, it is as simple as it gets  

* <https://xkcd.now.sh/?comic=latest> about the current / latest comic
* <https://xkcd.now.sh/?comic=1000> about a specific issue

you can copy/paste these URLs in your browser to see how it works  
note that the contents here is not HTML, but JSON data

+++

<div class="rise-footnote">
    
(♡) actually we will need to use **another endpoint** as defined here <https://github.com/mrmartineau/xkcd-api>
namely `https://xkcd.now.sh` 

this is due to a change in 2018, about more stringent security, that was not ported back to the original API endpoint
    
</div>

+++ {"slideshow": {"slide_type": "slide"}}

## v1

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
---
tools.sample_from_stem('../samples/37-xkcd/xkcd-v1', 
                       {id: 'v1', start_with: 'js', width: '42em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## v2

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
---
tools.sample_from_stem('../samples/37-xkcd/xkcd-v2',
                      {id: 'v2', start_with: 'js', width: '50em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## v3

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
---
tools.sample_from_stem('../samples/37-xkcd/xkcd-v3',
                      {id: 'v3', start_with: 'js', width: '50em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## v4

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
---
tools.sample_from_stem('../samples/37-xkcd/xkcd-v4',
                      {id: 'v4', start_with: 'js', width: '50em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## v5

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
---
tools.sample_from_stem('../samples/37-xkcd/xkcd-v5',
                      {id: 'v5', start_with: 'js', width: '50em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## and more...

you can go a little further and 

* add 2 buttons to go backwards or forwards
* more importantly, refactor the code so that  
  it becomes more reusable by other applications  
  how would you go about that ?  
  would a class make sense ?

+++

****
