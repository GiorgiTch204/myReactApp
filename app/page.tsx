"use client";
import styles from "./mainPage.module.css";
import { useEffect, useState } from "react";

type User={
  username: string;
  email: string;
  password: string;
}

export default function Home() {
  const [user, setUser]=useState<User|null>(null);

  useEffect(() => {
    const currentUser=localStorage.getItem("currentUser");

    if(currentUser){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(JSON.parse(currentUser));
    }
  }, []);

  return (
    <section className={styles.home}>

      <main>
        <h1>{user ? `Welcome, ${user.username}!` : "Welcome to My Website"}</h1>
      </main>

      <div className={styles.hero}>
        <h1>Welcome to My Website</h1>
        <p>Build modern, fast, and scalable web applications with ease.</p>
        <button>Get Started</button>
      </div>

      {/*Features Section*/}
      <div className={styles.features}>

        <div className={styles.featureCard}>
          <h3>Fast</h3>
          <p>Optimized performance for the best user experience.</p>
        </div>

        <div className={styles.featureCard}>
          <h3>Modern Design</h3>
          <p>Clean and beautiful UI with responsive layouts.</p>
        </div>

        <div className={styles.featureCard}>
          <h3>Secure</h3>
          <p>Built with best practices to ensure safety and reliability.</p>
        </div>

      </div>

      <div className={styles.cta}>
        <h2>Ready to start?</h2>
        <p>Let’s build something amazing together.</p>
        <button>Contact Us</button>
      </div>

    </section>
  );
}