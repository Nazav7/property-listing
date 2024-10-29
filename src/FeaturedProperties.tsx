import React from 'react';
import PropertyCard from './PropertyCard';
import styles from './FeaturedProperties.module.css';

const featuredProperties = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/449f57311335cd16a8ded4bb27dcd49f7d6eba4f1212fee961dd2e3d61b819b1?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36",
    price: "USD 43.000",
    type: "Casa en venta",
    location: "Olavarría, Sarmiento",
    area: "240 m²",
    bedrooms: "2 dorm."
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a93ca818d160a4f208127fe8ce7410dedd7b71f3c6a37a64a7a266c52008e6b?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36",
    price: "USD 43.000",
    type: "Casa en venta",
    location: "Olavarría, Sarmiento",
    area: "240 m²",
    bedrooms: "2 dorm."
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ff97e681c9b3b3e17577441070bc10568296b7fa039cff317d85c592ae4386f?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36",
    price: "USD 43.000",
    type: "Casa en venta",
    location: "Olavarría, Sarmiento",
    area: "240 m²",
    bedrooms: "2 dorm."
  }
];

const FeaturedProperties: React.FC = () => {
  return (
    <section className={styles.featuredProperties}>
      <h2 className={styles.sectionTitle}>Propiedades destacadas</h2>
      <div className={styles.propertySlider}>
        <button className={styles.sliderButton} aria-label="Previous property">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e092b37b-1098-4d70-97bc-7ede5fcf3e37?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.sliderIcon} />
        </button>
        <div className={styles.propertyList}>
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        <button className={styles.sliderButton} aria-label="Next property">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/857a6242-679a-47c3-bca4-4716036a471a?placeholderIfAbsent=true&apiKey=ad2f86923ca6443db89ca42533bdca36" alt="" className={styles.sliderIcon} />
        </button>
      </div>
      <a href="#all-properties" className={styles.viewAllButton}>
        VER TODAS LAS PROPIEDADES
      </a>
    </section>
  );
};

export default FeaturedProperties;

