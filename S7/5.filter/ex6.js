// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.

// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const masterA = streamers.filter(function (playerA) {
   
    return playerA.gameMorePlayed.includes('Legends')  ;
})

console.log(masterA);

const master = streamers.filter(function (player) {
  
    if (player.age > 35)  {
        return player.gameMorePlayed.toUpperCase();  //No me lo pasa a Mayus Profeeee  
    }   
});
console.log(master);
/*
[
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }
]
[ 
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' } 
]
*/
//____________________________________________________________________________________________________________________________________ 
/*Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const master = streamers.filter(function (letraU) {
   
    return letraU.name.includes('u');
})

console.log(master);
//_____________________________________________________________________________________________________________________________________________ 
/*Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends' y tengan menos de 30 años.

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const master = streamers.filter(function (player) {
  
    return player.gameMorePlayed === 'League of Legends'  &&  player.age < 30;
});

console.log(master);

//_______________________________________________________________________________________________________________________________________________ 
/*Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends'.

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const master = streamers.filter(function (player) {
   
    return player.gameMorePlayed === 'League of Legends';
});

console.log(master);


//_________________________________________________________________________________________________________
/* Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages.filter(function(mayor) {

return mayor % 2 == 0 ;

});
console.log(pares);
*/
//_______________________________________________________________________________________________________________
/*Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayor = ages.filter(function(pilot) {

    return pilot > 18 ;
});
console.log(mayor);
*/
//_________________________________________________________________________________________________
/*Digamos que queremos dos conjuntos ahora: uno para los pilotos rebeldes, el otro para los imperiales*/
// var pilots = [
//     { id: 2, name: "Wedge Antilles", faction: "Rebels", },
//     { id: 8, name: "Ciena Ree", faction: "Empire", },
//     { id: 40, name: "Iden Versio", faction: "Empire", },
//     { id: 66, name: "Thane Kyrell", faction: "Rebels", }];

//     var rebels = pilots.filter(function (pilot) {
//         return pilot.faction === "Rebels";
//     });

//     //[{ id: 2, name: "Wedge Antilles", faction: "Rebels", },
//     //{ id: 66, name: "Thane Kyrell", faction: "Rebels", }]

//     var empire = pilots.filter(function (pilot) {
//     return pilot.faction === "Empire";
// });

// console.log(empire);
// console.log(rebels);