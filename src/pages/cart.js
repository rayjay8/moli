import { useState, useEffect } from "react";
import { fetchCart } from "@/utils/api";
import DefaultLayout from "@/layouts/DefaultLayout";
import styles from "@/styles/cart.module.scss";

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartData = await fetchCart();
        setCart(cartData);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Cart</h1>
        {cart ? (
          <div>
            {cart.items.map((item) => (
              <div key={item.product._id} className={styles.itemContainer}>
                <p className={styles.itemName}>
                  Product Name: {item.product.name}
                </p>
                <p className={styles.quantity}>Quantity: {item.quantity}</p>
                {/* Add more information about the product if needed */}
              </div>
            ))}
            <p className={styles.totalItems}>
              Total Items: {cart.items.length}
            </p>
            {/* You can also display total price, checkout button, etc. */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Cart;
