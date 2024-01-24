//algoritmo que devuelva el precio del producto mas el impuesto

function precioCompleto(precio, impuesto) {
    return precio + precio * impuesto;
}
let resultado = precioCompleto(19.99, 0.15);
console.log(resultado)