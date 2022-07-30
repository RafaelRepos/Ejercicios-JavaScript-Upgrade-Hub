let divGeneral = document.createElement('div');
divGeneral.classList.add('divGeneral');
document.body.appendChild(divGeneral);

fetch('http://localhost:3000/characters')
.then(function (res) {
    return res.json()})
.then(function characters(caracteres) {
    pintarPersonajes(caracteres)
})

function pintarPersonajes(caracteres) {
    for (const personaje of caracteres) {
        let divPersonaje = document.createElement('div');
        divPersonaje.innerHTML = `<img src="${personaje.avatar}"  width="100"></img><h3>${personaje.name}</h3>`;  
        divGeneral.appendChild(divPersonaje);
    }
}
function getDatos(event) {
    let formulario$ = document.querySelector('form');
    let buttonGuardar = document.querySelector('[id="submit"]');
    let datos = Object.fromEntries(new FormData(formulario$).entries());
    console.log()
}
