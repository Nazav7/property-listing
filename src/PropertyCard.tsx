import React from 'react';

import styles from './PropertyCard.module.css';


interface PropertyCardProps {

  image: string;

  price: string;

  type: string;

  location: string;

  area: string;

  bedrooms: string;

}


const PropertyCard: React.FC<PropertyCardProps> = ({ image, price, type, location, area, bedrooms }) => {

  return (

    <div className={styles.propertyCard}>

      <img src={image} alt={type} className={styles.propertyImage} />

      <div className={styles.propertyInfo}>

        <p className={styles.propertyPrice}>{price}</p>

        <p className={styles.propertyType}>{type}</p>

        <p className={styles.propertyLocation}>{location}</p>

        <p className={styles.propertyDetails}>{area}</p>

        <p className={styles.propertyDetails}>{bedrooms}</p>

      </div>

    </div>

  );

};


export default PropertyCard;