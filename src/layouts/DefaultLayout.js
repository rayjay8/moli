import Header from "../components/Header";
import styles from "../styles/styles.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.defaultLayout}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default DefaultLayout;
