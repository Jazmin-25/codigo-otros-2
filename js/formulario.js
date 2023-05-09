let formulario = document.querySelector("form"); //se quita el # y se añade el ;
//se cambian las variables var por let.
formulario.submit = function(e) { //se corrige el onsubmit por submit

  e.preventDefault(); //Se completa la funcion e.prevent con default
  
  let n = formulario.elements[0];
  let e = formulario.elements[1];
  let na = formulario.elements[2]; //Se agrega el ; al final de cada variable y se cambia por let

  let nombre = n.value; //se agrega el ; y se cabia cada variable por let
  let edad = e.value;
  let i = na.selectedIndex; //se agrega el ;
  let nacionalidad = na.options[i].value;

  console.log(nombre, edad); //se agrega en cada console.log el ;
  console.log(nacionalidad); //se agrega en cada console.log el ;

  if (nombre.length === 0) {
    n.classList.add("error"); //se agrega el ;
  }//if error
  if (edad < 18 || edad > 120) {
    e.classList.add("error"); //se agrega el ;
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad); //se agrega el ;
  }
}

let botonBorrar = document.createElement("button"); //se cambia var por let y se agrega ;
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br"):
document.body.appendChild(corteLinea):
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"; // se agrega ;
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"; // se agrega ;
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";// se agrega ;
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";// se agrega ;
  }

let lista = document.getElementById("lista-de-invitados"); // se agrega ; y se cambia el var por let

let elementoLista = document.createElement("div"); // se agrega ; y se cambia el var por let
elementoLista.classList.added("elemento-lista"); // se agrega ;
lista.appendChild(elementoLista); // se agrega ;

let spanNombre = document.createElement("span"); // se agrega ; y se cambia el var por let
let inputNombre = document.createElement("input");// se agrega ; y se cambia el var por let
let espacio = document.createElement("br");// se agrega ; y se cambia el var por let
spanNombre.textContent = "Nombre: "; // se agrega ;
inputNombre.value = nombre; // se agrega ;
elementoLista.appendChild(spanNombre); //se agrega ;
elementoLista.appendChild(inputNombre); //se agrega ;
elementoLista.appendChild(espacio); //se agrega ;

function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span"); //se agregar ; y se cambia por let
let inputNombre = document.createElement("input"); //se agregar ; y se cambia por let
let espacio = document.createElement("br");//se agregar ; y se cambia por let
spanNombre.textContent = descripcion + ": "; //se agregar ;
inputNombre.value = valor ; //se agregar ;
elementoLista.appendChild(spanNombre); //se agregar ;
elementoLista.appendChild(inputNombre); //se agregar ;
elementoLista.appendChild(espacio);//se agregar ;
}

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