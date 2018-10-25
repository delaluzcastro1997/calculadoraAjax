 /*=================================
=            Variables            =
=================================*/

//Variables númericas


var numero = 5;


var x = document.getElementById("variable").innerHTML = "uso de una variable numerica: " + numero + ".";



// variables de texto

var palabra = "palabras";
var x = document.getElementById("palabra").innerHTML = "uso de variables de texto: " + palabra + ".";


// variables boleanas

var boleana = "true";
var x = document.getElementById("boleana").innerHTML = "uso de variables boleanas: " + boleana + ".";

// variables de tipo arreglo (Array)

var colores = ["rojo", "amarillo" , "azul"];
var x = document.getElementById("colores").innerHTML = "uso de variables de tipo arreglo: " + colores + ".";

// variables de tipo objeto

var jugo = {"ingrediente1":"fresa",
			"ingrediente2":"mandarina",
			"ingrediente3":"platano"};

var x = document.getElementById("jugo").innerHTML = "uso de variables de tipo objeto: " + jugo.ingrediente1 + ".";
