// Al siguiente javascript no funciona como deberia...podrias arreglarlo?

// Debería mostrar por consola "Juan Pui".

function a(){
    const name = "Juan Pui";
    b(name);
}

function b(name){  //no estaba recibiendo el argumentos
    console.log(name)
}

a();