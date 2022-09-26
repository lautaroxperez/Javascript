function calcularDescuento(precio, porcentaje) {
    let valorDescuento = precio * porcentaje /100;
    let precioFinal = precio - valorDescuento;

    return precioFinal;
}

// let valorProducto = calcularDescuento(1000, 20);
// console.log(valorProducto);

function productoNuevo(){
    let nombreProducto = prompt("Cual es el nombre del producto?");
    let precioProducto = parseFloat(prompt("Cuanto cuesta?"));
    let descuentoProducto = parseInt(prompt("Indique porcentaje de descuento?"));

    let precioFinal = calcularDescuento(precioProducto, descuentoProducto);
    let producto = alert(`El producto nuevo es ${nombreProducto} y su precio final es de ${precioFinal}`);
    return producto;
}

productoNuevo();

