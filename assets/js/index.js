
import { dptosVenta } from './venta'; 

export const mostrarDptosVenta = (Arraydptos, containerDptosVenta) => {
    const container = document.getElementById(containerDptos); // Usar el ID correcto pasado como argumento
    let count = 0;

    let contenidoHTML = ''; // Acumulamos aquí el contenido HTML
  
    for (const dpto of Arraydptos) {
      if (count < 3) { // Mostramos solo los primeros 3
        contenidoHTML += `
          <div class="dpto-card">
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
        break; // Detenemos el bucle después de 3 iteraciones
      }
    }
  
    container.innerHTML = contenidoHTML; // Insertamos el contenido generado en el contenedor
  };

  mostrarDptosVenta(dptosVenta)