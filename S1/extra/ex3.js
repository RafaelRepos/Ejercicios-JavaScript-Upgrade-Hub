//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let pequeñas = [];
let medianas = [];
let grandes = [];

for (let index = 0; index < movies.length; index++){    
   

    if (movies[index].durationInMinutes < 100){
        pequeñas.push(movies[index]);
    } 
        else if (movies[index].durationInMinutes > 100 && movies[index].durationInMinutes < 200) 
        {
        medianas.push(movies[index]);
        } 
    else (movies[index].durationInMinutes > 200); {
        grandes.push(movies[index]);
    }
}
console.log(pequeñas);
console.log(medianas);
console.log(grandes);