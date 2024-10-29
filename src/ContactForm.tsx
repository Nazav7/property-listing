import React from 'react';

import styles from './ContactForm.module.css';


const ContactForm: React.FC = () => {

  return (

    <form className={styles.contactForm}>

      <h3 className={styles.formTitle}>Hacé tu consulta</h3>

      <div className={styles.formField}>

        <label htmlFor="name" className={styles.formLabel}>Nombre</label>

        <input type="text" id="name" className={styles.formInput} placeholder="Nombre" required />

      </div>

      <div className={styles.formField}>

        <label htmlFor="email" className={styles.formLabel}>E-mail</label>

        <input type="email" id="email" className={styles.formInput} placeholder="E-mail" required />

      </div>

      <div className={styles.formField}>

        <label htmlFor="phone" className={styles.formLabel}>Teléfono</label>

        <input type="tel" id="phone" className={styles.formInput} placeholder="Teléfono" required />

      </div>

      <div className={styles.formField}>

        <label htmlFor="message" className={styles.formLabel}>Mensaje</label>

        <textarea id="message" className={styles.formTextarea} placeholder="Mensaje" required></textarea>

      </div>

      <button type="submit" className={styles.submitButton}>ENVIAR</button>

    </form>

  );

};


export default ContactForm;