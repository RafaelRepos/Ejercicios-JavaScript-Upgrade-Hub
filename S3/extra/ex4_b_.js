// Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.
const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'},
];



for (let index = 0; index < countries.length; index++) {
    let div$ = document.createElement('div');
    document.body.appendChild(div$);
    let h4$ = document.createElement('h4');
    div$.appendChild(h4$);
    h4$.textContent = countries[index].title;
    let img$ = document.createElement('img');
    div$.appendChild(img$);
    img$.setAttribute("src",countries[index].imgUrl);    
}


let buttom$$ = document.querySelector('buttom');

function lastDelete(event) {
    const totalDiv$ = document.querySelectorAll('div');
    totalDiv$[totalDiv$.length-1].remove();
}
buttom$$.addEventListener('click',lastDelete);

