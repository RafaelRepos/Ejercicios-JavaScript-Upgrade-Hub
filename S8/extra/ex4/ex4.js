let divPlanets$ = document.querySelector('[data-function="planets"]');
let divCharacters$ = document.querySelector('[data-function="characters"]');

fetch('http://localhost:3000/planets')
  .then(function (res) {
    return res.json();
  })
  .then(function(planets) {
      showPlanets(planets);
  });

  function showPlanets(planets) {//________________________________      

      for (let index = 0; index < planets.length; index++) {
        let planet = planets[index];
        let divPlanet = document.createElement('div')
        divPlanet.innerHTML =`<h3>${planet.name}</h3><img src="${planet.image}" width="300"></img>`;
        divPlanets$.appendChild(divPlanet);            

        divPlanet.addEventListener('click', () => showCharacters(planet.id));                      
    }       
}//_______________________________________________________
let divPersonaje$ = document.createElement('div')
function showCharacters(id) {
    
    divCharacters$.innerHTML = "";
        fetch('http://localhost:3000/characters?idPlanet='+id)
        .then(function (res) {
        return res.json()
        })
        .then(function(characters) {      
            for (let index = 0; index < characters.length; index++) {
            const character = characters[index];
            let divPersonaje$ = document.createElement('div')
            divPersonaje$.innerHTML = `<h3>${character.name}</h3><img src="${character.avatar}" width="100"></img>`;
            divCharacters$.appendChild(divPersonaje$); 
            } 
        })    
    } 
function personajeFiltrado(valorInput) {
    divCharacters$.innerHTML = "";
    fetch('http://localhost:3000/characters/')
    .then((res) => res.json())
    .then((respuesta) => {
        for (const personaje of respuesta) {
            if (personaje.name.toLowerCase() === valorInput.toLowerCase()) {
                let divMostrandoPersonaje = document.createElement('div')
                divMostrandoPersonaje.innerHTML=`<img src="${personaje.avatar}"></img><h3>${personaje.name}</h3>`;
                divCharacters$.appendChild(divMostrandoPersonaje);
            }

        }
    })
}

let divSearch$ = document.querySelector('[data-function="search"]');
function search() {
    let input$ = document.createElement('input')
    let button$ = document.createElement('button');
    button$.innerHTML = `Filtrar Personaje`;
    divSearch$.appendChild(input$);
    divSearch$.appendChild(button$);
    button$.addEventListener('click', () => personajeFiltrado(input$.value))
}

search();

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