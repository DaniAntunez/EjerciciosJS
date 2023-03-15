const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const key in alien) {
    console.log(alien[key]);
}

//solo funciona forin para un objeto, al no ser array los demás for no funcionan

