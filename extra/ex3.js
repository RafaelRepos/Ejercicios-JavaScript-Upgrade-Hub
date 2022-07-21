// En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.

const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]
let contAs = 0;

for (const animal of animals) {
    for (let letra of animal) {
        if ( letra.toLowerCase() === 'a') {
            contAs ++
        }
    }
}

console.log(contAs);