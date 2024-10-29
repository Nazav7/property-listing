import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a407ce262ebd0ea588db66b424c04cf1f8421d4e0932eefefc99897499493762?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.heroBackground} />
      <h1 className={styles.heroTitle}>
        <span className={styles.titleLight}>I</span>NMOBILIARIA{' '}
        <span className={styles.titleHighlight}>R</span>OARK
      </h1>
      <p className={styles.heroSubtitle}>
        <span className={styles.subtitleLight}>Encuentre aquí su </span>
        propiedad
      </p>
    </section>
  );
};

export default Hero;