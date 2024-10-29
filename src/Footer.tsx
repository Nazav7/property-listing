import React from 'react';

import styles from './Footer.module.css';


const Footer: React.FC = () => {

  return (

    <footer className={styles.footer}>

      <div className={styles.footerContent}>

        <div className={styles.footerSection}>

          <h4 className={styles.footerTitle}>ROARK PROPIEDADES</h4>

          <p className={styles.footerText}>

            Nuestra reputación respalda más de <strong>20 años de experiencia</strong> en el mercado inmobiliario, con éxito en operaciones comerciales y profesionales en una amplia variedad de transacciones inmobiliarias.

          </p>

        </div>

        <div className={styles.footerSection}>

          <h4 className={styles.footerTitle}>Enlaces rápidos</h4>

          <nav className={styles.footerNav}>

            <a href="#inicio" className={styles.footerLink}>Inicio</a>

            <a href="#propiedades" className={styles.footerLink}>Propiedades</a>

            <a href="#contacto" className={styles.footerLink}>Contacto</a>

          </nav>

        </div>

        <div className={styles.footerSection}>

          <h4 className={styles.footerTitle}>Contacto</h4>

          <address className={styles.footerAddress}>

            <p>Calle 414, Ciudad</p>

            <p>(123) 456-7890</p>

            <p>info@inmobiliariaejemplo.com</p>

          </address>

          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2493cb60e6f23522b501fc84b10bba8c50472fb81d4a4fa31879d6a983669d56?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="Company logo" className={styles.footerLogo} />

        </div>

      </div>

      <div className={styles.footerCopyright}>

        © 2023 Inmobiliaria Ejemplo. Todos los derechos reservados.

      </div>

    </footer>

  );

};


export default Footer;