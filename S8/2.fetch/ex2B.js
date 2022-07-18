// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

let button$$ = document.querySelector('button');

button$$.addEventListener("click",hacerFetch);

  function hacerFetch(){

    let input$$ = document.querySelector('input')

    fetch(`https://api.nationalize.io?name=${input$$.value}`)
    .then(function (res) {
    return res.json();
    })
    .then(function(data) {
    crearP(data);
    });
  }

  function crearP(data) {
      let p$$ = document.createElement('p')
      document.body.appendChild(p$$);
      p$$.textContent= `El nombre ${data.name} tiene un ${data.country[0].probability*100} porciento de ser de ${data.country[0].country_id} y un ${data.country[1].probability*100} de ser de ${data.country[1].country_id}`;
  }