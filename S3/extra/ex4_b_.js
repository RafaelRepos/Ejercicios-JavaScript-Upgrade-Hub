// Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.
const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'},
];

let buttonLastDelet = document.createElement('button')
document.body.appendChild(buttonLastDelet);
buttonLastDelet.textContent = "Eliminar elúltimo de la lista";

let divFather$ = document.createElement('div');
document.body.appendChild(divFather$);


for (let index = 0; index < countries.length; index++) {
    let div$ = document.createElement('div');
    divFather$.appendChild(div$);
    let h4$ = document.createElement('h4');
    div$.appendChild(h4$);
    h4$.textContent = countries[index].title;
    let img$ = document.createElement('img');
    div$.appendChild(img$);
    img$.setAttribute("src",countries[index].imgUrl);    
}

buttonLastDelet.addEventListener('click', () => (divFather$.lastElementChild.remove()));