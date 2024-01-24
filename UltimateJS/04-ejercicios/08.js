//crear algoritmo que tome un array de objetos y devuelva un array de pares

let array = [{
    id: 1,
    name: "Juan",
},{
    id:2,
    name:"Pedro",
},{
    id:3,
    name:"Luis",
}];

let pares = [
    [1, {id: 1, name: "Juan"}],
    [2, {id: 2, name: "Pedro"}],
    [3, {id: 3, name: "Luis"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {  
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);