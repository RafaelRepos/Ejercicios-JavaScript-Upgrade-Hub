
let urlBase = 'http://localhost:3000/orders';
let urlProductos = `http://localhost:3000/products/`;
let divListado = document.querySelector('div')
let detailPedido = {};

fetch(urlBase)//__________FETCH
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (pedidos) {
    verOrdenes(pedidos);
    //detalleDeOrdenes(pedidos)
});//____________________________________________________
function verOrdenes(pedidos) {
    for (let index = 0; index < pedidos.length; index++) {
        const element = pedidos[index];
        let divProd = document.createElement('div')
        divProd.innerHTML = `<h3>Fecha: ${element.date}</h3>`;
        divListado.appendChild(divProd);
        let arrayDetail = element.products;
        console.log(arrayDetail)
    }
}//_________________________________________________


// fetch(urlProductos)//__________FETCH
// .then(function (respuesta) {
//     return respuesta.json();
// })
// .then(function (pedidos) {
//     // verOrdenes(pedidos);
//     // detalleDeOrdenes(pedidos)
// });