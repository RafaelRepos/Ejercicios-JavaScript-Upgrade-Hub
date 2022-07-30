// En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.



const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const { title: titleChanged, gender: newGender, year: yearAge} = game ;

console.log(newGender);
console.log(titleChanged);
console.log(yearAge);

// const [peli1, peli2, peli3] = newGender;
// console.log(peli3);
