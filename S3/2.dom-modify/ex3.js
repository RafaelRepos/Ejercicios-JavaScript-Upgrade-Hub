//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div$ = document.createElement("div");
document.body.appendChild(div$);
 
for (let index = 0; index < 6; index++) {
    const p$ = document.createElement("p");
    div$.appendChild(p$);
}
console.log(div$)
