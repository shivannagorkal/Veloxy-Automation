import { useEffect } from "react";
import "../styles/home.css";


export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const onScroll = () => {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="home">
      {/* NAVBAR */}
      <nav className="nav">
        <h1>Veloxy Automation</h1>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero reveal">
        <h2>Automation that works while you sleep</h2>
        <p>
          We build intelligent automation systems that eliminate manual work
          and help businesses scale faster.
        </p>
        <button>Get Started</button>
      </section>

      {/* SERVICES */}
      <section id="services" className="section reveal">
        <h3>Our Services</h3>
        <div className="cards">
          <div className="card">Business Process Automation</div>
          <div className="card">AI Workflow Integration</div>
          <div className="card">Custom Software Solutions</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section reveal">
        <h3>Projects</h3>
        <div className="cards">
          <div className="card">CRM Automation System</div>
          <div className="card">Lead Management Bot</div>
          <div className="card">Internal Workflow Dashboard</div>
        </div>
      </section>

      {/* PRICING */}
  <section id="pricing" className="section reveal">
  <h3>Pricing</h3>

  <div className="pricing">
    <div className="price-card">
      <h4>Starter</h4>
      <p className="price">₹9,999</p>
      <ul>
        <li>Basic Automation</li>
        <li>Email Support</li>
        <li>1 Workflow</li>
      </ul>
      <button>Get Started</button>
    </div>

    <div className="price-card featured">
      <h4>Professional</h4>
      <p className="price">₹24,999</p>
      <ul>
        <li>Advanced Automation</li>
        <li>Priority Support</li>
        <li>5 Workflows</li>
      </ul>
      <button>Most Popular</button>
    </div>

    <div className="price-card">
      <h4>Enterprise</h4>
      <p className="price">Custom</p>
      <ul>
        <li>Unlimited Automation</li>
        <li>Dedicated Support</li>
        <li>Custom Solutions</li>
      </ul>
      <button>Contact Us</button>
    </div>
  </div>
  </section>

      {/* CONTACT */}
  <section id="contact" className="section reveal">
  <h3>Contact Us</h3>

  <form
    className="contact-form"
    action="https://formspree.io/f/abcdwxyz"
    method="POST"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
    />

    <textarea
      name="message"
      placeholder="Tell us about your automation needs..."
      rows="5"
      required
    ></textarea>

    <button type="submit">Send Message</button>
  </form>
  </section>



      {/* FOOTER */}
      <footer id="contact" className="footer">
        <p>© 2025 Veloxy Automation. All rights reserved.</p>
      </footer>
    </div>
  );
}
