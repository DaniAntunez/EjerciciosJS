let input$$ = document.querySelector('input');

function eject (event) {
    console.log(event.target.value);
}

input$$.addEventListener ('focus', eject);
