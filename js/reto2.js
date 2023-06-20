// El evento de ejemplo onclick donde llamamos el id del botón y hacemos una función para cuando el evento ocurra
let onclick = document.getElementById("onclick");
onclick.addEventListener("click", function(){
  alert("¡Has dado click en el botón!");
});

// El evento
let onchange = document.getElementById("onchange");
onchange.addEventListener("change", function(){
  let opcion = onchange.value;
  alert(`hsa escogido ${opcion}`);
});

let mouseover = document.getElementById("mouseover");
mouseover.addEventListener("mouseover", function(){
  mouseover.style.backgroundColor = "#60a1ec";
  mouseover.style.transform = "scale(1.2)";
});
mouseover.addEventListener("mouseout", function(){
  mouseover.style.backgroundColor = "#ffff";
  mouseover.style.transform = "scale(1)";
});

document.addEventListener("keydown", function(event){
  if(event.keyCode === 13){
    alert('Se ha presionado la tecla enter');
  }
});

let input = document.getElementById("input");
input.addEventListener("focus", function(){
  input.style.backgroundColor = "#60a1ec";
  console.log("Has enfocado el input, ahora puedes digitar algo!");
});

input.addEventListener("blur", function(){
  alert("El input ha sido desenfocado, selecciónalo para escribir algo");
  input.style.backgroundColor = "#ffff";
});

let dbclick = document.getElementById("dbclick");
dbclick.addEventListener("dblclick", function(){
  alert("Se ha dado doble click en el botón");
});

window.addEventListener('scroll', function(){
  console.log("Has desplazado la página con el scroll del mouse");
});

let drag = document.getElementById("drag");
drag.addEventListener("dragstart", function(){
  console.log("Has iniciado a arrastrar el elemento");
});

drag.addEventListener("drag", function(){
  console.log("Estás arrastrando el elemento");
});

drag.addEventListener("dragend", function(){
  console.log("Has terminado de arrastrar el elemento");
});

window.addEventListener("resize", function(){
  alert("La ventana se ha ajustado nuevamente");
});

window.addEventListener("load", function(){
  alert("La página se ha cargado completamente");
});