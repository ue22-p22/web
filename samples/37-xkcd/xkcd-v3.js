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
                fetch(LATEST_XKCD)
                    // decode json upon reception
                    .then(response => response.json(),
                          // or show error in console
                          // in case of network trouble
                          error => console.log(`FETCH FAILED: ${error}`))
                    // if successful, proceed and get the details
                    // in the json-decoded object
                    .then(data => {
                        message = (`latest issue ${data.day}/`
                                   + `${data.month}/${data.year}<br>`)
                        // and display like before
                        document.querySelector("div#xkcd")
                            .innerHTML += message
                })
        })
    })