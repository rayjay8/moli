import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// Product API functions

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

// Cart API functions

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

// Wishlist API functions

export const addToWishlist = async (productId) => {
  try {
    const response = await api.post("/api/wishlist/add", { productId });
    return response.data;
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    throw error;
  }
};

export const removeFromWishlist = async (productId) => {
  try {
    const response = await api.post("/api/wishlist/remove", { productId });
    return response.data;
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    throw error;
  }
};

export const getWishlist = async () => {
  try {
    const response = await api.get("/api/wishlist");
    return response.data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};

// Category API functions

export const fetchCategories = async () => {
  try {
    const response = await api.get("/api/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchCategory = async (id) => {
  try {
    const response = await api.get(`/api/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};

export const createCategory = async (categoryData) => {
  try {
    const response = await api.post("/api/categories", categoryData);
    return response.data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

export const updateCategory = async (categoryId, categoryData) => {
  try {
    const response = await api.put(
      `/api/categories/${categoryId}`,
      categoryData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const response = await api.delete(`/api/categories/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};

export default api;
