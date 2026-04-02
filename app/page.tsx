"use client";
import "./mainPage.css";

export default function Home() {
  return (
    <section className="home">

      <div className="hero">
        <h1>Welcome to My Website</h1>
        <p>Build modern, fast, and scalable web applications with ease.</p>
        <button>Get Started</button>
      </div>

      {/*Features Section*/}
      <div className="features">

        <div className="featureCard">
          <h3>Fast</h3>
          <p>Optimized performance for the best user experience.</p>
        </div>

        <div className="featureCard">
          <h3>Modern Design</h3>
          <p>Clean and beautiful UI with responsive layouts.</p>
        </div>

        <div className="featureCard">
          <h3>Secure</h3>
          <p>Built with best practices to ensure safety and reliability.</p>
        </div>

      </div>

      <div className="cta">
        <h2>Ready to start?</h2>
        <p>Let’s build something amazing together.</p>
        <button>Contact Us</button>
      </div>

    </section>
  );
}