console.log("Ejercicio 1");
var x = "2";
console.log(x + "-" + typeof x);
x = x * 3;
console.log(x + "-" + typeof x);

var y = 2;
console.log(y + "-" + typeof y);
var y = "El número es " + y;
console.log(y + "-" + typeof y);

console.log("\n");
console.log("Ejercicio 2");
var x = 0.1 + 0.2;
/* x = x.toFixed(1); */ /* Redondea y lo convierte a String */
x = Math.round(x * 100) / 100; /* Redondea y lo deja en entero */
/* console.log(x); */
var y = 0.3;
if (x === y) {
  console.log("Son iguales");
} else {
  console.log("Son diferentes");
}
