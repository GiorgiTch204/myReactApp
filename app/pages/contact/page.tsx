import "./Contact.css";

export default function Contact(){
  return(
    <section className="contactContainer">
      <h2>Contact Us</h2>

      <form className="contactForm">

        <input type="text" placeholder="Your Name"/>

        <input type="email" placeholder="Your Email"/>

        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contactInfo">
        <p>Email: support@mywebsite.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </section>
  );
}