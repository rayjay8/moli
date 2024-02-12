import React from "react";
import styles from "@/styles/Product.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Product = ({ id, name, price, rating }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className={styles.product}>
        <div className={styles.image}></div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>₹ {price}</div>
        <div className={styles.rating}>{rating} ★</div>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </Link>
  );
};

export default Product;
