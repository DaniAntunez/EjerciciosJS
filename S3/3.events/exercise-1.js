let button$$ = document.createElement("button");
button$$.setAttribute("id", "btnToclick");

console.log(button$$);
button$$.textContent = 'hola';
document.body.appendChild(button$$);

button$$.addEventListener("click", clicky);
function clicky(event) {
    confirm.length(event);
}

