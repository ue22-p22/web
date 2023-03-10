const XKCD = "https://xkcd.now.sh/?comic="

window.addEventListener(
    'load',
    () => {
        // keep track
        let num = "latest"
        document.getElementById('submit').addEventListener(
            'click',
            () => {
                // decrement if that's a number
                if (num != "latest")
                    num = num - 1
                fetch(XKCD + num)
                    .then(response => response.json(),
                          error => console.log(`FETCH FAILED: ${error}`))
                    .then(data => {
                        img_url = data.img
                        document.querySelector("div#xkcd>img").src = img_url
                        // use a number as soon as we have one
                        if (num == "latest") {
                            num = data.num
                            // and change button label
                            document.getElementById("submit")
                                .textContent = "Previous"
                        }
                        // reflect on the page
                        document.getElementById("num").textContent =
                            `this is # ${num}`
                })
        })
    })