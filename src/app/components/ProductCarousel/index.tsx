'use client'
import React from "react";
import Product from "../Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductList } from "../../types/product";
import styles from "./ProductCarousel.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const ProductCarousel: React.FC<ProductList> = ({ products }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Navigation, Pagination]}
        className={styles.mySwiper}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product props={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles.swiperButtonNext} swiper-button-next`}>
        <ArrowForwardIosRoundedIcon />
      </div>
      <div className={`${styles.swiperButtonPrev} swiper-button-prev`}>
        <ArrowBackIosNewRoundedIcon />
      </div>
    </>
  );
};


export default ProductCarousel;

