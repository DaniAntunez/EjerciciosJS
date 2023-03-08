let newDiv$$ = document.createElement("div");
let newP$$ = document.createElement("p");

document.body.appendChild(newDiv$$);
//documen.body.insertBefore(newDiv$$, document.body,firstchild); ==> PARA COLOCARNO
newDiv$$.appendChild(newP$$);

newP$$.textContent = "este es el p que he creado";

//newDiv$$.insertHTML = `<p></p>` ==> MALA PRACTICA