
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
    });
    
    function validarFormulario(evento) {
      evento.preventDefault();
      var nombre = document.getElementById('nombre').value;
      if(nombre.length == 0) {
        alert('No has escrito el nombre');
        return;
      }
      var apellido = document.getElementById('apellido').value;
      if(apellido.length == 0) {
        alert('No has escrito el apellido');
        return;
      }
      var telefono = document.getElementById('telefono').value;
      if (telefono.length < 8) {
        alert('Falta un numero de telefono valido');
        return;
      }
      var direccion = document.getElementById('direccion').value;
      if(direccion.length == 0) {
        alert('No has escrito una direccion');
        return;
      }
      var email = document.getElementById('email').value;
      if (email.length < 8) {
        alert('No has escrito en email');
        return;
      }
      this.submit();
    }