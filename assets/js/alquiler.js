export const dptosAlquiler = [
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: " 123 Main Street, Anytown, CA 91234",
    habitacion: "2 Habitaciones | 2 Baños",
    precio: "2.000",
    fumar: false,
    mascotas: true,
  },
  {
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    titulo: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitacion: "3 Habitaciones | 3 Baños",
    precio: "2.500",
    fumar: true,
    mascotas: true,
  },
  {
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    titulo: "Condominio moderno en zona residencial",
    descripcion:
      "  Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitacion: "2 Habitaciones | 2 Baños",
    precio: "2.200",
    fumar: false,
    mascotas: false,
  },

  {
    src: "https://www.fotocasa.es/fotocasa-life/wp-content/uploads/2023/03/casas-de-pueblo1.png",
    titulo: "Casa de campo",
    descripcion: "Casa de campo de arquitectura antigua con amplio jardín",
    direccion: "673 country road, CA 193583",
    habitacion: "3 Habitaciones | 2 Baños",
    precio: "2.800",
    fumar: true,
    mascotas: false,
  },
];

export const mostrarDptosAlquiler = (dptos) => {
  const container = document.getElementById("containerDptosAlquiler");

  if (!container) {
    console.error("El contenedor no se encontró en el DOM.");
    return;
  }


  let contenidoHTML = "";

  for (const dpto of dptos) {
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
  }

  container.innerHTML = contenidoHTML;
};

document.addEventListener('DOMContentLoaded', () => {
    mostrarDptosAlquiler(dptosAlquiler);
  });