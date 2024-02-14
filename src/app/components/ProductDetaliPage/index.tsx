"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useProducts } from "@/app/context/ProductsContext";
import styles from "./ProductDetailPage.module.css";
import ProductInfo from "@/app/components/ProductInfo";
import { Product } from "@/app/types/product";
import { InfinitySpin } from "react-loader-spinner";

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { products, isLoading } = useProducts();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!isLoading) {
      const matchedProduct = products.find(
        (p) => `/product/${p.uri}` === pathname
      );

      if (!matchedProduct) {
        router.replace("/");
      } else {
        setProduct(matchedProduct);
      }
    }
  }, [products, isLoading, pathname, router]);

  if (isLoading) {
    return(<div className={styles.loader}><InfinitySpin  color="#4fa94d" /></div> );
  }

  if (!product) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Product Details</h1>
        <ProductInfo product={product} />
      </div>{" "}
    </>
  );
};

export default ProductDetailPage;
