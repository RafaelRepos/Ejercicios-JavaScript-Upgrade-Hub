// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul$ = document.createElement("ul");
document.body.appendChild(ul$);

for (let index = 0; index < countries.length; index++) {
    const li$ = document.createElement("li");
    ul$.appendChild(li$);
    li$.textContent = countries[index];
}