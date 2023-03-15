const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

let ul$$ = document.createElement('ul');
let printh$$ = document.querySelector('[data-function="printHere"]');

for (let i=0;i<cars.length;i++){
    let li$$ = document.createElement('li');
    li$$.textContent = cars[i];
    printh$$.appendChild(li$$);
}