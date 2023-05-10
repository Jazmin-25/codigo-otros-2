///El codigo debe registrar a los invitados y a los menores de 18 años tiene que rechazarlos. Tiene que agregar una tarjeta de confirmación de los invitados. Corregí las validaciones y volví a hacer el codigo porque no es funcional escribir tantos comentarios.

let formulario = document.querySelector(".formulario");
//Se manda a llamar el btnEnviar
let BtnEnviar = document.getElementById("BtnEnviar");
let lista = document.getElementById("lista");


//Se cambia la funcion anterior onSubmit por el addEvent, para llamamos 
//la variable que creamos BtnEnviar
//todas las variables var se cambian por let
BtnEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  let n = formulario.elements[0];
  let e = formulario.elements[1];
  let na = formulario.elements[2];

  let nombre = n.value;
  let edad = e.value;

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}); //BtnEnviar


let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elementos"); //Se corrige la funcion added a add, ya que no pemitía agregar
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  botonBorrar.onclick = function() {
    if(lista.parentNode) { //Added if
      lista.removeChild(lista.lastChild);
    }
    } // botonBorrar
  } // agregarInvitado

//codigo que borre estara comentado aqui abajo

//let botonBorrar = document.createElement("button"); //se cambia var por let y se agrega ;
//botonBorrar.textContent = "Eliminar invitado"; //Se comentan porque no tengo el boton de eliminar invitado. solo borrar
//botonBorrar.id = "boton-borrar";  se elimina esta seccion 
 //Se deshabilita funciones repetidas que obstruyen el proceso
 /*  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio) */
/*   var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar); */