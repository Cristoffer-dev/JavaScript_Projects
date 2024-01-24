let nombre = "Gunther";
let cartoon = "kickButowski";
let chapter = 23;

let caracter = {
    nombre: "Gunther",
    cartoon: "kickButowski",
    chapter: 23,
};
console.log(caracter);
console.log(caracter.nombre);
console.log(caracter['cartoon']);

caracter.chapter = 23;

let newChapter = 44;
caracter[newChapter] = 55;

delete caracter.nombre;

console.log(caracter);