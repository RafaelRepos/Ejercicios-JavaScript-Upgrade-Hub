/*Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.*/

const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

// for (const newToys of toys) {  NO PUDE CON FOROFOFOFO
// }
let withoutCat = [];

for (let index = 0; index < toys.length; index++) {
    
    
    if (toys[index].name.includes('gato') !== true) {
        withoutCat.push(toys[index]);
    }
}
console.log(withoutCat);