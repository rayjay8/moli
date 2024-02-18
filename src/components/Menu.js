import React, { useState, useEffect } from "react";
import styles from "@/styles/Menu.module.scss";
import { fetchCategories } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const Menu = ({ closeMenu }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  const handleCloseMenu = () => {
    closeMenu();
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={handleCloseMenu}>
        <Image src="/images/cross.svg" alt="close" width={25} height={25} />
      </div>
      <div className={styles.menu}>
        <div className={styles.categories}>
          <h1>Categories →</h1>
          <div className={styles.category}>
            {categories.map((category) => (
              <div key={category.id} className={styles.categoryItem}>
                <Link href={`/categories/${category.id}`}>
                  <span>{category.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Link href="/cart">
          <span>
            <h1>Cart</h1>
          </span>
        </Link>
        <Link href="/wishlist">
          <span>
            <h1>Wishlist</h1>
          </span>
        </Link>
        <Link href="/account">
          <span>
            <h1>Account</h1>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
