// Crea una función llamada splitName que divida un nombre completo en nombre y apellido. Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.

// De tal modo que si tenemos el texto "Abel Cabeza" obtendremos dos variables...una con el valor "Abel" y otra con el valor "Cabeza".

// En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf()

let name ="";
let lastName ="";

function splitName(nombreCompleto) {
    let space = nombreCompleto.indexOf(" ");
    
    name = nombreCompleto.substring(0,space);
    lastName = nombreCompleto.substring(space,nombreCompleto.lenght);
    
    console.log("nombre: "+name);
    console.log("apellido: "+lastName);
}

splitName("rafael villa");