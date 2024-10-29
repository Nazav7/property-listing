import React from 'react';
import styles from './PropertySearch.module.css';

const PropertySearch: React.FC = () => {
  return (
    <form className={styles.propertySearch}>
      <div className={styles.searchField}>
        <label htmlFor="operation" className={styles.visuallyHidden}>Operación</label>
        <select id="operation" className={styles.searchSelect}>
          <option>Operación</option>
        </select>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba6df1a1a96b6300beb5cadb7f38ac92dfc31ba00fc66e501f832658646838f3?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.selectIcon} />
      </div>
      <div className={styles.searchField}>
        <label htmlFor="location" className={styles.visuallyHidden}>Localidad</label>
        <select id="location" className={styles.searchSelect}>
          <option>Localidad</option>
        </select>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ecf6acdaea2eaad548e6d2c36bc5f5add38014234ffc5c47b134289e855714d?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.selectIcon} />
      </div>
      <div className={styles.searchField}>
        <label htmlFor="property" className={styles.visuallyHidden}>Propiedad</label>
        <select id="property" className={styles.searchSelect}>
          <option>Propiedad</option>
        </select>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fede9db8b4bcbf47501f462b75f9643555860c8f3b431bd7f50ed0faa2dd5085?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.selectIcon} />
      </div>
      <button type="submit" className={styles.searchButton}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ef05930d65da4abc372cb43de84459a26958dc6421995a571c1dab2a71b9d4?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.searchIcon} />
        BUSCAR
      </button>
    </form>
  );
};

export default PropertySearch;