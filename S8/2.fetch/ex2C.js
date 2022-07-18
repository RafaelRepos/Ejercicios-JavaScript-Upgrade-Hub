// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

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
    borrarP(data);
    });
  }

  function crearP(data) {
        let p$$ = document.createElement('p')
        document.body.appendChild(p$$);

  

      
        let buttomX$$ = document.querySelector('button')
        buttomX$$.addEventListener("click",borrarP);
        p$$.remove();
    }
  
  function borrarP() {
    p$$.textContent= `El nombre ${data.name} tiene un ${data.country[0].probability*100} porciento de ser de ${data.country[0].country_id} y un ${data.country[1].probability*100} de ser de ${data.country[1].country_id}`;
  }