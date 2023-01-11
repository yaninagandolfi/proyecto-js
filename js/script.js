


do {
    nombreDeUsuario = prompt("Hola, bienvenido al calculador de porciones, ingresá tu nombre por favor");
    if (nombreDeUsuario == ""){
        alert ("ingresá un nombre por favor")
    }
} while (nombreDeUsuario == "");

calcularReceta()

function calcularReceta(){
    let calcularReceta = confirm(nombreDeUsuario + " vamos a re-calcular los ingredientes de tu receta!");
    
    if (calcularReceta == true) {
        let recetaOriginal = prompt("Introducí la cantidad original de PORCIONES de tu receta");
        let ingredientesOriginal = prompt("Introducí la cantidad de INGREDIENTES de tu receta a calcular");
    } else {
        alert("Por favor ingresá un número")
    }
}

for (let ingredientes = 1; ingredientes <= ingredientesOriginal; ingredientes++) {
    let ingresarNombreIng = prompt("Ingresa el nombre de tu primer ingrediente o ingresa ESC para salir");
    }


