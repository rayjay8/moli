import { useState, useEffect } from "react";
import { fetchCart, removeCartItem } from "@/utils/api";
import DefaultLayout from "@/layouts/DefaultLayout";
import styles from "@/styles/cart.module.scss";
import Image from "next/image";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

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

  useEffect(() => {
    if (cart) {
      const total = cart.items.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);
      setTotalAmount(total);
    }
  }, [cart]);

  const handleRemoveItem = async (productId) => {
    try {
      await removeCartItem(productId);

      const updatedCart = await fetchCart();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <DefaultLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Cart</h1>
        <div className={styles.cart}>
          {cart ? (
            <div className={styles.items}>
              <p className={styles.totalItems}>
                Total Items: {cart.items.length}
              </p>
              {cart.items.map((item) => (
                <div key={item.product._id} className={styles.itemContainer}>
                  <div className={styles.thumb}></div>
                  <div className={styles.details}>
                    <p className={styles.itemName}>{item.product.name}</p>
                    <p className={styles.quantity}>Quantity: {item.quantity}</p>
                  </div>
                  <div className={styles.price}>
                    <p>${item.product.price}</p>
                    <div
                      className={styles.bin}
                      onClick={() => handleRemoveItem(item.product._id)}
                    >
                      <Image
                        src="/images/bin.svg"
                        alt="bin"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <div className={styles.checkout}>
            <h1 className={styles.heading}>Checkout</h1>
            <div className={styles.total}>
              <div className={styles.left}>
                <p>Total:</p>
                <div className={styles.coupon}>
                  Apply Coupon
                  <Image
                    src="/images/coupon.svg"
                    alt="coupon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div>
                <div className={styles.prices}>
                  {cart &&
                    cart.items.map((item) => (
                      <p key={item.product._id}>
                        {item.product.price} x {item.quantity}
                      </p>
                    ))}
                </div>
                <hr />
                <p className={styles.totalAmount}>${totalAmount}</p>
              </div>
            </div>
            <button className={styles.buy}>Buy Now</button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
