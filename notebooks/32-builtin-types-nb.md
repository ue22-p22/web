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
  title: bultin types
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

# JS builtin types

```{code-cell}
tools = require('../js/tools'); tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## nothing but the usual

+++

* set of builtin types similar to Python's offering
* atomic : numbers, strings, booleans
* containers : arrays (lists), maps (dicts) and sets
* objects

+++

<div class="note">

**NOTE** on using **notebooks**  
as mentioned earlier, all variables should be declared with either `let` or `const`  
however, in a notebook this is inconvenient because  
one **cannot declare** the **same variable twice** in the same scope  
and so using `let` would prevent us from re-evaluating the same cell twice  
in order to remind you of the necessity to declare everything  
we will add commented-out `/*let*/` chunks when using a new variable    

</div>

+++ {"slideshow": {"slide_type": "slide"}}

## atomic types

+++ {"slideshow": {"slide_type": ""}}

* `number` is the default type for numeric values  
* `string`
* `boolean` may be `true` or `false`

```{code-cell}
:cell_style: split

// usual operators, here
// ** is power and
// % is modulo
(100 ** 9) % 11
```

```{code-cell}
:cell_style: split

// strings with ' or "

/*let*/ s1 = "abc" + 'def'
/*let*/ s2 = 'ab' + "cdef"
s1 == s2
```

<div class="note">

**beware** that `number` is similar to Python's `float` -- so **with imprecision !**  
google for `bigint` for error-free calculus on integers - like Python's `int`

</div>

+++ {"slideshow": {"slide_type": "slide"}}

### atomic types (continued)

+++ {"slideshow": {"slide_type": ""}}

* `null` is similar to Python's `None`
* `undefined` 
  * as mentioned earlier, JavaScript is very permissive
  * some expressions return `undefined` instead of raising an exception
* `NaN` is "Not a Number"

```{code-cell}
:cell_style: split

// in anticipation
/*let*/ object = { x: 10, y: 20}

// in Python this would
// trigger an exception
// but not is JS
console.log(object.z)
```

```{code-cell}
:cell_style: split

// unlike Python

3 * "abc"
```

+++ {"slideshow": {"slide_type": "slide"}}

### boolean operators

+++

the syntax for boolean operators is here again inherited from C / C++ / Java

```{code-cell}
:cell_style: split

if (true && true) {
    console.log(
        "logical and is &&")
}
```

```{code-cell}
:cell_style: split

if (true || false) {
    console.log(
        "logical or is ||")
}
```

```{code-cell}
if ( ! false) console.log("not is ! ")
```

+++ {"slideshow": {"slide_type": "slide"}}

### strings

+++

* very much alike in Python
* note about **formatting**
  * the equivalent of *f-strings* is <i>&#96;built with `${}` inside backticks&#96;</i>

```{code-cell}
/*let*/ x = 10
/*let*/ s = `format expression like ${x*x} in a string`
s
```

which would correspond in Python to
```python
x = 10

s = f"format expression like {x*x} in a string"
```

+++ {"slideshow": {"slide_type": "slide"}}

### see also

+++ {"slideshow": {"slide_type": ""}}

for a deeper study :

* [on numbers](https://javascript.info/number)
* [on strings](https://javascript.info/string)
* [operators on booleans](https://javascript.info/logical-operators)

+++ {"slideshow": {"slide_type": "slide"}}

## arrays

+++

* similar to Python's `list`s

```{code-cell}
:cell_style: split

// arrays can be heterogeous

/*let*/ array1 = [1, "two"]

// you can also create an
// empty instance explicitly

/*let*/ array2 = new Array()
```

```{code-cell}
:cell_style: split

// insert at the end
array2.push(3)
array2.push("four")
array2.push(5)
console.log(array2)
```

```{code-cell}
:cell_style: split

// and get it back
array2.pop()
```

+++ {"slideshow": {"slide_type": "slide"}}

### common operations on arrays

```{code-cell}
:cell_style: split

// use the concat method

/*let*/ array = array1.concat(array2)
array
```

```{code-cell}
:cell_style: split

// and NOT addition,
// it does NOT work like in Python

array1 + array2
```

```{code-cell}
:cell_style: split

// indexing starts at 0

array[2]
```

```{code-cell}
:cell_style: split

// getting length is more OO than in Python

array.length
```

+++ {"slideshow": {"slide_type": "slide"}}

### searching in array

+++

* like with Python lists, searching in an array is **linear** in its length
* so like in Python if you need fast access, use a *Map* instead  
  (more on this right away)

```{code-cell}
:cell_style: split

// searching; >=0 means it is found

console.log(array.indexOf(3))
```

```{code-cell}
:cell_style: split

// otherwise -1

console.log(array.indexOf("absent"))
```

+++ {"slideshow": {"slide_type": "slide"}}

### iterating over values of an array

+++ {"cell_style": "split"}

* it is possible to iterate through an array like in Python:

```{code-cell}
:cell_style: split

for (let x of array1) {
    console.log(x)
}
```

* make sure to use `for .. of` instead of ~~`for .. in`~~ to iterate over each **value**  

* also notice how to use `let` to define a variable **local** to the `for` loop

<div class=note>

actually there is also a `for .. in` statement (see below), but it is **a little misleading**
    
</div>

+++ {"slideshow": {"slide_type": "slide"}}

### iterating using indices, aka. `enumerate` in python

+++ {"cell_style": "split"}

* using `for .. in` iterates over **indices**

<div class=note>

but see also the warning on next slide
    
</div>

```{code-cell}
:cell_style: split

for (let i in array) {
    console.log(i)
}
```

+++ {"slideshow": {"slide_type": "slide"}}

### beware about `for .. in`

+++

**WARNING** comparing `for .. in` with `enumerate()` is an oversimplification  
with some data structures, `for (x in obj)` will iterate over more than the natural indices !

in fact, the indexes that `for .. in` will iterate over are *strings* !  
which is, well, insane...

```{code-cell}
/*let*/ tab = [10, 20]

for (let i in tab)
    console.log(`value=${i} type=${typeof i}`)
```

a notable example is e.g. when iterating over the result of `element.querySelectorAll()`  
that we'll see in the next chapter, but it's worth outlining this already  
(and see the cheatsheet also)

+++ {"slideshow": {"slide_type": "slide"}}

### more on arrays

+++

* as you expect, there are many more methods available, like  
  `.sort()`, `.reverse()`  
  `.join()`, `.slice()`, `.splice()`,  
  `.shift()`, `.unshift()`

* for more details, see on *javascript.info*
  * [this article on Arrays](https://javascript.info/array)
  * and [this one on related methods](https://javascript.info/array-methods)

+++ {"slideshow": {"slide_type": "slide"}}

### shared references

+++

* **exactly like in Python**, objects can be access from several references  
* so you need to shallow- or deep-copy depending on your needs

```{code-cell}
:cell_style: split

/*let*/ ref1 = [["shared", "data"], "unshared"]
ref1
```

```{code-cell}
:cell_style: split

// slice() works like Python's [:]
// so it's a shallow copy

/*let*/ ref2 = ref1.slice()
ref2
```

```{code-cell}
:cell_style: split

// changing data from ref2

ref2[0][0] = "from 2 - deep"
ref2[1] = "from 2 - shallow"
ref2
```

```{code-cell}
:cell_style: split

// impacts ref1 but not on first level
// because it is a shallow copy
ref1
```

+++ {"slideshow": {"slide_type": "slide"}}

### pythontutor illustration

![](media/references-shared.png)

+++ {"slideshow": {"slide_type": "slide"}}

## args are passed by reference

+++

* like in Python, when passing a composite object  
  (array, map, object, …) to a function

* you pass a **reference** (not a copy),  
  so the function can alter its parameter

* so this means **shared references** and possible side effects

```{code-cell}
:cell_style: center

// on an array
function side_effect(arg) {
    arg[1] *= 1000
}

/*let*/ list = [0, 1, 2]
side_effect(list)
list
```

+++ {"slideshow": {"slide_type": "slide"}}

### arguments passing is loosely checked

```{code-cell}
// just display arguments
function foo(x, y, z) {
    console.log(`x=${x}, y=${y}, z=${z}`)
}
```

```{code-cell}
:cell_style: split

// works fine, of course
foo(1, 2, 3)
```

```{code-cell}
:cell_style: split

// works fine TOO !
foo(1, 2)
```

```{code-cell}
// and this one AS WELL !!
foo(1, 2, 3, 4)
```

+++ {"slideshow": {"slide_type": "slide"}}

### more on arguments

+++

* unlike Python there is no named arguments  ~~`foo(arg0=10)`~~
* nor of arguments with default values
* there is however a way to deal with a **variable number of arguments**

```{code-cell}
// equivalent to Python's
// def bar(x, y, *args):

function bar(x, y, ...arguments) {
    // display what we receive
    console.log(`x=${x}, y=${y}`)
    console.log(`arguments=${arguments}`)
    // the arguments object can be iterated on
    for (let arg of arguments) {
        console.log(arg)
    }
}

// with this call, the 2 extra args are captured
bar(1, 2, 3, 4)
```

```{code-cell}
---
slideshow:
  slide_type: slide
---
// and the other way around
// with the so-called spread operator

function foo(x, y, z) {
    // just to illustrate the mapping
    console.log({x, y, z})
}

L = [1, 2, 3]

// just like foo(*L) in Python
//   (remember we've seen the same
//    construction with objects earlier too)
foo(...L)
```

+++ {"slideshow": {"slide_type": "slide"}}

## hash-based data types

+++

* `Map` and `Set` are JavaScript builtin types
  * that match Python's `dict` and `set` respectively
* they exhibit the same constant-time lookup nice property
* like in Python, **make sure to use them** whenever you need fast searching and indexing

```{code-cell}
:cell_style: split

/*let*/ map = new Map()

map.set('key1', 'value1')
map.set(1000, 'value1000')

map.get(1000)
```

```{code-cell}
:cell_style: split

// iterating over map

for (let k of map.keys()) {
    console.log(`key=${k}, value=${map.get(k)}`)
}
```

+++ {"slideshow": {"slide_type": "slide"}}

**see also**

* read the [section on maps and sets on javascript.info](https://javascript.info/map-set)

+++ {"slideshow": {"slide_type": "slide"}}

## objects

+++

* as the name suggests, objects are the building block for OOP
* they are similar to Python's class instances
  * in that they can hold attributes (Python vocabulary)
  * that in JavaScript are called key-value pairs

```{code-cell}
:cell_style: split

/*let*/ bond = {
    first_name: "James",
    last_name: "Bond",
}

console.log(`my name is ${bond.last_name}`)
```

```{code-cell}
:cell_style: split

// check for a key

'first_name' in bond
```

<div class="note">

the syntax for JavaScript objects, as well as the *key/value* vocabulary,  
make them **look like** Python dictionaries  
**do not get confused though**, JavaScript objects are much more like Python class instances.

</div>

+++ {"slideshow": {"slide_type": "slide"}}

**more examples**

```{code-cell}
:cell_style: split

// how to write an object's keys

// note that the values MUST BE
// valid JS expressions

/*let*/ options = {
    
    // quotes are not needed in the key
    // if it looks like a variable
    margin_left: '10px',
    
    // but it's allowed to put them
    'margin_right': '20px',
    
    // and required if the key is odd
    // (can be any string really)
    // so here with a space inside
    'margin space': true,
}
```

```{code-cell}
:cell_style: split

/*let*/ x = 10

/*let*/ options2 = {
    // and, oddity, just this
    x,
    // replaces x: x
    y: 20,
    z: 30
}
```

+++ {"slideshow": {"slide_type": "slide"}}

**more examples (2)**

```{code-cell}
:cell_style: split

// how to concatenate objects

/*let*/ options2 = {
    margin_top: '30px',
    // that's how objects can be concatenated
    ...options,
    ...options2
}
```

```{code-cell}
:cell_style: split

// how to shallow-copy

/*let*/ copy = {...options}
copy.add = 'more'

copy
```

+++ {"slideshow": {"slide_type": "slide"}}

### accessing object keys & iterations

+++

* you can access an attribute with either of these 2 forms
  * `object.first_name`
  * `object['first_name']`
* the difference being that
  * `object.first_name` takes the key name litterally
  * `object[expr]` **evaluates** `expr`, that should give a key name

```{code-cell}
// so we can use this to iterate over an object's contents
for (let key in bond) {
    console.log(key, ':', bond[key])
}
```

+++ {"slideshow": {"slide_type": "slide"}, "tags": ["level_advanced"]}

#### building objects (advanced)

+++ {"tags": ["level_advanced"], "slideshow": {"slide_type": ""}}

and also, because there is no difference between

```{code-cell}
:cell_style: split
:tags: [level_advanced]

/* const */ with_quotes = {'a': 1}
```

```{code-cell}
:cell_style: split
:tags: [level_advanced]

/* const */ without_quotes = {a: 1}
```

```{code-cell}
:tags: [level_advanced]

// we need a way to express that a field name is actually a variable
/* const */ fieldname = 'a'
/*                 ↓         ↓
/* const */ obj = {[fieldname]: 1}
```

+++ {"slideshow": {"slide_type": "slide"}}

### unpacking objects

there are a lot of fancy ways to deal with objects; this is also known as deconstructing / reconstructing

and these are truly all over the place in modern JavScript code  
so you'd better have heard of these

+++

reminder : we had already seen array-based assignment which is a Python-style idiom

```{code-cell}
// here let is mandatory

{
    let [a1, a2] = [100, 200]
    console.log(`a1 now is ${a1}, a2 is ${a2}`)
}
```

+++ {"slideshow": {"slide_type": "slide"}}

there a similar destructuring assignement on objects

```{code-cell}
function demo() {
    const example_obj = {name: "doe",
                         phone: '0123456',
                         other: 'some stuff'}

    // extract only a subset of the object
    // and assign them into variables
    // with the same names
    const {name, phone} = example_obj

    console.log(`variable name is ${name}, phone is ${phone}`)
}

demo()
```

+++ {"slideshow": {"slide_type": "slide"}}

### typical usage for optional parameters

the parameter-passing mechanism is not as powerful as Python  
but here's a common pattern to define optional parameters with default values

```{code-cell}
---
slideshow:
  slide_type: ''
---
// one mandatory parameter, the other ones
// - say width and height - are optional

function foo(mandatory, options) {
    // the default values
    const default_options = {width: 10, height: 10}
    const {width, height} = {...default_options, ...options}
    console.log(`mandatory=${mandatory}, width=${width}, height=${height}`)
}
```

```{code-cell}
---
cell_style: split
slideshow:
  slide_type: ''
---
foo("something")
```

```{code-cell}
:cell_style: split

foo("else", {height: 800})
```

+++ {"slideshow": {"slide_type": "slide"}}

### `console.log()` and objects

+++ {"slideshow": {"slide_type": ""}}

**TIP** about debugging JS objects :

```{code-cell}
---
cell_style: split
slideshow:
  slide_type: ''
---
vector = {x: 1, y: 2}

// it may be tempting to write
console.log(`vector = ${vector}`)
```

```{code-cell}
---
cell_style: split
slideshow:
  slide_type: ''
---
// but it is a lot better like this
console.log("vector = ", vector)
```

<div class="note">

try it out within the browser's console:  
try to run `console.log(document)` or any other JS object  
and observe that you can navigate the inner structure of the object  
rather than a flat text representation that traditional languages have used us to

</div>

+++ {"slideshow": {"slide_type": "slide"}}

### class instances are objects

```{code-cell}
:cell_style: split

class Person {
    constructor(first, last) {
        this.first_name = first
        this.last_name = last
    }
}

/*let*/ person = new Person("John", "Doe")

typeof(person)
```

```{code-cell}
---
cell_style: split
slideshow:
  slide_type: ''
---
// objects are passed by reference too
// so this function can modify its object argument
function change_object(obj) {
    obj.first_name = 'BOOM'
}

/*let*/ person2 = new Person('John Doe')
change_object(person2)
person2
```
