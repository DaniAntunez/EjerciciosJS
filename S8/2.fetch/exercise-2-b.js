const input$$ = document.querySelector('input')
const boton$$ = document.querySelector('button')



const getDatos = async () => {
  try {
    const respuesta = await fetch(`https://api.nationalize.io?name=${input$$.value}`);
    const res = await respuesta.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
input$$.addEventListener('click',getDatos)