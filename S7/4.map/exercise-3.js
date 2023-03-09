const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesName = cities.map (city => {
    if (city.isVisited) {
        return city.name + " (Visitado)";
    } else {
        return city.name
    }
});

const Name = cities.map (city => city.isVisited ? city.name + " (Visitado)" : city.name);

console.log(citiesName);
console.log(Name);