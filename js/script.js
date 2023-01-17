
let ingredientesIniciales = 1;
let montoInicial = 0;
let nombreIngrediente;
let precioIngrediente;
let total;
let ingredientesTotales = "-";

let receta = prompt(
  "Hola! Te damos la bienvenida al calculador de recetas! Ingresá el nombre de tu receta por favor"
);

let cantidadIngredientes = parseInt(
  prompt("Ingresá la cantidad de ingredientes que tiene tu receta")
);

while (isNaN(cantidadIngredientes)) {
  cantidadIngredientes = prompt("Por favor ingresá un número");
}

for (
  ingredientesIniciales;
  ingredientesIniciales <= cantidadIngredientes;
  ingredientesIniciales++
) {
  nombreIngrediente = prompt(
    "Ingresá el nombre de tu ingrediente número " + ingredientesIniciales
  );
  precioIngrediente = parseInt(
    prompt("Ingresá el precio de tu ingrediente", "0")
  );
  while (isNaN(precioIngrediente)) {
    precioIngrediente = parseInt(prompt("Por favor ingresá un número"));
  }
  total = montoInicial += precioIngrediente; //el precio ingresado se suma al monto inicial en cada vuelta
  ingredientesTotales = nombreIngrediente += "  " + ingredientesTotales; //se suman todos los nombres de los ingredientes en cada vuelta
}

alert(
  "El costo total para realizar " +
    receta +
    " con: " +
    ingredientesTotales +
    " es de $" +
    total
);

if (
  prompt(
    "Te interesaría saber cuánto podrías tener de ganancias vendiendo " +
      receta +
      "? " +
      "Ingresá SI para calcular o NO para salir del calculador"
  ) == "SI"
) {
  alert("Tus ganancias podrían ser de $" + total * 0.3);
} else {
  alert("Gracias por utilizar el calculador de recetas! :)");
}
alert("Nos vemos!");


