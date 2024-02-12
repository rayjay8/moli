import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/auth.module.scss";
import { register } from "@/utils/auth";
import DefaultLayout from "@/layouts/DefaultLayout";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      console.log("User signed up successfully!");
      console.log("Token:", localStorage.getItem("token"));
      router.push("/");
    } catch (error) {
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className={styles.authContainer}>
        <h1>Sign Up</h1>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default SignUp;
