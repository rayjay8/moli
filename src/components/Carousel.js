// Carousel Component
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchProducts } from "@/utils/api";
import Product from "@/components/Product";
import styles from "@/styles/Carousel.module.scss";

const Carousel = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  console.log(products);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carousel}>
      <h1>{title}</h1>
      <Slider {...settings} className={styles.slider}>
        {products.map((product) => (
          <div key={product.id}>
            <Product
              id={product._id}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
