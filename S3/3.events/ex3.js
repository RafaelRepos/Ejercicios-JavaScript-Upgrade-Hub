// <!-- Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input. -->
let inputFunction = document.querySelector('input[type="text"]');

function inputEvent(event) {
    console.log(inputFunction.value);
}
inputFunction.addEventListener("input",inputEvent);