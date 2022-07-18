// Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().
// El resultado sería 42.

const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

var aprobados = exams.reduce(function (accumulator,alumn) { 
    
    if (alumn.score >= 5) {
        
        return accumulator + alumn.score;
    } else {
        return accumulator;
    }

}, 0);

console.log(aprobados);
// var mostExpPilot = pilots.reduce(function (oldest, pilot) { 
// return (oldest.years || 0) > pilot.years ? oldest : pilot;}, {});

//________________________________________________________________________________________________________________________
// Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().
/*
const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

var totalNotas = exams.reduce(function (accumulator,alumn) { 
    return accumulator + alumn.score;}, 0);

console.log(totalNotas);
*/
//____________________________________________________________________________________
/*
var pilots = [ 
	{ id: 10, name: "Poe Dameron", years: 14, }, 
	{ id: 2, name: "Temmin 'Snap' Wexley", years: 30, }, 
	{ id: 41, name: "Tallissan Lintra", years: 16, }, 
	{ id: 99, name: "Ello Asty", years: 22, }
];

var totalYears = pilots.reduce(function (accumulator, pilot) { 
    return accumulator + pilot.years;}, 0);
*/