// Inserta dinamicamente en un html un div que contenga una p con javascript.

const div$ = document.createElement("div");
document.body.appendChild(div$);

const p$ = document.createElement("p");
div$.appendChild(p$);
//div1.innerHTML(p1);


console.log(div$);