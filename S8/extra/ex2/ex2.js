// Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

// Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...

// Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` para su .title, .date y .description respectivamente.

// Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...

fetch('http://localhost:3000/diary')
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (notas) {
    ordenarFechas(notas);
    generarContenido(notas);
});

let ordenarFechas = (notas) => {
    return notas.sort((a, b) => new Date(a.date) - new Date(b.date));
    };

function generarContenido(notas) {

    let divGeneral$ = document.createElement('div');
    document.body.appendChild(divGeneral$);
    divGeneral$.classList.add("fn-div-general");
    

    for (let index = 0; index < notas.length; index++) {

        let divElemento$$ = document.createElement('div');
        divElemento$$.classList.add("fn-div-elementos");


        let h3$ = document.createElement('h3');
        let h5$ = document.createElement('h5');
        let p$ = document.createElement('p');
        let button$$ = document.createElement('button');
        h3$.textContent = notas[index].title;
        h5$.textContent = notas[index].date;
        p$.textContent = notas[index].description;
        h3$.classList.add('fn-hTresTexto');
        h5$.classList.add('fn-hCincoText'); 
        p$.classList.add('fn-pTexto'); 
        button$$.textContent = 'Borrar';
        divElemento$$.appendChild(h3$);
        divElemento$$.appendChild(h5$);
        divElemento$$.appendChild(p$);
        divElemento$$.appendChild(button$$);
        divGeneral$.appendChild(divElemento$$);

        button$$.addEventListener("click", () => (divElemento$$.remove()));
    }
 }
