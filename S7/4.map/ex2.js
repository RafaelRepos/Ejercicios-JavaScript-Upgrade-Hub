// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.


const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];



const usersName =  users.map(function (user) {
    
    if (user.name[0] === 'A') {
        user.name = 'Anacleto'
    }    
     return user.id
});   

console.log(usersName);


//_______________________________________________________________________________________________________________________________________
/*  EJERCICIO 1
Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const usersName = users.map(function (names) {return names.name});

console.log(usersName);     [ 'Abel', 'Julia', 'Pedro', 'Amanda' ]*/
//______________________________________________________________________________________________________________________________________
/* EJERCICIO DEL NOTION

Lo que tenemos 

var officers = [  
    { id: 20, name: 'Captain Piett' },  
    { id: 24, name: 'General Veers' },  
    { id: 56, name: 'Admiral Ozzel' },  
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  
Lo que necesitamos [20, 24, 56, 88]  

const officersIds = officers.map(function(officer) {return officer.id});

// [20, 24, 56, 88]
*/