// this version makes everything very explicit
// however it comes with a big drawback
// it taints the global namespace with 4 variables
// set_body_background
// index
// colors
// run
// which may conflict with any other module

function set_body_background(color) {
    document.querySelector("body")
       .style.backgroundColor = color
}

index = 0;
colors = [ "#f6e5f5", "#f6e7e6" ]

function run() {
    index = (index + 1) % 2
    set_body_background(colors[index])
    setTimeout(run, 1000)
}

window.addEventListener("load", run)