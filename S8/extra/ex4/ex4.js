// Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

// Para ello, ejecutemos ``json-server --watch exercise-4.json``. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

// La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y, que si el usuario hace click en alguno de los planetas, salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por ejemplo ``http://localhost:3000/characters?idPlanet=1`` y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
// Además de esto, agrega un buscador para poder filtrar los personajes una vez que has seleccionado el planeta. Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

fetch('http://localhost:3000/planets')
  .then(function (res) {
    return res.json();
  })
  .then(function(planets) {
      showPlanets(planets);
  });

  function showPlanets(planets) {
      let divPlanets$ = document.querySelector('[data-function="planets"]');
      let divSearch$ = document.querySelector('[data-function="search"]');
      let divCharacters$ = document.querySelector('[data-function="characters"]');

      for (let index = 0; index < planets.length; index++) {
            
        let imgPlanet$ = document.createElement('img')
        imgPlanet$.classList.add('fn-img-planets');
        imgPlanet$.setAttribute("src",planets[index].image);
        imgPlanet$.setAttribute("width",300);
        divPlanets$.appendChild(imgPlanet$);           
    }
    divPlanets$.addEventListener('click',  () => {
        
        fetch('http://localhost:3000/characters')
        .then(function (res) {
            return res.json()})
        .then(function(characters) {
            showCharacters(characters)});

        function showCharacters(characters) {
            divCharacters$.innerHTML = "";
            
        for (let character of characters) {
            let imgCaras$ = document.createElement("img");
            imgCaras$.classList.add("fn-imgCaras");
            imgCaras$.setAttribute.add("src", character.avatar)
            divCharacters$.appendChild(imgCaras$);
            // let imgPlanet$ = document.createElement('img')
            // imgPlanet$.classList.add('fn-img-planets');
            // imgPlanet$.setAttribute("src",planets[index].image);
            // imgPlanet$.setAttribute("width",300);
            // divPlanets$.appendChild(imgPlanet$);                
            }
        }
    })
} 



//__________________________________________________________________________________
/*fetch('https://breakingbadapi.com/api/characters')
  .then(function (res) {
    return res.json();
  })
  .then(function(personajes) {
      crearGaleia(personajes);
  });

  function crearGaleia(personajes) {
      let divFather$$ = document.createElement('div');
      document.body.appendChild(divFather$$);
      divFather$$.classList.add("fn-div-father");

      for (let index = 0; index < personajes.length; index++) {
        let div$ = document.createElement('div');
        div$.classList.add("fn-div-contenedor");
            
    let texto = `<h4 class="fn-titulo-nombre">${personajes[index].name}</h4>
    <img class="fn-imagen-personaje" src="${personajes[index].img}">`;
    div$.innerHTML = texto;
    divFather$$.appendChild(div$);
            
            let h4$ = document.createElement('h4');
            h4$.classList.add("fn-titulo-nombre");
            let img$ = document.createElement('img');
            img$.classList.add("fn-imagen-personaje");            
            img$.setAttribute("src",personajes[index].img);
            div$.appendChild(h4$);
            div$.appendChild(img$);
            h4$.textContent = personajes[index].name;
    }
}*/