const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const button$$ = document.querySelector("button");
//console.log(button$$);

const filtrar = () => {
    //console.log("estoy escuchando");
    const input$$ = document.querySelector("input");
    //console.log(input$$.value);
    const filtrado = streamers.filter
    (streamer => streamer.name.toLowerCase().includes(input$$.value))
    console.log(filtrado);
}

button$$.addEventListener("click", filtrar);
