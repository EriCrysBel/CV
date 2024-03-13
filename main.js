document.querySelectorAll('.printbutton').forEach(function(element) {
  element.addEventListener('click', function() {
      print();
  });
});

function ocultarBoton() {
  document.getElementById("boton").style.display = "none";
  document.getElementById("boton2").style.display = "none";
   // Obtenemos todos los elementos con la clase "collapse"
   const elementosCollapse = document.querySelectorAll(".collapse");

   // Recorremos los elementos
   for (const elemento of elementosCollapse) {
     // Mostramos el elemento
     elemento.classList.add("show");
   }
 
   // Agregamos un evento "afterprint" para ocultar los elementos nuevamente después de imprimir
   window.addEventListener("afterprint", function () {
     for (const elemento of elementosCollapse) {
      document.getElementById("boton").style.display = "block";
      document.getElementById("boton").style.display = "block";
       elemento.classList.add("show");
     }
   });

}
window.onbeforeprint = ocultarBoton;

