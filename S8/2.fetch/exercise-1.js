//fetch comprimido
/*fetch("https://api.agify.io?name=michael")
    .then((respuesta) => {respuesta.json()})
    .then((data) => console.log(data));
*/
//fetch detallado
const get = async () => {
    try {
        const respuesta = await fetch("https://api.agify.io?name=michael");
        const res = await respuesta.json();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
get();
