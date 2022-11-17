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
  title: web frontend ecosystem
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

+++

# introduction to web frontend

+++ {"slideshow": {"slide_type": "slide"}}

## Web ecosystem (frontend)

+++

* crash course on how to write web pages  
* just scratch the surface, a whole lot is **not even mentioned**  
* focus on the core technological bricks
  * HTML (HyperText Markup Language)
  * CSS (Cascading Style Sheets)
  * JavaScript (a.k.a. ECMAScript)

+++ {"slideshow": {"slide_type": "slide"}}

## evolution speed

+++

* all this started in a very awkward way
  * early versions were always quick and dirty
  * for example, the first JavaScript version [was written in 10 days](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/)
* evolving **very quickly**, especially
  * in the tooling for integrating the pieces together  
    (e.g. JS loaders and transpilers and bundlers…)
* many many over-layers that improve / mitigate some flaws
  * like ***less*** or ***sass*** above CSS,  
  * ***TypeScript*** or ***CoffeeScript*** above JavaScript, …
  * frameworks like vue, react, angular
  * tools for mobile depl. [expo](https://expo.io), 
    [svelte](https://svelte.dev), [ionic](https://ionicframework.com) …

+++ {"slideshow": {"slide_type": "slide"}}

##  focus on HTML - CSS - JavaScript

+++ {"slideshow": {"slide_type": ""}}

* we will only focus on **grassroots level**
  * that will likely remain valid for a while
* versions for our focus
  * HTML-5, CSS-3, ECMAScript-6

+++ {"slideshow": {"slide_type": "slide"}}

## backend and frontend

+++ {"slideshow": {"slide_type": ""}, "cell_style": "split"}

* Web server :  
  * operated by the application provider
  * runs **backend** code
* Web browser :   
  * runs on your laptop
  * runs **frontend** code  
    (even though that code  
    is fetched at the backend)

+++ {"slideshow": {"slide_type": ""}, "cell_style": "split"}

![](../media/client-server.svg)

+++ {"slideshow": {"slide_type": "slide"}}

## you may have heard of

+++ {"slideshow": {"slide_type": ""}}

* typical backend technologies
  * PHP, django or flask (Python), Ruby/on rails, SQL databases
  * apache, nginx, load balancing
* typical frontend technologies
  * **HTML, CSS, JavaScript**
  * react, angular, vue, ...
* in between
  * TCP/IP : low-level communication protocol of the Internet
  * HTTP : HyperText Transfer Protocol
  * WebSocket : full-duplex communication channel  
    over a single TCP connection 

you can see our focus is 
a small fraction of the whole spectrum
