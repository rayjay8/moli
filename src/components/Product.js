import React from "react";
import styles from "@/styles/Product.module.scss";
import Image from "next/image";

const Product = ({ name, price, rating }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}></div>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.rating}>{rating} ★</div>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};

export default Product;
