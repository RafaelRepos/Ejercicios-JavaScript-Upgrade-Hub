// Ejecuta `json-server --watch exercise-10.json` para obtener un endpoint de personajes `http://localhost:3000/characters`.

// Pinta una galeria con los campos .name .image de los cinco primeros personajes. Para ello utilizaremos el endpoint con un filtro de página y limite de personajes de 5 por página `http://localhost:3000/characters?_page=1&_limit=5`.

// Una vez pintados, crea un botón que esté situado abajo con el texto `Cargar más`. Si hacemos click en este botón hará un nuevo fetch a la siguiente página de personajes por lo tanto la url debería de ser la página actual + 1 `http://localhost:3000/characters?_page=2&_limit=5`. De esta forma obtendremos 5 personajes más que tendremos que pintar.

// La base de datos solo tiene 20 personajes así que lo ideal sería ocular el botón cuando estemos en la página 4.

fetch('http://localhost:3000/characters?_page=1&_limit=5')
.then(function(respuesta){
    return respuesta.json();
})
.then(function (personajes) {
    crearGaleria(personajes);
})

function crearGaleria(personajes) {
    let divFather$$ = document.createElement('div');
      document.body.appendChild(divFather$$);
      divFather$$.classList.add("fn-div-father");

      for (let index = 0; index < personajes.length; index++) {
        let div$ = document.createElement('div');
        div$.classList.add("fn-div-contenedor");
            
    let texto = `<h4 class="fn-titulo-nombre">${personajes[index].name}</h4>
    <img class="fn-imagen-personaje" src="${personajes[index].image}">`;
    div$.innerHTML = texto;
    divFather$$.appendChild(div$);
}
}