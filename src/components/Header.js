import React from "react";
import Image from "next/image";
import styles from "@/styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer}>
        <div className="header__menu-icon">
          <Image src="/images/menu.svg" alt="menu" width={35} height={35} />
        </div>
      </div>
      <div className="header__logo">
        <Link href={"/"}>
          <Image src="/images/logo.png" alt="logo" width={100} height={50} />
        </Link>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.header__account_icons}>
          <Link href={"/cart"}>
            <Image src="/images/cart-1.svg" alt="cart" width={30} height={30} />
          </Link>
          <Image src="/images/heart.svg" alt="user" width={30} height={30} />
          <Image src="/images/user-2.svg" alt="user" width={30} height={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
