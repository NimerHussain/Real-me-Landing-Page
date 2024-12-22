import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './MainContent.module.css';

const products = [
  {
    image: 'https://static2.realme.net/images/realme-c75/173191818081872d7cf8c220b41c89d66e6c16f785ade.webp',
    title: 'Realme C75',
    description: 'IP69 Dust & Water Resistance | 6000mAh Battery',
  },
  {
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/s/8/6/narzo-60-5g-rmx3750-realme-original-imah4m4gnbtqghxg.jpeg?q=20&crop=false',
    title: 'Realme Narzo 60',
    description: 'MediaTek Dimensity 6020 | 120Hz AMOLED Display',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1nYqEtk8LxgyR6nuKZzo5PpbALVNnnneSQ&s',
    title: 'Realme GT Neo 5',
    description: '240W Fast Charging | 1TB Storage Option',
  },
];

const MainContent = () => {
  return (
    <section className={styles.mainContent}>
      <h1>Smartphones</h1>
      <div className={styles.cardContainer}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MainContent;
