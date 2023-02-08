let ingredientesIniciales = 1;
let montoInicial = 0;
let nombreIngrediente;
let precioIngrediente;
let total;
let ingredientesTotales = "-";

document.getElementById("NombreReceta").value = "Arroz con leche";
let titExplicacion = document.createElement("h3");
titExplicacion.innerHTML = "Calculando ingredientes para " + NombreReceta.value;
document.querySelector("#explicacionReceta").append(titExplicacion);

document.getElementById("PorcionesOriginales").value = 3;
document.getElementById("porcionesACalcular").value = 6;

let explicacion = document.createElement("p");
explicacion.innerHTML =
  "Vamos a convertir tu receta original de " +
  PorcionesOriginales.value +
  " porciones a una receta que te rinda para " +
  porcionesACalcular.value +
  " porciones!";
document.querySelector("#explicacionReceta").append(explicacion);
