// Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const found = numbers.find(function(element) { return element >= 100});

console.log(found);

//________________________________________________________________________________
/*const array1 = [5, 12, 8, 130, 44];

const found = array1.find(function(element) { return element > 10});

console.log(found);
 expected output: 12*/