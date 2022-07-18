//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.

const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let cont = 0;
let media = 0;

for (let index = 0; index < products.length; index++) { 
    cont = cont + products[index].sellCount;
    media = cont/products.length;
}
console.log("la media de ventas es: " + media);