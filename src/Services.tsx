import React from 'react';

import ServiceCard from './ServiceCard';

import styles from './Services.module.css';


const services = [

  {

    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a157bc9e3d6c2a46c300d219b533176045a2ee6e1a43e99149457a65d266565d?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36",

    title: "Tasaciones",

    description: "Contamos con herramientas tecnológicas y un equipo altamente capacitado que opera de manera centralizada para garantizar tasaciones precisas. Confíe en nuestros peritos tasadores de TINSA para obtener valoraciones expertas."

  },

  {

    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3070dc1acbdc21dbce305f9398282f06578fcb5cbda81bfaaf9b712ad25c530?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36",

    title: "Ventas",

    description: "Nos esforzamos para que usted se sienta único. Cuidamos meticulosamente todos los detalles para llevar a cabo una venta exitosa."

  },

  {

    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6461efa1f978150e130aa2c35d9bf34c8cddf9cd053e4f26ea61c79323169840?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36",

    title: "Administración",

    description: "Trabajamos para que el proceso de alquiler no sea una preocupación. Gestionamos sus alquileres con responsabilidad, siempre priorizando la satisfacción tanto de los propietarios como de los inquilinos que disfrutan de cada propiedad que administramos."

  }

];


const Services: React.FC = () => {

  return (

    <section className={styles.services}>

      <h2 className={styles.sectionTitle}>Nuestro trabajo</h2>

      <div className={styles.serviceList}>

        {services.map((service, index) => (

          <ServiceCard key={index} {...service} />

        ))}

      </div>

    </section>

  );

};


export default Services;