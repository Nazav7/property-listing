import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoHighlight}>R</span>OARK
        <div className={styles.subLogo}>PROPIEDADES</div>
      </div>
      <nav className={styles.nav}>
        <a href="#inicio" className={styles.navLink}>INICIO</a>
        <a href="#propiedades" className={styles.navLink}>PROPIEDADES</a>
        <a href="#contacto" className={styles.navLink}>CONTACTO</a>
      </nav>
    </header>
  );
};

export default Header;