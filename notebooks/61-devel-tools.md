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
  display_name: Javascript (Node.js)
  language: javascript
  name: javascript
nbhosting:
  title: build & devel tools
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

# build and devel tools

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## pretty low level

+++

HTML, CSS and JavaScript are powerful each in their field  

fast evolution is slowed is not possible  
with the large number of browsers that need to follow up

fuel for the proliferations of tools "on top of"   
some features sometimes make it to the core 3 pillars

+++ {"slideshow": {"slide_type": "slide"}}

for example : **CSS variables**   
i.e. ability to define a symbolic name for, say, a color  
and reuse it in different places

has been missing for a long time,  
**now available** as a native CSS feature  
although with a rather ugly syntax !

```{code-cell}
:hide_input: true

cssvar_html = `<p>using a CSS variable</p>`;
cssvar_css = `/* declaration */
:root {
  --main-bg-color: #eab0d9;
}
/* usage */
p {
  background-color: var(--main-bg-color);
}
`
tools.sample_from_strings({html: cssvar_html, css: cssvar_css})
```

+++ {"slideshow": {"slide_type": "slide"}}

## filling the void

during the time it was not available, such a lacking feature has been taken care of through tooling   

in the case of CSS variables, miscellaneous **preprocessors** available like e.g.  
[Sass](http://sass-lang.com/), [Less](http://lesscss.org/features/)

the principle of a preprocessor being to **transform** the code **before it runs**  
to make it compatible with what the low-level tools expect

+++

<p class="rise-footnote">
    specifically with CSS variables, a preprocessor like <code>Sass</code> or <code>less</code> will offer its own extra syntax for defining and using variables, and will rewrite the human-written code into CSS</p>

+++ {"slideshow": {"slide_type": "slide"}}

## the importance of `node.js`

+++

* `node.js`, or in short `node`, is a runtime for JavaScript  
* that runs in a 'regular' environment (not a browser)
* unlike what the name suggests, it is **not** a library
* and btw it what the notebook uses to evaluate code

+++ {"slideshow": {"slide_type": "slide"}}

## digression : dependencies

+++

what with all this dependencies business ?

* if your code uses e.g. bootstrap,
* but then bootstrap needs jQuery
* then you need to have jQuery loaded somehow
* in this case jQuery is an implicit dependency of your app

so transitively you end up needing **quite a lot** of libraries you are not even aware of

+++ {"slideshow": {"slide_type": "slide"}}

## `npm`

+++

* all the tooling written for the ecosystem is written in JavaScript using `node`
* in particular `npm` - which is the equivalent of `pip` for js
* and that is also able to take care of your dependencies
* you can use `npm` to install a specific module, and its dependencies

+++ {"slideshow": {"slide_type": "slide"}}

### `npm` use case

+++

in an earlier exercise

* we had mentioned in our header `bootstrap.js` and `jquery.js`
* even though we were not using `jquery` ourselves
* but bootstrap needs it

and, in the same exercise

* we have gone to `cdnjs` to manually determine version numbers

with `npm`, we could instead 

* have created a file **`package.json`** that said essentially that we need `bootstrap`  
* optionnally by pinning a version number for that
* and let `npm` go fetch all the dependencies by itself

+++ {"slideshow": {"slide_type": "slide"}}

## tooling areas

several other areas where tooling is important :

* **transpiling** : you want to support as many users as you can, including with - possibly very - old browsers; but you want to write code with up-to-date technology; you need a transpiler like e.g. `babel` that can produce equivalent code but for older generations of browsers (4-5 years being close to infinity…)
* **minimizing** : you want to make your code smaller, and less readable 
* **bundling** : you need a tool to automate your dependencies

+++ {"slideshow": {"slide_type": "slide"}}

## some names

+++

* CSS preprocessors: `less`, `Sass`
* dependencies: `npm`, `yarn`
* transpilers: `babel`
* minimizers: `node-minify`
* bundlers: `webpack`
