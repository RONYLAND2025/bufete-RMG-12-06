document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre && correo && mensaje) {
    alert('Gracias por contactarnos, ' + nombre + '. Te responderemos pronto.');
    this.reset(); // limpia el formulario
  } else {
    alert('Por favor, completa todos los campos.');
  }
});
