// En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.

const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]

const cuentaAs = arrayAnimals => {
    let contador = 0;

    for (const animal of arrayAnimals) {
        for (let index = 0; index < animal.length; index++) {
            if (animal.index === "a") {
                contador += animal.index;

                }
            contador++;      
            }
    }
    return contador;
}
console.log(cuentaAs(animals));


// 