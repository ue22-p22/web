// https://github.com/mrmartineau/xkcd-api
const LATEST_XKCD = "https://xkcd.now.sh/?comic=latest"

window.addEventListener(
    'load',
    () => {
        // arm button callback
        document.getElementById('submit').addEventListener(
            // what to do when the button is pressed
            'click',
            () => {
                // second version, just issue one request
                fetch(LATEST_XKCD)
                    .then(response =>
                        // using innerHTML allows us
                        // to add tags like <br>
                        document.querySelector("div#xkcd")
                            .innerHTML += `received - ${response}<br>`)
        })
    })
