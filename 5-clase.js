class Carrito {
  constructor() {
    this.productos = [];
    this.persona = {
      nombre: "Monica",
      apellido: "Rodriguez",
    };
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  obtenerPrecioTotal() {
    return this.productos.reduce((total, p) => total + p.precio, 0);
  }
}

const carrito = new Carrito();
carrito.agregarProducto({ nombre: "naranja", precio: 1.25 });
carrito.agregarProducto({ nombre: "limon", precio: 1.75 });
console.log(carrito.obtenerPrecioTotal());
//3

const carrito2 = new Carrito();
console.log(carrito2.obtenerPrecioTotal());
//0

console.log(carrito);

console.log("\n");
class Carrito {
  _productos;
  constructor() {
    this._productos = [];
  }

  agregarProducto(producto) {
    this._productos.push(producto);
  }

  obtenerPrecioTotal() {
    return this._productos.reduce((total, p) => total + p.precio, 0);
  }
}
console.log(carrito.obtenerPrecioTotal());
