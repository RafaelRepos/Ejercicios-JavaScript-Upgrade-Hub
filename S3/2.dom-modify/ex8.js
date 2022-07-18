// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const div1$ = document.querySelectorAll('div')[0];
const div2$ = document.querySelectorAll('div')[1];
div1$.textContent = 'Soy Div superior!';
div2$.textContent = 'Soy Div inferior!';


const p$ = document.createElement('p');
p$.textContent = 'Voy en Medio!';

document.body.insertBefore(p$, div2$);

console.log(document.body)



