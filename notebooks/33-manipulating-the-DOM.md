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
  title: messing with the DOM
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

+++ {"slideshow": {"slide_type": "slide"}}

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": "-"}}

# manipulating the DOM

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## about the DOM

* the DOM is the tree of the HTML code, as already seen
* the DOM can be read and modified in JavaScript  
  using the global variable `document`

* the DOM exposes a standard API, see the details on [Mozzila MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

+++ {"slideshow": {"slide_type": "slide"}}

## reading the DOM basics

+++

 * get element by their id: `document.getElementById("someid")`
 * get several elements by there tag `document.getElementsByTagName("sometag")`
 * those functions also work from a given element, for exemple:
 ```javascript
 let x = document.getElementById("someid");
 x.getElementsByTagName("div"); // will provide all 'div'
                                  // elements within x
 ```

 * read the attribute of an element `element.getAttribute("someattr")`
 * read the element style `element.style`
   * note: this is not the actual computed style, but the direct style of the element
 * read the class of an element `element.classList`
 * and much more...

+++ {"slideshow": {"slide_type": "slide"}}

## creating DOM element from scratch

+++

* simply use `document.createElement("sometagname")`
* or copy an existing element `element.cloneNode()`
* maybe you dont want deep copy `element.cloneNode(false)`

+++ {"slideshow": {"slide_type": "slide"}}

## modifying the DOM

* add element to the tree `element.appendCHild(another_element)`
* add or change an attribute `element.setAttribute("someattribute", somevalue)`
* add or change a given style `element.style.color = "rgb(0,0,0)"`
* add a class to an element `element.classList.add("someclass")`
* remove a class to an element `element.classList.remove("someclass")`
* and many more ...

+++ {"slideshow": {"slide_type": "slide"}}

## summary / cheatsheet

you can find a cheatsheet that summarizes most of this

* standalone: open `cheatsheet/cheatsheet.html` as found in the course repo
* from within this notebook: eval next cell

```{code-cell}
:hide_input: true
:tags: [hide_input]

tools.sample_from_stem("../cheatsheet/cheatsheet",
                      {width: '10em', height: '10em'})
```

***
