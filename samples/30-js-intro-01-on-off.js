function toggle() {
  // from the 'document' global variable
  // locate the element that we want to toggle
  let to_toggle = document.getElementById("area")

  // find its current status
  let current_display = to_toggle.style.display

  // apply the opposite status
  if (current_display == "none") {
    to_toggle.style.display = "block"
  } else {
    to_toggle.style.display = "none"
  }

  // show a message in the JS console
  console.log(`display is now ${to_toggle.style.display}`)
}
