// En base al siguiente javascript, modifícalo para crea una función para que podamos enviarle como parametro el precio y la función nos calcule y retorne el precio con iva + los gastos de envio (4.95). De esta forma estaremos optimizando el codigo y reutilizandolo.

// const price1 = 8;
// const ivaPrice1 = price1 * 1.21
// const totalPrice1 = ivaPrice1 + 4.95

// const price2 = 20;
// const ivaPrice2 = price2 * 1.21
// const totalPrice2 = ivaPrice2 + 4.95

let iva = 1.21;
let envio = 4.95;
let totalPrice = 0;

const total = valorParametro => {ivaPrice = valorParametro * iva;

return totalPrice = ivaPrice + envio;

};

console.log(total(100));