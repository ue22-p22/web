WIDTH = 50
STEP = 10

function grow() {
    let growing = document.getElementById("growing")
    growing.style.width = `${WIDTH}px`
    WIDTH += STEP
}

// this will be called on loading the <body> tag
// (see the html)
function grow_forever() {
    // call it once right away
    grow()
    // get it called every 1s after that
    setInterval(grow, 1000)
}