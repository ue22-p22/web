// a much more usual way to achieve the same
// this time we use 0 global variable

window.addEventListener(
  "load",
  () => {
    console.log("page loaded, arming callbacks")
    // attach callbacks
    document.getElementById("textual-input")
      .addEventListener(
      "keydown", (event) => {
        // for inspection in the console
        console.log("KEYDOWN", event)
        // display in dedicated area 'result-text'
        document.getElementById("result-text").textContent
          = `typed key ${event.key}`
      }
    )
    document.getElementById("graphic-svg")
      .addEventListener(
      "click", (event) => {
        console.log("CLICK", event)
        document.getElementById("result-text").textContent
          = `clicked ${event.offsetX}x${event.offsetY}`
      }
    )
  }
)
