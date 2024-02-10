import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const register = async (username, email, password) => {
  try {
    const response = await api.post("/api/users/signup", {
      username,
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const response = await api.post("/api/auth/signin", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export { api, register, login, logout, isAuthenticated };
