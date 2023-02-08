
let ingredientesIniciales = 1;
let montoInicial = 0;
let nombreIngrediente;
let precioIngrediente;
let total;
let ingredientesTotales;
const TREINTAPORC =0.3;

let nombreReceta = prompt(
  "Hola! Te damos la bienvenida al calculador de recetas! Ingresá el nombre de tu receta por favor"
);

let cantidadIngredientes = parseInt(
  prompt("Ingresá la cantidad de ingredientes que tiene tu receta")
);

while (isNaN(cantidadIngredientes)) {
  cantidadIngredientes = prompt("Por favor ingresá un número");
}

//Creo una funcion que calcula las ganancias del total
function calcGanancias(a) {
    return a*TREINTAPORC;  
    }

let ingredientes = []; //creo un array para guardar todos los ingredientes
let precios =[]; //creo un array para guardar todos los precios

for (
    ingredientesIniciales;
    ingredientesIniciales <= cantidadIngredientes;
    ingredientesIniciales++
  ) {
    nombreIngrediente = prompt("ingresá el nombre de tu ingrediente º" + ingredientesIniciales
    );
    ingredientes.push(nombreIngrediente);//agrego nombreIngrediente ingresado al array ingredientes

    precioIngrediente = parseInt(
      prompt("Ingresá el precio de tu ingrediente", "0")
    );
    precios.push(precioIngrediente);//agrego precioIngrediente ingresado al array precios
  
    while (isNaN(precioIngrediente)) {
      precioIngrediente = parseInt(prompt("Por favor ingresá un número"));
    }
    total = montoInicial += precioIngrediente; 
    ingredientesTotales = ingredientes.concat(); //muestra todos los valores del array concatenados
  }

alert(
  "El costo total para realizar " +
    NombreReceta +
    " con: " +
    +ingredientesTotales.join(", ") +
    " es de $" +
    total
);

if (
  prompt(
    "Te interesaría saber cuánto podrías tener de ganancias vendiendo " +
    NombreReceta +
      "? " +
      "Ingresá SI para calcular o NO para salir del calculador"
  ) == "SI"
) {
  alert("Tus ganancias podrían ser de $" + calcGanancias(total)); //calcula las ganancias usando la funcion calcGanancias
} else {
  alert("Gracias por utilizar el calculador de recetas! :)");
}
alert("Nos vemos!");


//Creo la clase Receta

class Receta {
    constructor (NombreReceta, cantidadIngredientes, total, ingredientes, precios){
        this.NombreReceta=NombreReceta;
        this.cantidadIngredientes=cantidadIngredientes;
        this.total=total;
        this.ingredientes=ingredientes;
        this.precios=precios;
    }
    aumentarIngredientes(ingredientesIniciales){
        this.ingredientesIniciales=this.ingredientesIniciales++
        return this.ingredientesIniciales
    }
    disminuirIngredientes(ingredientesIniciales){
        this.ingredientesIniciales=this.ingredientesIniciales--
        return this.ingredientesIniciales
    }
    calcularMargenDeGanancia(total){
        total*0.3;
        return total;
    }
}

//Quise crear una instancia de la clase receta con los parametros que ingresó el usuario. 
//Se podría crear una variable distinta "recetaUsuario1", "recetaUsuario2" etc... cada vez que un usuario genera una receta?

let recetaUsuario1 = new Receta (NombreReceta, cantidadIngredientes, total, ingredientes, precios) //puedo usar variables en vez de valores aca? 
