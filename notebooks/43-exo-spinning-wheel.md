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
  title: exo - spinning wheel
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

# practice : a spinning wheel

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": ""}}

## what it should look like

```{code-cell}
:hide_input: true

tools.sample_from_stem("../samples/43-spinning-wheel/spinning-wheel", {id: 'finished', sources_show: false})
```

+++ {"slideshow": {"slide_type": ""}}

## recommended steps

the notebooks will probably not have covered everything you need to know to do this

so, like always: **use your favorite search engine**

+++ {"slideshow": {"slide_type": ""}}

### step #1

make the base layout with dummy button and svg area

+++ {"slideshow": {"slide_type": ""}}

### step #2

draw circles on the base layout using java script (inline script is ok)

+++ {"slideshow": {"slide_type": ""}}

### step #3

change color and style of painted circle

+++ {"slideshow": {"slide_type": ""}}

### step #4

animate the color to make transition

+++ {"slideshow": {"slide_type": ""}}

### step #5

fix the animation to give the desired look

+++ {"slideshow": {"slide_type": ""}}

### step #6

make the animation stopable

+++ {"slideshow": {"slide_type": ""}}

### step #7

make the animation startabel/stopable by pressing the button

+++ {"slideshow": {"slide_type": ""}}

### step #8

cleanup the code, and cleanup again

+++ {"slideshow": {"slide_type": ""}}

## a few hints

+++

for example (but that's entirely up to you)

* write a JavaScript class `SpinningWheel` 
* that can be created from :
  * a `svg` element
  * the circle's center and radius `cx`, `cy`, `cr`,
  * the number of dots, the radius of dots `n_dots`, `r_dots`
  * the period in milliseconds (for one wheel round)
  * two colours for the 'dark' and 'light' ends of the spectrum
* and with methods like
  * `start()`
  * `stop()`
  * `resume()`
  * `clear()` 
  
* it may be helpful to create a convenience function that creates an SVG element inside a container that is found through its id;  
  e.g. `create_spinning_wheel("spin-container")` would create (and return) a `SpinningWheel` instance inside (the element found by selector) `#spin-container`

+++

* attach to the `load` event of your page
* a function that creates the spinning wheel
* and then stops it after a fixed duration

+++ {"slideshow": {"slide_type": ""}}

## also remember that

+++

* svg elements need to be created with the right namespace, i.e.:

```javascript
const svgNS = "http://www.w3.org/2000/svg";
let dot = document.createElementNS(svgNS, 'circle');
```

+++ {"slideshow": {"slide_type": ""}}

## the  HTML part

+++

your html part could look like the following

```{code-cell}
:hide_input: true

tools.sample_from_stem(
    '../samples/43-spinning-wheel/spinning-wheel',
   {id: 'source-only', css_show: false, js_show: false, output_show: false,})
```

+++ {"slideshow": {"slide_type": ""}}

## observe

* the HTML document is mostly empty, and gets populated by program

* as usual now, the way we attach a callback to the `load` event

+++ {"slideshow": {"slide_type": ""}}

## observe (2)

* how tedious it is to have to pass all arguments to the class constructor - because JavaScript does not support (yet?) default values parameters  
  in similar situations, a common practice is to impose only a small set of required parameters, and then to accept a single `options` argument
  
so one could offer instead:

```javascript
SpinningWheel(radius, options) {
   ...
}
```

and allow callers to set specific parameters in the `options` object; for examples one could call

```javascript
let spin = SpinningWheel(100, 
                         { bg_color: [200, 100, 50], period=500})
```
and have the `SpinningClass` code provide default for missing parameters.

+++

### optional assignments

+++

early finishers can :

* tweak their code to adapt to this more convenient interface
* make the wheel vanish automatically after the timeout
* add some interactive means to
  * clear the wheel
  * create new wheels upon mouse clicks
* etc…
