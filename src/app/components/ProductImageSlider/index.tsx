import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ProductImageSlider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

interface ProductImageSliderProps {
  imageUrls: string[];
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({
  imageUrls,
}) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {imageUrls.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Image ${index}`}
              className={styles.imageContainer}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;
