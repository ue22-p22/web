const LATEST_XKCD = "https://xkcd.now.sh/?comic=latest"

window.addEventListener(
    'load',
    () => {
        document.getElementById('submit').addEventListener(
            'click',
            () => {
                fetch(LATEST_XKCD)
                    .then(response => response.json(),
                          error => console.log(`FETCH FAILED: ${error}`))
                    .then(data => {
                        // open https://xkcd.vercel.app/?comic=latest in
                        // your browser to see the avalaible fields in data
                        img_url = data.img
                        document.querySelector("div#xkcd>img").src = img_url
                })
        })
    })