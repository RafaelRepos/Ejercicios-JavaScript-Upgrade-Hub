// En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

// Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.


fetch('https://breakingbadapi.com/api/characters')
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
 
    }
}
//___________________________________________________________________________________
/*for (let index = 0; index < personajes.length; index++) {
    let div$ = document.createElement('div');
    document.body.appendChild(div$);
    let h4$ = document.createElement('h4');
    div$.appendChild(h4$);
    h4$.textContent = countries[index].title;
    let img$ = document.createElement('img');
    div$.appendChild(img$);
    img$.setAttribute("src",countries[index].imgUrl);
}*/
//________________________________________________________________________________

//   let button$$ = document.querySelector('button');
//   button$$.addEventListener("click",hacerFetch);


//     function hacerFetch(){

//       let input$$ = document.querySelector('input')

//       fetch(`https://api.nationalize.io?name=${input$$.value}`)
//       .then(function (res) {
//       return res.json();
//       })
//       .then(function(data) {
//       crearP(data);
//       borrarP(data);
//       });
//     }

//     function crearP(data) {
//           let p$$ = document.createElement('p')
//           document.body.appendChild(p$$);

//           let buttomX$$ = document.querySelector('button')
//           buttomX$$.addEventListener("click",borrarP);
//           p$$.remove();
//       }

//     function borrarP() {
//       p$$.textContent= `El nombre ${data.name} tiene un ${data.country[0].probability*100} porciento de ser de ${data.country[0].country_id} y un ${data.country[1].probability*100} de ser de ${data.country[1].country_id}`;
//     }