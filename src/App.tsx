import React from 'react';

import Header from './Header';
import styles from './App.module.css';

import Hero from './Hero';

import PropertySearch from './PropertySearch';

import FeaturedProperties from './FeaturedProperties';

import Services from './Services';

import Contact from './Contact';

import Footer from './Footer';

const App: React.FC = () => {

  return (

    <div className={styles.app}>

      <Header />

       <main>

        <Hero />

        <PropertySearch />

        <FeaturedProperties />

        <Services />

        <Contact />

      </main>
      <Footer />
    </div>

  );

};


export default App;
