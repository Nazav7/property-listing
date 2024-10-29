import React from 'react';

import styles from './ServiceCard.module.css';


interface ServiceCardProps {

  icon: string;

  title: string;

  description: string;

}


const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {

  return (

    <div className={styles.serviceCard}>

      <img src={icon} alt="" className={styles.serviceIcon} />

      <h3 className={styles.serviceTitle}>{title}</h3>

      <p className={styles.serviceDescription}>{description}</p>

    </div>

  );

};


export default ServiceCard;