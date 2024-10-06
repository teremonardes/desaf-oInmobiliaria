export const dptosVenta = [
    {
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      titulo: 'Apartamento de lujo en zona exclusiva',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      direccion: 'Luxury Lane, Prestige Suburb, CA 45678',
      habitacion: '4 Habitaciones | 4 Baños',
      precio: '5.000',
      fumar: false,
      mascotas: false,
    },
    {
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      titulo: 'Apartamento acogedor en la montaña',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      direccion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitacion: '2 Habitaciones | 1 Baño',
      precio: '1.200',
      fumar: true,
      mascotas: true,
    },
    {
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      titulo: 'Penthouse de lujo con terraza panorámica',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      direccion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitacion: '3 Habitaciones | 3 Baños',
      precio: '4.500',
      fumar: false,
      mascotas: true,
    },
    {
      src: 'https://www.fotocasa.es/fotocasa-life/wp-content/uploads/2023/03/casas-de-pueblo1.png',
      titulo: 'Casa de campo',
      descripcion: 'Casa de campo de arquitectura antigua con amplio jardín',
      direccion: '673 country road, CA 193583',
      habitacion: '3 Habitaciones | 2 Baños',
      precio: '2.800',
      fumar: true,
      mascotas: false,
    }
  ];
  
  export const mostrarDptosVenta = (dptos) => {
    const container = document.getElementById("containerDptosVenta");
  
    let contenidoHTML = '';
  
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

  
  
mostrarDptosVenta(dptosVenta);


export const venta = "venta";