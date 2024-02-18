import Image from "next/image";
import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import { useState } from "react";

const Header = ({ toggleMenu }) => {
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <Image src="/images/menu.svg" alt="menu" width={35} height={35} />
        </div>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={100} height={50} />
        </Link>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.accountIcons}>
          <Link href="/cart">
            <Image src="/images/cart-1.svg" alt="cart" width={30} height={30} />
          </Link>
          <Link href="/wishlist">
            <Image
              src="/images/heart.svg"
              alt="wishlist"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/account">
            <Image src="/images/user-2.svg" alt="user" width={30} height={30} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
