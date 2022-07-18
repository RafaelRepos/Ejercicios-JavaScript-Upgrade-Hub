// Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div$ = document.querySelector('[data-function="printHere"]');
let ul$ = document.createElement("ul");
div$.appendChild(ul$);

for (let index = 0; index < cars.length; index++) {
    const li$ = document.createElement("li");
    ul$.appendChild(li$);
    li$.textContent = cars[index];
}
console.log(document.body);