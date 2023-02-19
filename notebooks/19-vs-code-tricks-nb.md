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

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": ""}}

# vs-code tricks

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## `Format Document`

+++

with this command (use the palette to reach it) you can ask vs-code to re-format the whole document

<div class=note>
    
**tip**: it may be wise to stage your file first  
you can also easily undo of course
    
</div>

+++ {"slideshow": {"slide_type": "slide"}}

## `Indent Line` and `Outdent Line`

+++

bound to `⌘ [` et `⌘ ]` respectively

select a block, these keys will help you move the code left or right

+++ {"slideshow": {"slide_type": "slide"}}

## emmet

you can easily create repetitive stuff using this very handy tool - it is built into vs-code

e.g. you type

`(div.the-class>ul>(li*2))*3`

you get

```html
<div class="the-class">
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
<div class="the-class">
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
<div class="the-class">
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
```

+++ {"slideshow": {"slide_type": "slide"}}

## `emmet wrap`

+++

with `Emmet: wrap with abbreviation` (use the palette)  
you can easily wrap a piece of html inside a newly-created tag

+++ {"slideshow": {"slide_type": "slide"}}

## matching tags

+++

check out the extensions named "`Auto Rename Tags`"  
with that in place, when you change e.g. a `<div>` into a `<span>`, the matching `</div>` gets renamed automatically as well

+++ {"slideshow": {"slide_type": "slide"}}

## multiple cursors

+++

you can set multiple cursors, and then everything you type is done multiple times at once

several ways to use this feature

* manually add/remove cursors using `⌥ click` (⌥ is Option)
* use `⌥⌘↓` or `⌥⌘↑` to add more cursors up or down
* select a block and use `Add cursors to Line Ends` 
  to get one cursor on each of the selected lines

for more info, check out this page <https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor>

and/or on youtube, search for `vscode multiple cursor`

+++ {"slideshow": {"slide_type": "slide"}}

## keyboard shortcuts

+++

it is easy to assign these functions to a keyboard shortcut

* search the function in the palette
* move the mouse over the function name  
  a gear icon `⚙` appears on the right hand side
* click that

and/or search in the vs-code documentation, or ask google or chatgpt
