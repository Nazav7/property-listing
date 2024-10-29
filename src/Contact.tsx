import React from 'react';

import ContactForm from './ContactForm';

import styles from './Contact.module.css';


const Contact: React.FC = () => {

  return (

    <section className={styles.contact}>

      <h2 className={styles.sectionTitle}>Contáctanos</h2>

      <div className={styles.contactInfo}>

        <div className={styles.infoItem}>

          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b983b0001a931204c598f86b5c87fcec378963d8f6c824d4c6aed64a19c19917?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.infoIcon} />

          <span>(123) 456-7890</span>

        </div>

        <div className={styles.infoItem}>

          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f46420b52d30bddffa69a74ad104408d3496eb349f2bfba9f3b59755e08cd88?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.infoIcon} />

          <span>info@inmobiliariaejemplo.com</span>

        </div>

        <div className={styles.infoItem}>

          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5be9c8238f40e600a25ce6f6c67cc6d3d5594c2d908916d59c38b43ed1486171?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.infoIcon} />

          <span>Calle 4114, Ciudad</span>

        </div>

        <div className={styles.socialIcons}>

          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/836a74cfb377a1c83aca059e040151e2646aaa2e1cd0167aa8abdf5822bdc002?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="Facebook" className={styles.socialIcon} />

          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bf82649795b2b547c01879df85b58d69ec56584b7c38a5137511f0d41ce2fb1?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="Instagram" className={styles.socialIcon} />

        </div>

      </div>

      <div className={styles.contactContent}>

        <ContactForm />

        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dea9e72b2e9d546b71c02143d8de95c2c7691b5aedc51da4e4796add3f9139e0?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="Contact image" className={styles.contactImage} />

      </div>

    </section>

  );

};


export default Contact;