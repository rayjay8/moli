import { useState } from "react";
import Header from "../components/Header";
import Menu from "@/components/Menu";
import styles from "../styles/styles.module.scss";

const DefaultLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.defaultLayout}>
      <Header toggleMenu={toggleMenu} />
      {isMenuOpen && <Menu closeMenu={closeMenu} />}
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default DefaultLayout;
