// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

let button$$ = document.querySelector('button');

button$$.addEventListener("click",hacerFetch);



  function hacerFetch(){
    let input$$ = document.querySelector('input')
    fetch(`https://api.nationalize.io?name=${input$$.value}`)
    .then(function (res) {
    return res.json();
    })
    .then(function(impr) {
    console.log(impr);
    });
  }