/* la calculette de 
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/
*/

function Calculator() {

    let calculator = document.querySelector('.calculator');
    let keys = calculator.querySelector('.calculator__keys');

    // the state of our computation
    // left-hand-side value
    let operand = 0;
    // operation to be performed by '='
    let operator = undefined;
    // right after '=' has been pressed
    // clicking a digit also means clear up first
    let needs_clear = true;

    keys.addEventListener(
        'click', 
        function(event) {
            // locating the display DOM node
            let display = document.querySelector(".calculator__display");
            // and the string inside
            let displayed = display.textContent;
            // react only on buttons
            if (event.target.matches('button')) {
                // the DOM node that was clicked
                let key = event.target;
                // if you wonder why the author has chosen to name
                // its attribute 'data-action', see 
                // https://www.w3schools.com/tags/att_global_data.asp 
                // and 
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
                let action = key.dataset.action;
                if (! action) {
                    console.log("number key");
                    // this will be e.g. string '7'
                    let digit = key.textContent;
                    // append that text to the display,
                    // except if it is '0', or if we just 
                    // ran '='
                    if (needs_clear || displayed == "0") { 
                        display.textContent = digit;
                        needs_clear = false;
                    } else {
                        display.textContent += digit;
                    }
                } else if (action == 'decimal') {
                    // already a dot ? ignore it
                    if (displayed.indexOf('.') >= 0) {
                        console.log('already a dot');
                    } else if (needs_clear) {
                        display.textContent = "0.";
                    } else {
                        display.textContent += '.';
                    }
                } else if (action == 'clear') {
                    operand = 0;
                    operator = undefined;
                    display.textContent = '0';
                } else if (action == 'calculate') {
                    // makes no sense if no current operation
                    if (! operator) {
                        console.log("do not know what to compute");
                    }
                    let result = operator(parseFloat(operand), 
                                          parseFloat(displayed));
                    display.textContent = `${result.toPrecision(6)}`;
                    operator = undefined;
                    needs_clear = true;
                // operation buttons just reset display, 
                // and record operator to function 
                // to call later on when doing '='
                } else if (action == 'divide') {
                    operand = displayed;
                    operator = (x, y) => (x / y);
                    display.textContent = '0';
                } else if (action == 'multiply') {
                    operand = displayed;
                    operator = (x, y) => (x * y);
                    display.textContent = '0';
                } else if (action == 'substract') {
                    operand = displayed;
                    operator = (x, y) => (x - y);
                    display.textContent = '0';
                } else if (action == 'add') {
                    operand = displayed;
                    operator = (x, y) => (x + y);
                    display.textContent = '0';
                }
            }
        })
}

// note that here again we call Calculator only once
// so we could have inlined it right below instead
window.addEventListener("load", Calculator);
