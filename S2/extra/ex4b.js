// Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
// `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
// llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
// javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
let arrayTexto = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let array2 = ['me','estoy','haciendo','pro','en','esto','de','programar','siuuuuuuu'];

function findArrayIndex(array , text){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.includes(text) == 1) {
            return index
            }
        }
    }
function removeItem(array , text) {    
    let posIndex = findArrayIndex(array , text)
    array.splice(posIndex, 1);
    return array}

// let arrayModificado = removeItem(arrayTexto, 'Mosquito')
// let arrayModificado2 = removeItem(arrayTexto, 'Ajolote')
// let arrayModificado3 = removeItem(array2, 'pro')
let arrayModificado4 = removeItem(array2, 'programar');

console.log(arrayModificado4);