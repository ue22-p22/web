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

// no change here, but using an arrow (anonymous) function
// we've just moved about the code of `to_do_on_page_load`

// we can now associate that callback to the 'load' event
window.addEventListener("load", () => {
    // useful to call it right away
    toggle_body_background()
    // and then every second
    setInterval(toggle_body_background, 1000)
})
