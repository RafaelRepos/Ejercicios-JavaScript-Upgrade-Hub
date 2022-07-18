// Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];

const movie2010 = movies.find(function(element) {return element.date === 2010});

console.log(movie2010);

//______________________________________________________________________________________________
/*Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const found = numbers.find(function(element) { return element >= 100});

console.log(found);

//________________________________________________________________________________
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(function(element) { return element > 10});

console.log(found);
 expected output: 12    */