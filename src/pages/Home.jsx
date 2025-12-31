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
          <a href="#Features">Features</a>
          <a href="#Applications">Applications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero reveal">
        <div className="text">
        <h2 className="heading"> Automation you can{" "} <span className="gradient-text">visually build</span> {" "} and scale</h2>
        <p>
          Build intelligent workflows and AI automation without complexity.
          Faster execution, better control, real results.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">
            Get started free →
          </button>

          <button className="secondary-btn">
            ▶ Watch demo
          </button>
        </div>
        </div>
        {/* Visual Preview */} 
        <div className="hero-preview">
          <div className="preview-window">
            <div className="window-dots">
              <span className="dot dot1"></span><span className="dot dot2"></span><span className="dot dot3"></span>
            </div>
        
            <div className="preview-canvas">
              <div className="node green">Trigger</div>
              <div className="node purple">AI</div>
              <div className="node blue">Logic</div>
              <div className="node pink">Action</div>
            </div>
            
          </div>
             
        
          <div className="floating-badge">✨ No code required</div>
        </div>

      </section>

      {/* FEATURES */}
      <section id="Features" className="section reveal">
        <h3 className="header">Features</h3>
        <h2 className="heading">Create anything.<span className="gradient-text"> Orchestrate everything.</span></h2>
        <p>From simple workflows to managing AI and automation systems across your entire business.</p>
        <div className="cards">
          <div className="card">
            <h4>Build fast, be first</h4>
            <p>Whatever you want to automate, get moving instantly. Visually design solutions without code to save time.</p>
          </div>
          <div className="card">
            <h4>AI-Powered Intelligence</h4>
            <p>Plug in AI apps for smarter automations. Let machine learning optimize your workflows automatically.</p>
          </div>
          <div className="card">
            <h4>Enterprise Security</h4>
            <p>Built-in GDPR and SOC 2 Type II compliance, encryption, and SSO to keep your data secure.</p>
          </div>
          <div className="card">
            <h4>Lightning Fast</h4>
            <p>Execute thousands of operations per second with our optimized infrastructure and smart caching.</p>
          </div>
          <div className="card">
            <h4>Scalable Architecture</h4>
            <p>From simple workflows to complex enterprise systems, scale seamlessly as your needs grow.</p>
          </div>
          <div className="card">
            <h4>3,000+ Integrations</h4>
            <p>Connect your entire tech stack with our massive library of pre-built apps and custom integrations.</p>
          </div>
          
        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="Applications" className="reveal">
        <h3 className="header">Applications</h3>
        <h2 className="heading">3,000+ pre-built apps. <span>Limitless integration.</span></h2>
        <p>Connect your entire tech stack instantly with our massive library of integrations.</p>

        <div className="app-cards">
          <div className="app-card">
            <p>Open AI</p>
          </div>
          <div className="app-card">
            <p>Slack</p>
          </div>
          <div className="app-card">
            <p>Hubspot</p>
          </div>
          <div className="app-card">
            <p>Salesforce</p>
          </div>
          <div className="app-card">
            <p>Notion</p>
          </div>
          <div className="app-card">
            <p>Gmail</p>
          </div>
          <div className="app-card">
            <p>Whatsapp</p>
          </div>
          <div className="app-card">
            <p>Instagram</p>
          </div>
          <div className="app-card">
            <p>Strip</p>
          </div>
          <div className="app-card">
            <p>Shopify</p>
          </div>
          <div className="app-card">
            <p>Airtable</p>
          </div>
          <div className="app-card">
            <p>Zoom</p>
          </div>
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
