// now we want to change the background color
// so we write a function that alternates between 2 colors

function toggle_body_background() {
    let old_color = document.querySelector("body").style.backgroundColor
    console.log(old_color)
    let new_color
    if (old_color == "darkgrey") {
        new_color = "bisque"
    } else {
        new_color = "darkgrey"
    }
    // all that is left is to actually change the DOM
    document.querySelector("body").style.backgroundColor = new_color
}

// if I do this, it is not enough because the color-changing
// function will get called only once, of course
function to_do_on_page_load() {
    toggle_body_background()
}

// and now I can bind this callback to the 'load' event
window.addEventListener("load", to_do_on_page_load)
