let apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

//console.log(apps.length);


let ul$$ = document.createElement("ul");
document.body.appendChild(ul$$);

for (let i = 0; i < apps.length; i++) {
    let li$$ = document.createElement("li");
    ul$$.appendChild(li$$);
    li$$.textContent = apps[i];
    console.log(li$$);
}
