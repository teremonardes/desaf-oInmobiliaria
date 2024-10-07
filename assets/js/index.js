export const mostrarDptos = (dptos, contenedorId) => {
  const container = document.getElementById(contenedorId); 
  container.innerHTML = ''
  let count = 0;

  let contenidoHTML = ''; 

  for (const dpto of dptos) {
    if (count < 3) { 
      contenidoHTML += `
        <div class="dpto-card row">
          <img src="${dpto.src}" alt="Imagen del departamento" />
          <h3>${dpto.titulo}</h3>
          <p>${dpto.direccion}</p>
          <p>${dpto.habitacion}</p>
          <p>$${dpto.precio}</p>
          <p class="${dpto.fumar ? 'text-success' : 'text-danger'}">
            ${dpto.fumar ? '<i class="fas fa-smoking"></i> Fumar está permitido' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
          </p>
          <p class="${dpto.mascotas ? 'text-success' : 'text-danger'}">
            ${dpto.mascotas ? '<i class="fas fa-paw"></i> Mascotas permitidas' : '<i class="fas fa-ban"></i> No se permiten mascotas'}
          </p>
        </div>
      `;
      count++;
    } else {
      break; 
  }
  }

  container.innerHTML = contenidoHTML;
};


document.addEventListener('DOMContentLoaded', () => {
  mostrarDptos(dptosVenta, 'containerDptosVenta'); 
  mostrarDptos(dptosAlquiler, 'containerDptosAlquiler'); 
});