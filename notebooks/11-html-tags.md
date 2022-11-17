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
  title: html tags
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

+++ {"slideshow": {"slide_type": ""}}

# most common HTML tags

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## text tags `<p>` and `<br>`

```{code-cell}
:hide_input: true

text_fragment = `<p> it is wise to always embed your text
in a text tag like &amp;lt;p&amp;gt;,
that stands for paragraph, and that of course gets justified
when the text is too wide to fit within the available space.</p>

<p>Sometimes the separation between paragraphs is too much,
<br> and in this case you can insert a simple linebreak
instead using the &amp;lt;br&amp;gt; tag
</p>
`
tools.sample_from_strings({html: text_fragment})
```

+++ {"slideshow": {"slide_type": "slide"}}

## lists with `<ul>`  and `<li>`

```{code-cell}
:hide_input: true

ul_fragment = `<p> a typical bullet list with a &amp;lt;ul&amp;gt; tag
<br> <code>ul</code> stands for "unordered list"
<br> <code>li</code> stands for "list item"
<ul>
<li> the first bullet </li>
<li> the second bullet </li>
</ul>
</p>
`;
tools.sample_from_strings({html: ul_fragment})
```

```{code-cell}
:hide_input: true

ol_fragment = `<p> the same with a &amp;lt;ol&amp;gt; tag instead
<br> <code>ol</code> stands for "ordered list"
<ol>
<li> the first bullet </li>
<li> the second bullet </li>
</ol>
</p>
`;
tools.sample_from_strings({html: ol_fragment})
```

+++ {"slideshow": {"slide_type": "slide"}}

## styling tags

* a handful of convenience tags for quick styling
  * like bold, italics, underline and similar
* however there are **much more powerful** mechanisms
  * so **don't use this at scale**, they are just conveniences

```{code-cell}
:hide_input: true

styling_fragment = `<p>
tags for <b>bold</b> or <i>italics</i> 
or <u>underline</u> or <s>strike-through</s>
<br>
that of course <u><b><i>can be combined</i></b></u>
</p>`
tools.sample_from_strings({html: styling_fragment})
```

<p class="rise-footnote">
    here again the right way to go is often to use classes, that we study later on
<p>

+++ {"slideshow": {"slide_type": "slide"}}

## code-like

* `<pre>` stands for preformatted
* `<code>` is for a terminal-like font and style

```{code-cell}
:hide_input: true

code_fragment = `<p>for inserting code that should be kept as-is

<code><pre>
import numpy as np
import matplotlib.pyplot as plt

X = np.linspace(-2*np.pi, 2*np.pi)
Y = np.sin(X)
plt.plot(X, Y)
</pre></code>
</p>`
tools.sample_from_strings({html: code_fragment})
```

+++ {"slideshow": {"slide_type": "slide"}}

## hyperlinks, and the anchor tag `<a>`

+++

the anchor tag serves two purposes :

* create a **hyperlink** that can bring users to another location
* create a **name** locally so that this particular location can be the target of a hyperlink

+++ {"slideshow": {"slide_type": "slide"}}

### hyperlink `<a href="some-url">`

+++

typical **hyperlink** reads like this  
**NOTE** that clicking the link will cause you to leave the present notebook !

```{code-cell}
:hide_input: true

hyperlink_fragment = `<a href="https://www.google.com/">the hyperlink</a>`;
tools.sample_from_strings({html: hyperlink_fragment})
```

+++ {"slideshow": {"slide_type": "slide"}}

### name anchor `<a name="some-name">`

+++

if you need a hyperlink to point, not at the beginning of this page, but somewhere in the middle, then create an anchor at that location

```{code-cell}
:hide_input: true

anchor_fragment = `<a name="the-anchor-name">the magic location</a>`;
tools.sample_from_strings({html: anchor_fragment})
```

+++ {"slideshow": {"slide_type": "slide"}}

### URL to an anchor

* you can then refer to that anchor from any other webpage using a URL that ends with `#the-anchor-name`
* so if this page is published as `https://example.com/some/page.html`
* then you can create a direct access to *the magic location* 
* with a `<a href="https://example.com/some/page.html#the-anchor-name">`

+++ {"slideshow": {"slide_type": "slide"}}

### local URL

```{code-cell}
:hide_input: true

redirect_fragment = `<p>it is easy to craft a local URL
<br>
when clicked, the hyperlink below would bring you 
<br>to the location of
<a href="#the-anchor-name">the anchor named 
<code>the-anchor-name</code></a>
<br>in the same document
<br>
(but not in this notebook though, 
because of the page structure)
`
tools.sample_from_strings({html: redirect_fragment})
```

+++ {"slideshow": {"slide_type": "slide"}}

## grouping with `<div>` and `<span>`

+++

* one **very common** tag is `<div>`
 * it is used to group together elements inside a single tree
 * `<div>` stands for *division*
* there is also `<span>` that serves a similar purpose 
 * except for the linebreaking behaviour
* an **essential tool** in any page design

+++ {"slideshow": {"slide_type": "slide"}}

### `<div>` and `<span>` example

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
---
group_html = `<p> a paragraph may  
<span style="background-color: #ddd;">
      contain a fragment</span>
that we want to keep together,
typically for styling purposes, 
but that is inline (no linebreak),
and for that use a &lt;span&gt; tag.</p>

<div style="background-color: #ddd;">
  <p> when you need to create a group that 
      contain several paragraphs</p>
  <p> then a &lt;div&gt; tag is more suitable</p>
</div>`
tools.sample_from_strings({html: group_html})
```

<p class="rise-footnote">this first example uses styling, 
    that we have not studied yet,
    to outline the &lt;span&gt; and &lt;div&gt; 
    elements by changing their background color</p>

+++ {"slideshow": {"slide_type": "slide"}}

### second example of `<div>`

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: ''
---
group2_html = `<div> 
the &amp;lt;div&amp;gt; tag is an essential unit brick for creating a page layout
</div>
<div style="position: absolute;
            bottom: 20px; right: 20px;
            background-color: aquamarine;"> 
  <div style="margin: 20px">if you inspect a real page, you will see </div>
  <div style="padding: 10px">that <b>div</b> elements are
     typically all over the place</div>
</div>`;
tools.sample_from_strings({html: group2_html})
```

+++ {"slideshow": {"slide_type": "slide"}}

## a word on tables

+++

there indeed is a `<table>` tag in html;  
in the early ages of HTML, tables were present everywhere, for creating fancy layouts

however, we strongly recommend that you stay away from that for the moment,  
especially if your goal is to create  grid-based layouts, that we will cover later on

+++

### `<table>` in action

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
---
table_html = `Use a &amp;lt;table&amp;gt; tag <b>only for data</b> 
and not for layouts, there are other, 
and much better tools, for creating fancy layouts
<table>
  <thead>
    <tr> <th> Name </th> <th> Rank </th> </tr>
  </thead>
  <tbody>
    <tr> <td> Alice </td> <td> 1st </td> </tr>
    <tr> <td> Bob </td> <td> 2nd </td> </tr>
  </tbody>
</table>`

table_css = `
th {
    border: 3px solid red;
    padding: 20px;
}

td {
    border: 1px solid blue;
    padding: 5px 20px;
}
`

tools.sample_from_strings({html: table_html, css: table_css})
```

+++ {"slideshow": {"slide_type": "slide"}}

## header tags `<h1>` .. `<h5>`

```{code-cell}
:hide_input: true

headers_fragment = `<h1> toplevel title </h1>
<h2> first sublevel title </h2>
<h3> and so on </h3>
<h3> other subsublevel </h3>
<h2> second sublevel title </h2>`

tools.sample_from_strings({html: headers_fragment}, {width: '25em', height: '14em'})
```

<p class="rise-footnote">
    <b>note</b> that these tags are essentially <b>a legacy thing</b>; they are convenient, but not quite necessary,
<br>you can easily write your own classes (more about classes later on) to get a similar outcome, with more control on the result.
</p>
