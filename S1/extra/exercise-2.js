const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let contador = 0;

for (let index = 0; index < foodSchedule.length; index++) {
  const food = foodSchedule[index];
  //console.log(fruta.isVegan);
  //if (fruta.isVegan == false) {
  //    console.log(fruta);
  //}
  if (!food.isVegan) {
    //console.log(fruta);
    food.name = fruits[contador];
    food.isVegan = true;
    contador++;
  }
}

console.log(foodSchedule);
