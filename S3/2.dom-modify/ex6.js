// Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$ = document.createElement('ul');
document.body.appendChild(ul$);

for (let index = 0; index < apps.length; index++) {
    const li$ = document.createElement('li');
    ul$.appendChild(li$);
    li$.innerHTML = apps[index];

}
console.log(ul$);


