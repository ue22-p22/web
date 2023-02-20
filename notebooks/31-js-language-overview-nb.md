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
  title: 30,000 ft overview
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

+++ {"slideshow": {"slide_type": "slide"}}

Licence CC BY-NC-ND, Thierry Parmentelat

+++ {"slideshow": {"slide_type": ""}}

# 30,000 ft overview of JS

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## preamble

+++

* from now on, we will very briefly cover **some** features of the language
* for a more thorough study, refer to [this excellent tutorial on javascript.info](https://javascript.info/)
* as we go, we will point at a selection of chapters in that tuto
* students interested should probably read it through

+++ {"slideshow": {"slide_type": "slide"}}

## various runtimes

+++

* FYI, JavaScript is not restricted to being used in a browser
* among others, the [`node.js` runtime](https://nodejs.org/en/about/)
  * e.g. to power a backend web server
  * or simply from a regular terminal


```bash
$ node
Welcome to Node.js v12.5.0.
Type ".help" for more information.
> console.log("hello world")
hello world
> process.exit()
```

+++ {"slideshow": {"slide_type": "slide"}}

## `console.log()` function

+++

* a function to show output
* very similar to Python's `print()` function
  * of course from a browser it ends up in the devel tools area
  * but under `node` it will just print
* accepts any number of arguments

```{code-cell}
console.log(1, "two", [3, "four"])
```

+++ {"slideshow": {"slide_type": "slide"}}

## syntax

+++

* the syntax is similar to C, C++ and Java
* unlike Python, indentation does not matter
* `;` is commonly used at the end of each statement  
  (**but not mandatory**)

* 2 styles of comments

```{code-cell}
:tags: [raises-exception]

// this is a comment, no need to close
// but must be repeated on each line

// you may end all statements with a ;
a = 10

// but that's not mandatory
b = a * a

/* this is another comment
   everything including newlines
   is ignored until the matching
*/
```

<div class="note">

as we will see below, real code should **always** declare variables,  
so this would read `let a = 10` instead, but let us keep it simple for now

</span>

+++ {"slideshow": {"slide_type": "slide"}}

### tests and loops

+++

* `if` and `while` statements are similar to C
* `for` are a little more awkward - we'll come back to that

```{code-cell}
:cell_style: split

// conditional if
if (a == 10) {
    console.log("YES 10")
} else if (a == 12) {
    //
} else {
    //
}
```

```{code-cell}
:cell_style: split

while (a >= 5) {
    console.log(a)
    a -= 3
}
```

+++ {"slideshow": {"slide_type": "slide"}}

###   switch

+++ {"cell_style": "split"}

the switch statement in JavaScript
is similar to the ones in C++ and Java  
it will branch your control flow into a
location that depends on the subject's value

**do not forget** the `break` statements !

```{code-cell}
:cell_style: split

switch (a) {
    case 0:
        console.log("ZERO")
        break
    case 10:
        console.log("TEN")
        break
    case 20:
        console.log("TWENTY")
        break
    default:
        console.log("NONE")
}
```

<div class="note">

if the switch statement is new to you, please refer to this [full article on javascript.info](https://javascript.info/switch)

</div>

+++ {"slideshow": {"slide_type": "slide"}}

### C-style `for` loop

+++

* C- or Java-like iteration loops are supported
* although seldom needed
* more on that about container types (arrays, …)

```{code-cell}
for (let i=0; i<3; i++) {
    console.log(i)
}
```

+++ {"slideshow": {"slide_type": "slide"}}

## variables ([link in tuto](https://javascript.info/variables))

+++ {"slideshow": {"slide_type": ""}}

* as usual, variables are **names** that refer to **data in memory**
* like in Python, any such data is **typed** (although the name is not)
* core language has some **basic types**
* variables should be declared using one of the keywords

```{code-cell}
:cell_style: split

let n = 10;
console.log(typeof(n))
n += 20
```

```{code-cell}
:cell_style: split

const s = "hello world"
typeof(s)
// we could not do this
// s += ' john'
```

<div class="note">

use `const` instead of `let` when declaring a constant variable

</div>

+++ {"slideshow": {"slide_type": "slide"}}

### Python-style unpacking assignment

```{code-cell}
// there is a form of parallel assignment
// similar to what Python offers

let [py, thon] = [10, 20]

py + thon
```

+++ {"slideshow": {"slide_type": "slide"}}

## variable scope

+++

* like in all other languages
  * need to limit the scope of a variable
  * so that variable `x` in 2 distinct functions do not clash
* use **lexical nested scope**
  * a variable is visible only within its code block
* a very common strategy, like in Python, C++, Java, …

+++ {"slideshow": {"slide_type": "slide"}}

### scope illustrated

```{code-cell}
---
slideshow:
  slide_type: ''
tags: [raises-exception]
---
// this is a global variable
let a = "global"

function foo() {
    // this local declaration
    // hides the global variable
    let a = "local"
    console.log("in foo():", a)
}

console.log("in global context:", a)
foo()
```

+++ {"slideshow": {"slide_type": "slide"}}

### declaring variables with `let`

+++

* (a lot of) legacy code uses the ~~`var`~~ construct  
  to declare variables - but **this is dangerous !!**

* you should **always** declare your variables  
  with **`let`** or **`const`**

+++

<div class="note">

when declaring a variable with `let`,
it cannot be declared a second time within the same block;  
in the context of notebooks, a drawback of this is
that you cannot run a cell twice if
it uses a toplevel `let`

</div>

+++ {"slideshow": {"slide_type": "slide"}}

### blocks are delimited by `{}`

+++

* the elementary unit for scope is the **block**
* which is materialized by `{}`

```{code-cell}
:tags: [raises-exception]

let variable = "outermost"
{
    letvariabley = "intermediate"
    {
        let variable = "innermost"
        console.log("level 2", variable)
    }
    console.log("level 1", variable)
}
console.log("level 0", variable)
```

<div class="note">

this is like in C/C++, and unlike Python where a variable's scope is the whole function

</div>

+++ {"slideshow": {"slide_type": "slide"}}

## globals

+++

* context (browser components mostly) is exposed to programer
* through a set of **global variables**, e.g.
  * `document` to access the DOM
  * `window`, remember `setTimeout()`
  * `console` like in `console.log()`
  * `this` - a tricky one
* may depend on the runtime

+++

<div class="note">

surprising as it may be, the notebook's JavaScript engine is an instance of `node.js`,  
and so is not **browser-related**, so we could not inspect 
the `document` or `window` variables here  
of course you can do so from the browser's console though

</div>

+++ {"slideshow": {"slide_type": "slide"}}

## formatting

```{code-cell}
let [x, y] = [100, 200]
```

```{code-cell}
// the `` is very similar to Python's f-strings
// except that you use ${expression} 
// note the extra $ as compared to Python

console.log(`x = ${x} and x+y = ${x+y}`)
```

+++ {"slideshow": {"slide_type": "slide"}}

## functions

+++

* like in other languages
* we have seen examples already

```{code-cell}
// the old way

function foo(x, y) {
    console.log(`${x} + ${y} = ${x+y}`)
}

foo(10, 20)
```

```{code-cell}
// a more fashionable way

const bar = (x, y) => console.log(`${x} + ${y} = ${x+y}`)

// can use { } if the code is more than one-line
const bar2 = (x, y) => { console.log(`${x} + ${y} = ${x+y}`) }

bar(10, 20)
```

+++ {"slideshow": {"slide_type": "slide"}}

### duck typing

+++

like in Python:

* **objects** are typed
* but **variables** are not bound to a given type

```{code-cell}
function foo(x, y) {
    console.log('x is a ', typeof(x))
    console.log(`${x} + ${y} = ${x+y}`)
}

// like in Python, function arguments
// are not statically typed
foo('abc', 'def')
```

+++ {"slideshow": {"slide_type": "slide"}}

### loose binding

+++

* JavaScript is **very permissive**
* for example, number of args is not checked

```{code-cell}
function fuzzy(x, y, z) {
    console.log(`x = ${x}  y = ${y} z = ${z}`)
}
fuzzy(10)
fuzzy(10, 20)
fuzzy("abc", "def", "ghi")
```

+++ {"slideshow": {"slide_type": "slide"}}

### `this`

+++

* a very specific feature of JavaScript
* is that the implicit variable `this` is always defined
* the content of `this` depends on the context
* useful and relevant **only** for
  * methods (more on this later)
  * and some callbacks

```{code-cell}
function show_this() {
    console.log(typeof(this))
}

show_this()
```

+++ {"slideshow": {"slide_type": "slide"}}

## exceptions

+++

* JavaScript supports exceptions, just like Python
* same bubbling mechanism
  * that scans the call stack
  * until a `catch` statement is found

```{code-cell}
try {
    // referring to an unknown variable
    unknown
} catch (err) {
    console.log(`OOPS name=${err.name}, message=${err.message}`)
}
```

+++ {"slideshow": {"slide_type": "slide"}}

## classes

+++

as of ES2015, the language has a proper `class` statement

_Note:_ older JavaScript does not have class and use other ways to create pseudo-classes

```{code-cell}
class Vector {
    // just like Python's __init__
    // NO NEED to pass 'self' in JavaScript
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    // same for a regular method
    display() {
        console.log(`[Vector x=${this.x} y=${this.y}]`)
    }
}

let vector = new Vector(10, 20)
vector.display()
```

<div class="note">

here again, running this cell twice will cause an error; this is because  
like with `let`, the language won't let you define  
the same `Vector` class twice in the same scope

</div>

+++ {"slideshow": {"slide_type": "slide"}}

### notes on classes

+++

**NOTICE** the following from that first class example :

* `constructor` is very much alike `__init__` in Python
* the **implicit** `this` variable refers to the current object
* it is very much alike the traditional `self` argument in Python
* except that it is **not mentioned** as a method parameter
* objects get created with `new Vector()` - Java and C++ style
  * not just plain Python-style `Vector()`

+++ {"slideshow": {"slide_type": "slide"}, "tags": ["level_intermediate"]}

### properties

+++ {"tags": ["level_intermediate"]}

* modern JavaScript has a native notion of properties
* i.e. expose an apparently mundane access  
  to an instance attribute

* through **getter** and **setter** functions
* that intercept read/write attempts  
  on the attribute

+++ {"slideshow": {"slide_type": "slide"}, "tags": ["level_intermediate"]}

### property example

```{code-cell}
:cell_style: split
:tags: [level_intermediate]

class Temperature {
    constructor(temperature) {
        this.kelvin = temperature
        // "set kelvin(temperature)" will be called
    }

    get kelvin() {
        return this._kelvin
    }

    set kelvin(temperature) {
        if (temperature < 0) {
            console.log("negative - refusing to set")
            return
        }
        this._kelvin = temperature

        // we must use the hidden variable this._kelvin
        // that will store the value entered
        // and will be returned when we ask for this.kelvin
        // thanks to the get kevin() function

        // if we had written this.kelvin = temp_value
        // that would call set kelvin(temp_value) again
        // and we would have an infinite loop

    }
}
```

```{code-cell}
:cell_style: split
:tags: [level_intermediate]

let temp = new Temperature(10)
```

```{code-cell}
:cell_style: split
:tags: [level_intermediate]

temp.kelvin = -10
```

```{code-cell}
:cell_style: split
:tags: [level_intermediate]

temp
```

+++ {"slideshow": {"slide_type": "slide"}, "tags": ["level_intermediate"]}

### old-school classes

+++ {"tags": ["level_intermediate"]}

* you may come across older-school code that uses other techniques
* typically involving a `prototype` thingy
* here again for new code you should stick to the new idiom
