import "./About.css";

export default function About() {
  return (
    <section className="about">
      
      <div className="aboutHero">
        <h1>About Us</h1>
        <p>We create modern, fast, and user-friendly web experiences.</p>
      </div>

      <div className="aboutContainer">
        <div className="aboutCard">
          <h2>Who We Are</h2>
          <p>
            We are passionate developers focused on building clean and
            efficient web applications using modern technologies like
            React and Next.js.
          </p>
        </div>

        <div className="aboutCard">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality digital solutions that
            help businesses grow and users enjoy seamless experiences.
          </p>
        </div>


        <div className="aboutCard">
          <h2>What We Do</h2>
          <p>
            From frontend design to backend integration, we handle everything
            to create complete and scalable web applications.
          </p>
        </div>
      </div>

      <div className="aboutCTA">
        <h2>Want to work with us?</h2>
        <p>Let’s build something amazing together.</p>
        <button>Contact Us</button>
      </div>
    </section>
  );
};