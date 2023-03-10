$(() => {
    console.log('arming')
    $("div").click(
        () => {
            console.log('clicked')
            let color = $(this).css("background-color")
            $("#result")
                .html(`That div is ${color}`)
                .css("color", color)
        })
    }
)
