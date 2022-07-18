// <!-- Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click -->

let boton$ = document.getElementById('btnToClick');

function infoEvent(event) {
    console.log(event)
}
boton$.addEventListener("click",infoEvent);




































// var handleClick = function(event) {
//     console.log(event);
//  }
//  document.getElementById("btn").addEventListener("click", handleClick);