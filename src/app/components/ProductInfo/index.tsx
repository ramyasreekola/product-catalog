import React from "react";
import styles from "./ProductInfo.module.css";
import { Product, ColorLink } from "@/app/types/product";
import { formatImageUrl, galleryImageData } from "@/app/utils";
import ProductImageSlider from "../ProductImageSlider";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const variant = product.productVariants[0];
  const images = galleryImageData(variant);
  const imageUrls = images?.map((image) => formatImageUrl(image, product.uri));
  const [selectedColorVariant, setSelectedColorVariant] = React.useState(
    product.colorLinks[0]
  );
  const handleColorVariantClick = (colorVariant: ColorLink) => {
    //TODO - router.push(colorVariant.uri);
    setSelectedColorVariant(colorVariant);
  };

  return (
    <div className={styles.productInfoContainer}>
      <ProductImageSlider imageUrls={imageUrls || []} />

      <div className={styles.productDetailsSection}>
        <h1 className={styles.productName}>{product.name}</h1>
        <div className={styles.productDescription}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <p className={styles.productPrice}>{variant.price.formattedPrice}</p>
        <h3>Colors:</h3>
        <div className={styles.colorVariantsSection}>
          {product.colorLinks.map((colorVariant) => (
            <div
              key={colorVariant.colorId}
              className={`${styles.colorVariant} ${
                selectedColorVariant.colorId === colorVariant.colorId
                  ? styles.active
                  : ""
              }`}
              onClick={() => handleColorVariantClick(colorVariant)}
            >
              <img
                src={formatImageUrl(colorVariant.retailImage, product.uri)}
                alt={colorVariant.colorName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
