// first step
// define a function that changes the background color
function set_body_background(color) {
    document.querySelector("body").style.backgroundColor = color
}

// to be sure it works as expected, we must make sure
// the function gets called AFTER the page is loaded

// but for that I need a function with no argument
function to_do_on_page_load() {
    set_body_background("darkgrey")    
}

// and now I can bind this callback to the 'load' event
window.addEventListener("load", to_do_on_page_load)
