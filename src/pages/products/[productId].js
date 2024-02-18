import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchProduct, addToCart, addToWishlist } from "@/utils/api";
import DefaultLayout from "@/layouts/DefaultLayout";
import styles from "@/styles/[productId].module.scss";
import Image from "next/image";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchProduct(productId);
        setProduct(productData);
        if (productData) {
          document.title = `${productData.name} - Your Website Title`;
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      console.log("Adding to cart:", productId, quantity);
      await addToCart(productId, quantity);
      console.log("Successfully added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleAddToWishlist = async () => {
    try {
      console.log("Adding to wishlist:", productId);
      await addToWishlist(productId);
      console.log("Successfully added to wishlist!");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  return (
    <DefaultLayout>
      {product ? (
        <div className={styles.layout}>
          <div className={styles.mediaGrid}>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
          </div>
          <div className={styles.details}>
            <h1>{product.name}</h1>
            <p className={styles.price}>$ {product.price}</p>
            <p className={styles.rating}>{product.rating}</p>
            <div className={styles.quantity}>
              <p>Quantity:</p>
              <div className={styles.quantityCounter}>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
            </div>
            <div className={styles.sizes}>
              <p>Select your size:</p>
              <div className={styles.sizeDisplay}>
                {product.sizes.map((size, index) => (
                  <input
                    key={index}
                    type="button"
                    value={size}
                    className={styles.sizeInput}
                  />
                ))}
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button} onClick={handleAddToCart}>
                Add to Cart
              </button>
              <div className={styles.favorite} onClick={handleAddToWishlist}>
                {" "}
                {/* Add onClick event */}
                <Image
                  src="/images/heart.svg"
                  alt="Favorite"
                  width={28}
                  height={28}
                />
              </div>
            </div>
            <div className={styles.description}>
              <h2>Description:</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </DefaultLayout>
  );
};

export default ProductPage;
