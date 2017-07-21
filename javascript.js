/* Debes pegar todo el código en main.js*/
var productos = [];
var frutas = document.getElementById('fruta');

// Constructor para generar un nuevo producto
function Producto(fruta) {
  this.fruta = fruta.toLowerCase();
  this.productID = (productos.length -1);
  
}

//Método para imprimir un producto en html
Producto.prototype.toHTML = function () {
  var html = '';
  html += this.fruta.toUpperCase() + '<br>';
  
  return html;
}

//Función que une todas las compras guardadas en el array productos
function mergeHTML (){
  var html = '';
  for (i=0;i<productos.length; i++){
    html += productos[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  frutas.innerHTML = '';
  frutas.innerHTML = html;
}

// Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
var addCompra = document.getElementById('Agregar');
addCompra.onclick = function() {
 
  var pedido  = document.getElementById('listaFrutas').value;
  var product = new Producto(pedido);
  productos.push(product);
  printHTML(product.toHTML());
  printHTML(mergeHTML());
};


