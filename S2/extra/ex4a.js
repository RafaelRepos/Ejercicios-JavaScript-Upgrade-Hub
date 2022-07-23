// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:


let arrayTexto = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let array2 = ['me','estoy','haciendo','pro','en','esto','de','programar','siuuuuuuu']

function findArrayIndex(array , text){

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.includes(text) == 1) {
        return console.log(index)
        }
    }
}
findArrayIndex(array2,'siuuuuuuu');
findArrayIndex(arrayTexto,'Salamandra');

