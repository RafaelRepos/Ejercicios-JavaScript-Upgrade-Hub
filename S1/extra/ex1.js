/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
*/
const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

let edadMayor = 18;


let mayores = [];
let menores = [];

for (let index = 0; index < users.length; index++) {
   
    if (users[index].years >= edadMayor) {
        mayores.push(users[index].name); 
        mayores.join(',');        
    } else {
        menores.push(users[index].name); 
        menores.join(',');        
    }   
}
console.log(mayores + ": Usuarios mayores de edad");
console.log(menores + ": Usuarios menores de edad");