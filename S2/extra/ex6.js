// Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
// resultante.

//Sugerencia de array:

let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño','Lenguadosky','Salad','Empape','Rafita'];
console.log(players);

function swap(arrayPl, ind1, ind2) {
    let n1 = arrayPl[ind1]//solo en esto me inspiré de
    let n2 = arrayPl[ind2]//la solución profe, lo siento! ;)
    arrayPl.splice(ind1,1,n2);
    arrayPl.splice(ind2,1,n1)

    return console.log(arrayPl);    
}
swap(players, (Math.floor(Math.random() * players.length) + 1), (Math.floor(Math.random() * players.length) + 1));//Los dos indices se generarán aleatoriamente

// IMPORTANTE: No sé porqué en ocasiones en el array resultante sale un elemento adicional como 'undefined', EN OCASIONES. Cuando no, funciona DPM.




