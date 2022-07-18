// <!-- Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input. -->



let inputFocus = document.querySelector('input');

function focusEvent(event) {
    console.log(inputFocus.value);
}
inputFocus.addEventListener("focus",focusEvent);