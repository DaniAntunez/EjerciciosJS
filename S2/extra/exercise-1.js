const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let gender = [];
for (const pelis of movies) {
    for (const categoria of pelis.categories) {
        if (!gender.includes(categoria)) {
            gender.push(categoria);
        }
    }
}
console.log(gender);
