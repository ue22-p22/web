---
jupyter:
  jupytext:
    cell_metadata_filter: all,-hidden,-heading_collapsed,-run_control,-trusted
    formats: md
    notebook_metadata_filter: all,-language_info,-toc,-jupytext.text_representation.jupytext_version,-jupytext.text_representation.format_version
    text_representation:
      extension: .md
      format_name: markdown
  kernelspec:
    display_name: JavaScript (Node.js)
    language: javascript
    name: javascript
  nbhosting:
    title: js intro
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
---

<!-- #region slideshow={"slide_type": ""} -->
# displaying code samples
<!-- #endregion -->

## init()

```javascript
// the code to force a reload
delete require.cache[require.resolve('../js/tools')]
```

```javascript hide_input=false
// this will evaluate all cells, and inject the global css style
tools = require('../js/tools'); tools.init()
```

```javascript
/* customized look for output cells */
20 * 300
```

<!-- #region -->
for convenience (and to reduce the footprint of the recurring init cell), init() does also load the common `style.css` located in `notebooks/_static`

the code for doing so is - could be useful for some simpler js-based course `.style` file -
```js
$$.html(require('fs').readFileSync('../notebooks/_static/style.html', 'utf8'))
```
<!-- #endregion -->

<div class="red-pill">is this a red pill</div>


## sample_from_strings()

the signature is

```
sample_from_strings(
  // code(s) - html/css/js
    {html: 'le html', ...},
  // and options
    { ... }
)
```


by default, the `id` option is computed from `html` - be wary to specify different `id`s if you display the same html code several times


### select which source to display (html, css, js)


```javascript hide_input=false
// clean up and reload
delete require.cache[require.resolve('../js/tools')]
tools = require('../js/tools')
undefined
```

```javascript hide_input=false
// by default, all 3 even if void

tools.sample_from_strings({'html': 'HELLO'}, {id: 'id1'})
```

```javascript hide_input=false
// use the options to remove one of the 3
// btw here the html is off so nothing shows up at all

tools.sample_from_strings({html: 'HELLO'}, {id: 'id2', html_show: false})
```

### start with another view

```javascript hide_input=false
// we can start on something else than html
tools.sample_from_strings(
    {html: 'HELLO', js: 'console.log("Hi")'}, {id: 'id3', css_show: false, start_with: 'js'})
```

# from plain strings

```javascript scrolled=false
// clean up and reload
delete require.cache[require.resolve('../js/tools')]
tools = require('../js/tools')
undefined
```

```javascript hide_input=false
fragment1 = `<html>
  <head>
     <!-- various document-wide declarations -->
  </head>
  <body>
     <!-- the actual document contents -->
     Hello
  </body>
</html>
`

tools.sample_from_strings({html: fragment1})
```

# from files


## without the separate button

```javascript hide_input=false
// clean up and reload
delete require.cache[require.resolve('../js/tools')]
tools = require('../js/tools')
undefined
```

```javascript slideshow={"slide_type": ""} hide_input=false scrolled=true
// in general, no need to worry about sizes, provided that the sources
// take a reasonable space
tools.sample_from_stem(
    "../samples/30-js-intro-01-on-off",
    {start_with: 'css', separate_show: false})
```

## with the separate button

```javascript hide_input=false
// clean up and reload
delete require.cache[require.resolve('../js/tools')]
tools = require('../js/tools')
undefined
```

```javascript slideshow={"slide_type": ""} hide_input=false scrolled=false
// here the autosizing mode would pick a very high window
// because the JS script is very large
// so we keep this under control
tools.sample_from_stem(
    "../samples/30-js-intro-02-svgcircles",
    {separate_label: 'In new window', separate_show: true, start_with: 'js', height: '22em'})
```

## no code, just the result - with separate

```javascript hide_input=false
// clean up and reload
delete require.cache[require.resolve('../js/tools')]
tools = require('../js/tools')
undefined
```

```javascript slideshow={"slide_type": ""} hide_input=false scrolled=true
// the default is separate_show = true

tools.sample_from_stem(
    "../samples/44-spinning-wheel/spinning-wheel",
    {sources_show: false,
//     height: '300px',  // not really needed
     separate_label: 'In new window',
})
```

## no code, just the result - truly basic, no separate


**beware** because we re-use the same stem twice, we need to provide our own id

```javascript hide_input=false
// clean up and reload
delete require.cache[require.resolve('../js/tools')]
tools = require('../js/tools')
undefined
```

```javascript scrolled=false hide_input=false
// here because we use the same code exactly
// we need to provide a unique id
// otherwise we mess with the previous sample

tools.sample_from_stem(
    "../samples/44-spinning-wheel/spinning-wheel",
    {id: 'duplicate', height: '20em', sources_show: false, separate_show: false})
```

## the calculator

```javascript hide_input=false
// clean up and reload
delete require.cache[require.resolve('../js/tools')]
tools = require('../js/tools')
undefined
```

```javascript slideshow={"slide_type": ""} hide_input=false scrolled=false
tools.sample_from_stem(
    "../samples/46-calculator",
    {sources_show: false, separate_show: false, height: '500px'})
```

# escaping

```javascript hide_input=false
// clean up and reload
delete require.cache[require.resolve('../js/tools')]
tools = require('../js/tools')
undefined
```

```javascript hide_input=false
// NOT WORKING

html_with_tags = `<b>NOT WORKING</b>
<p> a paragraph with a &lt;tag&gt; tag inside </p>

there is a need to escape even more than that, see next attempt
`

tools.sample_from_strings(
    {html: html_with_tags},
    {css_show: false, js_show: false}
)
```

```javascript tags=["raises-exception"] hide_input=false
html_with_tags = `<b> YES ! - need to double escape like this:</b>
<p> a paragraph with a &amp;lt;tag&amp;gt; tag inside </p>
`

tools.sample_from_strings(
    {html: html_with_tags},
    {css_show: false, js_show: false, id: 'escaped'}
)
```

***
