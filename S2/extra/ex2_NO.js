//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
//los usuarios.

const users = [
    {name: 'Manolo el del bombo', favoritesSounds: {
                                                    waves: {format: 'mp3', volume: 50},
                                                    rain: {format: 'ogg', volume: 60},
                                                    firecamp: {format: 'mp3', volume: 80},
                                                    }
    },
    {name: 'Mortadelo', favoritesSounds: {
                                        waves: {format: 'mp3', volume: 30},
                                        shower: {format: 'ogg', volume: 55},
                                        train: {format: 'mp3', volume: 60},
                                        }
    },
    {name: 'Super Lopez', favoritesSounds: {
                                            shower: {format: 'mp3', volume: 50},
                                            train: {format: 'ogg', volume: 60},
                                            firecamp: {format: 'mp3', volume: 80},
                                            }
    },
    {name: 'El culebra', favoritesSounds: {
                                        waves: {format: 'mp3', volume: 67},
                                        wind: {format: 'ogg', volume: 35},
                                        firecamp: {format: 'mp3', volume: 60},
                                        }
    },
]
let soundsBox = {};
let acumuladorVolumen=0;

for (let user of users) {
    for (let sounds in user.favoritesSounds) {
        for (let volumenDeCadaSonido in sounds.volume) {
        console.log(acumuladorVolumen)
            
        }

    }
}

// for (const cadaSonido in soundsBox.volume) {

// }