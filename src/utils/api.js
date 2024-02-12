import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")} `,
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.get("/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await api.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const addToCart = async (productId, quantity) => {
  try {
    const response = await api.post("/api/cart/add", { productId, quantity });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const updateCartItem = async (productId, quantity) => {
  try {
    const response = await api.put(`/api/cart/update/${productId}`, {
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

export const removeCartItem = async (productId) => {
  try {
    const response = await api.delete(`/api/cart/remove/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing cart item:", error);
    throw error;
  }
};

export const fetchCart = async () => {
  try {
    const response = await api.get("/api/cart");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const addToWishlist = async (productId) => {
  try {
    const response = await api.post("/api/wishlist/add", { productId });
    return response.data;
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    throw error;
  }
};

export default api;
