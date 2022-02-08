const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

// Mostrar el carrito de la compra
for (i=0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

// Listar todos los productos
console.log('------------');
for (i=0; i < carrito.length; i++) {
    console.log(carrito[i].name);
}

// Eliminar el producto con id 54657 del carrito de la compra

console.log('------------');
for (i=0; i < carrito.length; i++) {
    if(carrito[i].id == "54657") {
        var pos = i;
    }
}
carrito.splice(pos, 1);
for (i=0; i < carrito.length; i++) {
    console.log(carrito[i].name);
}

// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad)
console.log('------------');
var total = 0
for (producto of carrito) {   
    total += producto.price * producto.count;
}
console.log(total);

// Filtrar por los productos que sean premium
console.log('------------');
var newCart = [];
for (i=0; i < carrito.length; i++) {
    if(carrito[i].premium) {
        newCart.push(carrito[i]);
    }
}
for (producto of newCart) {   
    console.log(producto.name);
}

// Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".
console.log('------------');
var noPremium = 0;
for (producto of carrito) { 
    producto.premium ? noPremium : noPremium++
}
noPremium > 0 ? console.log('Este pedido tiene gastos de envío') : console.log('Pedido sin gastos de envío');

// Montarlo con HTML y API de HTML básica
for (producto of carrito) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode('(' + producto.count + ')' + producto.name));
    document.getElementById("listado").appendChild(li);
}

// Aplicar un descuento del 5% si la compra es mayor de 50 €
console.log('------------');
var getDiscount = (totalPrice) => totalPrice >= 50 ? 5 : 0;
var totalPriceDiscont = productList => {
    var totalPrice = 0;
    for (var product of productList) {
    totalPrice += product.count * product.price;
    }
    return totalPrice * (1 - getDiscount(totalPrice) / 100);
};

console.log(totalPriceDiscont(carrito));