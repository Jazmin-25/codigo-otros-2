//El codigo debe registrar a los invitados y a los menores de 18 años tiene que rechazarlos
let formulario = document.querySelector(".formulario"); //se quita el # y se acompleta formulario y se añade el ;
//se cambian las variables var por let.
//formulario.onsubmit = function(e) { //se corrige el onsubmit por submit lo tuve que volver a formular
let botonEnviar = document.getElementById("botonEnviar"); //reformule el boton porque me daba errores
botonEnviar.addEventListener("click"), function(event) {
event.preventDefault(); //Se completa la funcion e.prevent con default
let n = formulario.elements[0];
let e = formulario.elements[1];
let na = formulario.elements[2]; //Se agrega el ; al final de cada variable y se cambia por let
let nombre = n.value; //se agrega el ; y se cabia cada variable por let
let edad = e.value;
let i = na.selectedIndex; //se agrega el ;
let nacionalidad = na.options[i].value
//console.log(nombre, edad); //se agrega en cada console.log el ; no me sirve
//console.log(nacionalidad); //se agrega en cada console.log el ; no me sirve

  if (nombre.length > 0 &&(edad >=18 && edad < 120)) {//reformulo el if
    agregarInvitado(nombre, edad, nacionalidad);
  }
  n.classList.toggle("error", nombre.length ===0); //se agrega el ; y se agrega el toggle
  e.classList.toggle("error", edad < 18 || edad > 120);
  }//if error antes, ahora es el btnEnviar
let botonBorrar = document.createElement("button"); //se cambia var por let y se agrega ;
botonBorrar.textContent = "Eliminar invitado"; //Se comentan porque no tengo el boton de eliminar invitado. solo borrar
botonBorrar.id = "boton-borrar";  //se elimina esta seccion 
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea); //se comenta porque no se agrego el boton al html
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "argentina") {
    nacionalidad = "Argentina"; // se agrega ;
  }
  else if (nacionalidad === "mexico") {
    nacionalidad = "Mexicana"; // se agrega ;
  }
  else if (nacionalidad === "Venezolana") {
    nacionalidad = "Venezolana";// se agrega ;
  }
  else if (nacionalidad === "peruana") {
    nacionalidad = "Peruana";// se agrega ;
  }

let lista = document.getElementById("lista-de-invitados"); // se agrega ; y se cambia el var por let
let elementoLista = document.createElement("div"); // se agrega ; y se cambia el var por let
elementoLista.classList.add("elemento-lista"); // se agrega ; y se cambia el added por add
lista.appendChild(elementoLista); // se agrega ;
function crearElemento(descripcion, valor){ //se agrega las variables dentro de la funcion
  let spanNombre = document.createElement("span"); // se agrega ; y se cambia el var por let
let inputNombre = document.createElement("input");// se agrega ; y se cambia el var por let
let espacio = document.createElement("br");// se agrega ; y se cambia el var por let
spanNombre.textContent = "Nombre: "; // se agrega ;
inputNombre.value = nombre; // se agrega ;
elementoLista.appendChild(spanNombre); //se agrega ;
elementoLista.appendChild(inputNombre); //se agrega ;
elementoLista.appendChild(espacio); //se agrega ;
}//crearElemento




function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span"); //se agregar ; y se cambia por let
let inputNombre = document.createElement("input"); //se agregar ; y se cambia por let
let espacio = document.createElement("br");//se agregar ; y se cambia por let
spanNombre.textContent = descripcion + ": "; //se agregar ;
inputNombre.value = valor ; //se agregar ;
elementoLista.appendChild(spanNombre); //se agregar ;
elementoLista.appendChild(inputNombre); //se agregar ;
elementoLista.appendChild(espacio);//se agregar ;
}//crearElemento

crearElemento("Nombre", nombre); //se agrega el ;
crearElemento("Edad", edad); //se agrega el ;
crearElemento("Nacionalidad", nacionalidad); //se agrega el ;

let botonBorrar = document.createElement("button"); //se agrega el ; y se cmabia por let
botonBorrar.textContent = "Eliminar invitado"; //se agrega el ;
botonBorrar.id = "boton-borrar"; //se agrega el ;
let corteLinea = document.createElement("br"); //se agrega el ; y se cmabia por let
elementoLista.appendChild(corteLinea); //se agrega el ;
elementoLista.appendChild(botonBorrar); //se agrega el ;

 botonBorrar.onclick = function() {
this.parentNode.style.display = 'none'; //se quita el comentario
botonBorrar.parentNode.remove(); //se agrega el ;
  }//this.parentNode
}//boton borrar

//codigo que borre

//let botonBorrar = document.createElement("button"); //se cambia var por let y se agrega ;
//botonBorrar.textContent = "Eliminar invitado"; //Se comentan porque no tengo el boton de eliminar invitado. solo borrar
//botonBorrar.id = "boton-borrar";  se elimina esta seccion 