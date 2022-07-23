// Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 

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

console.log(document.body);