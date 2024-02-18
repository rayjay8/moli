import React from "react";
import styles from "@/styles/Product.module.scss";
import Image from "next/image";
import Link from "next/link";
import { addToWishlist } from "@/utils/api";

const Product = ({ id, name, price, rating }) => {
  const handleAddToWishlist = async () => {
    try {
      console.log("Adding to wishlist:", id);
      await addToWishlist(id);
      console.log("Successfully added to wishlist!");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <Link href={`/products/${id}`}>
          <div className={styles.thumb}></div>
        </Link>
        <div className={styles.favorite} onClick={handleAddToWishlist}>
          <Image src="/images/heart.svg" alt="product" width={22} height={22} />
        </div>
      </div>
      <Link href={`/products/${id}`} className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>$ {price}</div>
        <div className={styles.rating}>{rating} ★</div>
      </Link>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};

export default Product;
