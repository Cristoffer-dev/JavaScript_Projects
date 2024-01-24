//crear algoritmo que tome un array de objeto en base a pares

let pairs = [
    [1, {name: "Juan"}],
    [2, {name: "Pedro"}],
    [3, {name: "Luis"}],
];

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



function toCollection(arr) {
    let collection = [];
    for(idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);