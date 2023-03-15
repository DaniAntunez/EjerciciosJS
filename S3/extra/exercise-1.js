const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul$$ = document.createElement("ul");
document.body.appendChild(ul$$);

for (let i = 0; i < countries.length; i++) {
  const li$$ = document.createElement("li");
  ul$$.appendChild(li$$);
  li$$.textContent = countries[i];
}
