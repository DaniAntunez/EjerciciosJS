const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let nuevaLista = [];
for (const toy of toys) {
    if (!toy.name.includes('gato')) {
        nuevaLista.push(toy);
    }
}
console.log(nuevaLista);
