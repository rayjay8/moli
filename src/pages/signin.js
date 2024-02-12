import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/auth.module.scss";
import DefaultLayout from "@/layouts/DefaultLayout";
import { login } from "@/utils/auth";
import router from "next/router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      console.log("User signed in successfully!");
      console.log("Token:", localStorage.getItem("token"));
      console.log("Refresh token:", localStorage.getItem("refreshToken"));
      router.push("/");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <DefaultLayout>
      <div className={styles.authContainer}>
        <Head>
          <title>Sign In</title>
        </Head>
        <h1>Sign In</h1>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;
