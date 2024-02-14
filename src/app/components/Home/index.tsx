'use client'

import { useEffect } from "react";
import { Product as ProductType } from "../../types/product";
import ProductCarousel from "../ProductCarousel";
import styles from './Home.module.css';
import { useProducts } from '@/app/context/ProductsContext';

const HomePage: React.FC = () => {
  const { products, error } = useProducts();

  if (error) {
    return <div>Error loading categories: {error}</div>;
  }

  return (
    <div>
      <h1 className={styles.header}>Explore Products</h1>
      <ul className={styles.listContainer}>
       <ProductCarousel products={products} />
      </ul>
    </div>
  );
};

export default HomePage;
