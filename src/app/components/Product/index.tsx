"use client";
import React from "react";
import { Product as ProductType } from "../../types/product";
import styles from "./Product.module.css";
import Link from "next/link";
import { imageData, formatImageUrl } from "@/app/utils/index";
interface ProductProps {
  props: ProductType;
}

const Product: React.FC<ProductProps> = ({ props }) => {
  const { name, productVariants, uri } = props;
  const variant = productVariants[0];
  const price = variant.price.formattedPrice;
  const image = imageData(variant);
  const imageUrl = formatImageUrl(image, uri);

  return (
    <section className={styles.productContainer}>
      <Link href={`/product/${uri}`} passHref className={styles.link}>
        <img src={imageUrl} alt={name} className={styles.imageContainer} />
        <div className={styles.productTextContainer}>
          <h3>{name}</h3>
          <p>{variant.bodyfitName}</p>
          <p>{price}</p>
        </div>
      </Link>
    </section>
  );
};

export default Product;
