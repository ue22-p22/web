// working, although improvable...
// if only because it taints the global namespace

function onclick(event) {
  // for inspection in the console
  console.log("CLICK", event)
  // display in dedicated area 'result-text'
  document.getElementById("result-text").textContent
    = `clicked ${event.offsetX}x${event.offsetY}`
}

function onkeydown(event) {
  console.log("KEYDOWN", event)
  document.getElementById("result-text").textContent
    = `typed key ${event.key}`
}

// we don't really need the event here, so...
function onload(/*event*/) {
  console.log("page loaded, arming callbacks")
  // attach callbacks
  document.getElementById("textual-input")
    .addEventListener("keydown", onkeydown)
  document.getElementById("graphic-svg")
    .addEventListener("click", onclick)
}

window.addEventListener("load", onload)
