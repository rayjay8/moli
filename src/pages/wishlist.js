import { useState, useEffect } from "react";
import { getWishlist } from "@/utils/api";
import DefaultLayout from "@/layouts/DefaultLayout";
import styles from "@/styles/wishlist.module.scss";
import Product from "@/components/Product";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const wishlistData = await getWishlist();
        setWishlist(wishlistData);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Wishlist</h1>
        <div className={styles.items}>
          {wishlist ? (
            wishlist.products && wishlist.products.length > 0 ? (
              wishlist.products.map((product) => (
                <Product
                  key={product._id} // Assuming _id is the unique identifier of your Product model
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                />
              ))
            ) : (
              <p>Your wishlist is empty.</p>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Wishlist;
