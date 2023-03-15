const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

const getDatos = async () => {
    try {
        // console.log(nomre);
        const respuesta = await fetch(`https://api.nationalize.io?name=${input$$.value}`);
        const res = await respuesta.json();
        console.log(res);
    } catch (error) {
        console.log(error);        
    }
};

button$$.addEventListener("click",getDatos);

