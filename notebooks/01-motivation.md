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
  title: motivation
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

# objectives of this course

+++ {"slideshow": {"slide_type": "slide"}}

## why a course on web frontend pillars ?

+++

* with traditional languages like Python, C++, and Java  
  building a decent UI quickly becomes awkward
* but how much time do you spend on  
  facebook, twitter, what'sapp, … ?
* as of 2022, **everything** runs on the Web
* so this simply **cannot be ignored**

+++ {"slideshow": {"slide_type": "slide"}}

## vocabulary

+++

* web technologies are heavily **client-server** based
* **server**-side (think, **cloud**) is often called ***backend***  
* **client**-side (think, **browser**) is called ***frontend***

+++

for instance

* `facebook.com` hosts an enormous *backend* architecture
  * whole datacenters, huge amount of code
  * whose purpose is to serve network requests
* issued by traditional browsers (Chrome, Firefox, Edge, Safari, …)
  * and mobile apps running on phones and tablets
  * that are all *frontends* 
  * in the sense that they face the end user

+++ {"slideshow": {"slide_type": "slide"}}

## scope

+++

* due to time constraints
* we will restrict ourselves to the ***frontend*** side
* objective is to give you **some grip**
* on the **core** technologies supported in a browser  
  * namely **HTML**, **CSS** and **JavaScript**
* so that you can assess their enormous potential
* ignoring the fast-moving over-layers  
  * like *e.g.* react, angular, ...  
  * way too numerous to list at this point

+++ {"slideshow": {"slide_type": "slide"}}

## the root trio

+++

* `HTML`: ***content***
  * suitable to create content
  * everything that is visible on a web page  
    has been created as an HTML fragment
* `CSS`: ***styling***
  * how the document gets rendered
  * suitable to customize visible aspect
* `JavaScript`: ***behaviour***
  * full-fledged programming language
  * suitable to customize, well, everything really

+++ {"slideshow": {"slide_type": "slide"}}

## excluded

+++

this means that we will **not** address :

* backend technologies per se
  * like e.g. apache, nginx, django, REST apis, …
* nor the network protocols involved  
  * like http(s), websockets, and similar
* those will be touched on briefly later this year

+++ {"slideshow": {"slide_type": "slide"}}

## why are web technos so cool ?

+++

* so-called *GUI*-oriented tools (Graphical User Interfaces)
  * like .net, Java Swing, Qt, …
  * based on an anachronic and rigid widget-based mental model
  
***

* web allows for much cooler and more flexible interaction
  * any part of the screen can be part of the UI
* plus, thanks to a clear **separation** between **content** and **styling**
  * they allow designers to fruitfully collaborate with engineers
* as a bonus, super-portable with **zero installation**
  * across the whole range of **computers** and **mobile devices**

+++ {"slideshow": {"slide_type": "slide"}}

## wider than just the browser

+++ {"slideshow": {"slide_type": ""}}

* keep in mind that web frontend techologies
  * go way beyond the browsers per se 
* there are many options to build a **standalone** app  
  (that runs **outside of the browser**)  
  * leveraging the same core technos  
    (again, HTML, CSS and JavaScript)
  * as a native mobile app (IOS or Android)
  * and/or on traditional computers  
    i.e. build a native MacOS or Windows  
    traditional application, powered by e.g. [WebKit](https://webkit.org/)

+++ {"slideshow": {"slide_type": "slide"}}

## even wider than just the frontend

+++ {"slideshow": {"slide_type": ""}}

* also be aware that JavaScript
  * that is primarily famous for powering frontends
  * is becoming more and more popular  
    as a traditional programming tool (see node.js)
  * so it can be, and actually is, more and more  
    used for writing backends as well
  * and even for traditional computing

+++ {"slideshow": {"slide_type": "slide"}}

## objectives

+++

* make sure you are aware of the **enormous potential**
* outline some specific problems  
  esp. **asynchroneous** / non-sequential nature  
  of user interaction and network activity
* start to build a **mental map** where you can place the current buzzwords
