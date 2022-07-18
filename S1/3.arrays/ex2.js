//Cambia el primer elemento de cars a "Ford"

const cars = ['Saab', 'Volvo', 'BMW'];

//cars[0] = 'Ford';

cars.shift();
cars.unshift("ford");

console.log(cars);