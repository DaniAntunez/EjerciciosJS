const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  let ul$$ = document.createElement("ul");
  
  document.body.appendChild(ul$$);
  
  for (let i = 0; i < countries.length; i++) {
  
    let li$$ = document.createElement ('li');
    ul$$.appendChild(li$$);
    let div$$ = document.createElement ('div');
    li$$.appendChild (div$$);
    let h4$$ = document.createElement("h4");
    div$$.appendChild(h4$$);
    h4$$.textContent = countries[i].title;
    let img$$ = document.createElement("img");
    div$$.appendChild(img$$);
    img$$.setAttribute("src", countries[i].imgUrl);
    const delete$$ = document.createElement("button");
    buttin$$.name = "para eliminar";
  delete$$.textContent = 'Eliminar Ultimo'
  div$$.appendChild(delete$$);
  }
  
  
  function deletis (event){
    console.log("Hola soy un evento", event.target);
  
  }
  
  delete$$.addEventListener('click', function (event) {
    event.target.parentNode.parentNode.remove();
  });