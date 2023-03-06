const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

 //console.log(fruta.isVegan);
 //console.log(fruta);

let contador = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  const food = foodSchedule[i];
  if (!food.isVegan) {
    food.name = fruits[contador];
    food.isVegan = true;
    contador++;
  }
}

console.log(foodSchedule);
