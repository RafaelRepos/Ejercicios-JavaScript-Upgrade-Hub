// Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
// resultante.

//Sugerencia de array:

let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
let cant = 0;

for (let index = 0; index < players.length; index++) {
    cant++;
    
} 
console.log("este es el equipo:");
console.log(players);
console.log("para seleccionar los jugadores ingrese dos numeros entre 1 y "+cant+" y se invertiran los nombres");

function swap(arrayPl, ind1, ind2) {
    
    ind1 = ind2;
    ind2 = ind1;
    // arrayPl.splice(ind1,1,ind2);
    // arrayPl.splice(ind2,1,ind2)
    console.log(arrayPl);     
}














