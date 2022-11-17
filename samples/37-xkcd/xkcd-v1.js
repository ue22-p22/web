window.addEventListener(
    'load',
    () => {
        // arm button callback
        document.getElementById('submit').addEventListener(
            // what to do when the button is pressed
            'click',
            () => {
                // first version, no networking yet
                // we just write a message in
                // the div#xkcd element
                document.querySelector("div#xkcd")
                    .textContent += 'pressed ! '
            }
        )
    }
)