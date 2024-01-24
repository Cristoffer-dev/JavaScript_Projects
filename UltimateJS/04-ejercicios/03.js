// validar que el indice no sea menor a cero y que el elemento existaen el array
function getByInx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe';
    }
    return arr[idx];
}
let resultado = getByInx([1, 2], 1);
console.log(resultado); // devuelve el elemento en la posición indicada