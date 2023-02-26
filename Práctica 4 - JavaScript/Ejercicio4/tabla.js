const form = document.querySelector('form');
    form.addEventListener('submit', generarTabla);
    
    function generarTabla(event) {
      event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
      const valor = document.getElementById('valor').value;
      const modalBody = document.querySelector('.modal-body');
      modalBody.innerHTML = ''; // Limpiar el contenido anterior del modal

      const tabla = document.createElement('table');
      tabla.classList.add('table', 'table-bordered');

      for (let i = 1; i <= 12; i++) {
        const fila = document.createElement('tr');
        const multiplicacion = i * valor;
        const celda1 = document.createElement('td');
        celda1.textContent = `${i} x ${valor} =`;
        const celda2 = document.createElement('td');
        celda2.textContent = multiplicacion;
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        tabla.appendChild(fila);
      }

      modalBody.appendChild(tabla);
      $('#myModal').modal('show'); // Mostrar el modal con jQuery
    }