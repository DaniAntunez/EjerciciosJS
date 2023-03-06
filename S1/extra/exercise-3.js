const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

//console.log(movies.length);
//console.log(movies[1].durationInMinutes);
let pequeñas = [];
let medianas = [];
let grandes = [];
//pequeñas.push(movies[1]);
//console.log(pequeñas);
//console.log(pequeña);
for (let i = 0; i < movies.length; i++) {
    if (movies[i].durationInMinutes < 100) {
        pequeñas.push(movies[i]);
    } else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200) {
        medianas.push(movies[i]);
    } else if (movies[i].durationInMinutes > 200) {
        grandes.push(movies[i]);
    } 
}

console.log("Películas pequeñas: ", pequeñas);
console.log("Películas medianas: ", medianas);
console.log("Películas grandes: ", grandes);

/*
let peliculaPequeña = [ ];
let peliculaMediana = [ ];
let peliculaGrande = [ ];
for (let duracion of movies) {
   if (duracion.durationInMinutes < 100){
       peliculaPequeña.push(duracion);
    } else if(duracion.durationInMinutes <= 100  || duracion.durationInMinutes< 200){
        peliculaMediana.push(duracion);
    }else{
        peliculaGrande.push(duracion)
    }
}
*/