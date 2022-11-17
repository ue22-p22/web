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
  title: course requirements
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

# run this course locally ?

+++ {"slideshow": {"slide_type": ""}}

as usual you can enjoy this course with no local installation

if however you plan on reading this course locally on your computer, there are a few specific requirements that need to be fulfilled

+++ {"slideshow": {"slide_type": "slide"}}

## install as user as far as possible

+++

the commands below should be as far as possible run as a regular user  
if however, depending on your setup, they fail to complete because  
of a lack of permissions, you may need to invoke them as super-user  
by prepending them `sudo`; like in 
```
sudo npm install -g ijavascript
``` 
instead of just
```
npm install -g ijavascript
```

+++ {"slideshow": {"slide_type": "slide"}}

## Jupyter JavaScript kernel

+++

* we use a JavaScript kernel - of course
* this requires `node` and `npm`, and can be installed with
  * `npm install -g ijavascript`
  * `ijsinstall`

+++ {"slideshow": {"slide_type": "slide"}}

## Jupyter extensions

this slideshow takes advantage of a few Jupyter extensions;  
most notably, `hide_input` is massively used to **hide** 
the code that in turn produces code layout, so this one is rather critical

that being said, without any extension it is still possible to read the notebooks in regular - as opposed to slideshow - mode

+++ {"slideshow": {"slide_type": "slide"}}

* slideshow :
  * `pip install rise`  
* to read notebooks stored as markdown :  
  * `pip install jupytext[myst]`
* install Jupyter extensions
  * `pip install jupyter_contrib_nbextensions`  
  * `jupyter contrib nbextension install --user`   
* enable Jupyter's `hide_input` extension :  
  * `jupyter nbextension enable hide_input/main`
* (optional) enable Jupyter's `splitcell` extension  
  * `RUN jupyter nbextension enable splitcell/splitcell`
