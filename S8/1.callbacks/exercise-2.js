const userAnwsers = [];

const confirmExample = (descripcion) => {
    return confirm(descripcion);
};

const promptExample = (descripcion) => {
    return prompt(descripcion)
}

const father = (descripcion, callback) => {
    userAnwsers.push(callback(descripcion));
};

father("texto confirm", confirmExample);
father("texto prompt", promptExample);
