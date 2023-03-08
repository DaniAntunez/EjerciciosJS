let newDiv$$ = document.createElement("div");
document.body.appendChild(newDiv$$);

for (let i = 0; i < 6; i++) {
    let newP$$ = document.createElement("p");
    newDiv$$.appendChild(newP$$);
    newP$$.textContent = "este es el p que he creado = " + (i+1);
  }

/*
const div = document.createElement('div');

document.body.insertBefore(div, document.body.firstChild);

const p = [];
for (let i = 0; i < 6; i++) {
  p[i] = document.createElement('p');
  div.appendChild(p[i]);  
}
*/
