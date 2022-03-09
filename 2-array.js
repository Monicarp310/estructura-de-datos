console.log("Ejercicio 1");
a = [5, 7, 8, 1, 4, 9];
b = [];

console.log(a[2]);
console.log(b[2]);

b[2] = 7;
console.log(b[2]);
console.log(b);

b = [null, null, null];
console.log(b[2]);

console.log("\n");
console.log("Ejercicio 2");
a = 1;
function suma(a) {
  a = a + 1;
  /*   console.log(a); */
}
suma(a);
console.log(a);

b = [1];
function suma2(b) {
  b[0] = b[0] + 1;
  /*  console.log(b[0]); */
}
suma2(b);
console.log(b[0]);

console.log("\n");
console.log("Ejercicio 3");
const month = ["enero", "febrero", "marzo", "abril", "mayo"];
month.splice(1, 2, "junio", "julio", "agosto");
console.log(month);
