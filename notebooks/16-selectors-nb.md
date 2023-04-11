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
  title: more selectors
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": ""}}

# more elaborate selectors

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## selectors are very powerful

+++

generally speaking, selectors can be combined to create more and more selective ones; for example

`p.class1.class2`  
  matches elements that are tagged with `<p>` and have **both** classes

+++

also note that you can write a single rule for several selectors 

```css
p.class1, p.class2 {
   font-size: larger;
}
```

will apply the `font-size` property to `<p>` elements  
that have class `class1` **or** class `class2` - or both, naturally

+++ {"slideshow": {"slide_type": "slide"}}

## selecting X under Y

+++ {"slideshow": {"slide_type": ""}}

`div p`  
matches all `<p>` elements that are **below** a `<div>` element **at any depth**

`div>p`  
matches all `<p>` elements that are an **immediate child** of `<div>` element

+++

<p class="note">

here the <code>div</code> and the <code>p</code> parts are selectors themselves, they can be any more specific selector, of course

</p>

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
tags: [hide-input]
---
under_html = `<div>
  <span>
    <p> at level 2 under div </p>
  </span>
  <p> immediately under div </p>
</div>
`

under_css = `/* a <p> anywhere under <div> */
div p {
   color: red;
}

/* a <p> immediately under <div> */
div > p {
   color: blue;
}
`

tools.sample_from_strings({html: under_html, css: under_css}, {start_with: 'css'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## selecting X as a sibling of Y

+++ {"slideshow": {"slide_type": ""}}

`div + p`  
matches all `<p>` elements that are **immediate right sibling** of a `<div>` element

`div ~ p`  
matches all `<p>` elements that are **some right sibling** of a `<div>` element

+++

<p class="note">

two elements are siblings iff they have the same parent

</p>

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
tags: [hide-input]
---
sibling_html = `<div>
  <p>paragraph 1</p>
  <div>
    <p>child paragraph</p>
  </div>
  <p>paragraph 2</p>
  <p>paragraph 3</p>
</div>
`

sibling_css = `
/* siblings must have the same parent */

/* all <p> immediately after a <div> */
div + p {
  color: red;
}

/* all <p> somewhere after a <div> */
div ~ p {
  background-color: #ddd;
}
`

tools.sample_from_strings({html: sibling_html, css: sibling_css}, {start_with: 'css', id: 'sibling'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## pseudo-class selectors

+++

* pseudo-classes are set by the browser to expose  
  the status of some elements

* e.g. `a:hover` allows to match `<a>` links  
  but only when the mouse is hovering above them

+++ {"slideshow": {"slide_type": "slide"}}

### `:hover` pseudo-class

+++

a first, not-quite-working example (at least on Chrome)

```{code-cell}
:hide_input: true
:tags: [hide-input]

hover1_html = `<div id="part1">
  <a href="https://nbhosting.inria.fr" target="_">
a regular link is unsensitive to hovering</a>
</div>

<div class="part2">
  <a href="https://nbhosting.inria.fr" target="_">
     this one reacts if you hover mouse here</a>
  <br>
  <a name="nbhosting">
     this is an anchor tag,
     it reacts to mouse presence
     (at least on Chrome), that is not what we want</a>
</div>`

hover1_css = `.part2 a:hover {
    font-size: 300%;    background-color: red;
    text-decoration: none;
}
a {
    font-size: 200%;
}`

tools.sample_from_strings({html: hover1_html, css: hover1_css}, {start_with: 'css'})
```

+++ {"slideshow": {"slide_type": "slide"}}

### `:hover` and `:link`

+++

to get it right, we can use the other pseudo-class `:link`  
that is set only on `<a>` tags that have a `href=` attribute

```{code-cell}
:hide_input: true
:tags: [hide-input]

hover2_html = `<div id="part1">
  <a href="https://nbhosting.inria.fr" target="_">
     a regular link</a>
</div>

<div class="part2">
  <a href="https://nbhosting.inria.fr" target="_">
     hover mouse here</a>
  <br>
  <a name="nbhosting">now this anchor tag
     is excluded from the CSS selector, so it behaves
     as expected</a>
</div>`

hover2_css = `/* <a> elements under a .part2
   and that have both pseudo-classes */
.part2 a:hover:link {
    font-size: 300%;
    background-color: red;
    text-decoration: none;
}
a {
    font-size: 200%;
}`

tools.sample_from_strings({html: hover2_html, css: hover2_css}, {start_with: 'css'})
```

<p class="note">

note that here we build a selector that applies on elements that have <b>both</b> pseudo classes, much like with regular classes

</p>

+++ {"slideshow": {"slide_type": "slide"}}

### rank of element amongst its siblings

+++

* `:first-child`, `:last-child` : pseudo-classes  
  for what you think they do

* `:nth-child()` : can match for example the 4th child,  
  but also more usefully even/odd ranked  
  [see this page for details](https://css-tricks.com/useful-nth-child-recipies/)

+++ {"slideshow": {"slide_type": "slide"}}

### `nth-child() example`

```{code-cell}
:hide_input: true
:tags: [hide-input]

rank_html = `<ul>
  <li>the first bullet</li>
  <li>the 2nd bullet</li>
  <li>the 3rd bullet</li>
  <li>the 4th bullet</li>
  <li>the 5th bullet</li>
  <li>the 6th bullet</li>
  <li>the 7th bullet</li>
  <li>the 8th bullet</li>
</ul>
`;
rank_css = `li:nth-child(2n+1) {
  background-color: #fee; /* pink-ish */
}
li:nth-child(3n) {
  background-color: #eef; /* blue-ish */
}
li {
    font-size: 200%;
}`;
tools.sample_from_strings({html: rank_html, css: rank_css}, {start_with: 'css'})
```

+++ {"slideshow": {"slide_type": "slide"}}

### pseudo-class selectors (continued)

* see also [more detailed list of pseudo-class selectors](https://css-tricks.com/pseudo-class-selectors/)
* in particular `:not()` for negations

+++ {"slideshow": {"slide_type": "slide"}}

## attribute selectors

+++

* HTML elements can have arbitrary attributes,  
  not just `id`, `class`, `href`, ...

* it is possible to write selectors that match  
  on the **value** of a given attribute

* for example  
  `a[href="https://www.google.com/"]`  
  would match only the links to google

* [read more on this here](https://css-tricks.com/almanac/selectors/a/attribute/)

<div class="note">

of course this technique applies to any attribute,
not just `href=`

</div>
