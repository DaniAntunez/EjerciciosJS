const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const newName = users.map ((usuario) => {
    if (usuario.name[0] === "A") {
        return (usuario.name = "Anacleto");
    } else {
        return usuario.name;
    }
});

const otroName = users.map ((usuario) => {
    return usuario.name[0] === "A" ? (usuario.name = "Anacleto") : usuario.name;
});

const masName = users.map ((usuario) => 
    usuario.name.startsWith("A") ? (name = "Anacleto") : usuario.name );

console.log(newName);
console.log(otroName);
console.log(masName);

