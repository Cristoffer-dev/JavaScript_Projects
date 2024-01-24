// function cualEsMayor(a, b) {
//     if (a > b) {
//         return a;
//     }else {
//         return b;
//     }
// }

function cualEsMayor(a, b) {
    return (a < b) ? a : b;
}

let mayor = cualEsMayor(5, 8);

console.log(mayor);
