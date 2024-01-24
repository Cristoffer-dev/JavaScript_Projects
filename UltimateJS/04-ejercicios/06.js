/*Funcion para devolver cantidad de numeros positivos de un array 
*/

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    for (elemento of arr) {
        if (elemento > 0) {
            cantidad ++;
        }
    }
    return cantidad;
}
let numeros = cuantosPositivos(array);
console.log(resultado);
