import { useEffect, useState } from "react";
import { CircleDot, ArrowRight, GitBranch, Zap, Rocket, Brain, ShieldCheck, Layers, Globe, Twitter, Instagram, Github, Linkedin, Menu, X } from "lucide-react";
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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      {/* NAVBAR */}
      <nav className="nav">
        <h1>Veloxy Automation</h1>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="main-nav">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div id="main-nav" className={`nav-links ${menuOpen ? "active" : ""}` }>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#Features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#Applications" onClick={() => setMenuOpen(false)}>Applications</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Support</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero reveal">
        <div className="text">
        <h2 className="heading"> Learn to <span className="gradient-text">automate anything</span>  with expert-led courses</h2>
        <p>
          Master automation tools, AI workflows, and no-code platforms. 
          From beginner to expert, learn the skills that companies are hiring for.
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
              <div className="node node-trigger">
              <div className="green">
                <CircleDot />
              </div>
              <p>Trigger</p>
              </div>
              <span className="dot-node dot-green"></span>
              <div className="node node-ai">
                <div className="purple">
                  <Zap /> 
                </div>
                <p>AI process</p>
              </div>
              <span className="dot-node dot-purple"></span>
              <div className="node node-logic">
                <div className="blue">
                  <GitBranch />
                </div>
                <p>Logic</p>
              </div>
              <span className="dot-node dot-blue"></span>
              <div className="node node-action">
                <div className="pink">
                  <ArrowRight />  
                </div>
                <p>Action</p>
              </div>
              <span className="dot-node dot-pink"></span>
            </div>
            
          </div>
             
        
          <div className="floating-badge">✨ No code required</div>
        </div>

      </section>

      <hr />

      {/* FEATURES */}
      <section id="Features" className="section reveal">
        <h3 className="header">Features</h3>
        <h2 className="heading">Learn once.<span className="gradient-text"> Automate forever.</span></h2>
        <p>From simple workflows to managing AI and automation systems across your entire business.</p>
        <div className="cards">
          <div className="card">
            <div className="symbole s-1"><Rocket /></div>
            <h4>Learn by Doings</h4>
            <p>Build real automation projects from day one. Hands-on exercises and practical assignments that mirror real-world scenarios.</p>
          </div>
          <div className="card">
            <div className="symbole s-2"><Brain /></div>
            <h4>Expert Instructors</h4>
            <p>Learn from industry professionals with years of experience in automation and AI. Get insider tips and best practices.</p>
          </div>
          <div className="card">
            <div className="symbole s-3"><ShieldCheck /></div>
            <h4>Certification Programs</h4>
            <p>Earn recognized certificates that prove your automation skills. Stand out in job applications and freelance platforms.</p>
          </div>
          <div className="card">
            <div className="symbole s-4"><Zap /></div>
            <h4>Self-Paced Learning</h4>
            <p>Study on your own schedule. Access courses 24/7 and learn at a pace that works for you.</p>
          </div>
          <div className="card">
            <div className="symbole s-5"><Layers /></div>
            <h4>Community Support</h4>
            <p>Join thousands of learners. Get help from peers, share projects, and network with automation professionals.</p>
          </div>
          <div className="card">
            <div className="symbole s-6"><Globe /></div>
            <h4>Lifetime Access</h4>
            <p>Pay once, access forever. All course materials, updates, and new content included at no extra cost.</p>
          </div>
          
        </div>
      </section>

      <hr />

      {/* APPLICATIONS */}
      <section id="Applications" className="reveal">
        <h3 className="header">Applications</h3>
        <h2 className="heading">20+ tools & platforms. <span className="">Complete mastery.</span></h2>
        <p>Master all major automation platforms and tools used by professionals worldwide.</p>

        <div className="app-cards">
          <div className="app-card">
            <h4 className="app-1">n8n</h4>
            <p>n8n</p>
          </div>
          <div className="app-card">
            <h4 className="app-2">Za</h4>
            <p>Zapier</p>
          </div>
          <div className="app-card">
            <h4 className="app-3">Ma</h4>
            <p>Make</p>
          </div>
          <div className="app-card">
            <h4 className="app-4">Gs</h4>
            <p>Google Sheets</p>
          </div>
          <div className="app-card">
            <h4 className="app-5">Pa</h4>
            <p>Power Automate</p>
          </div>
          <div className="app-card">
            <h4 className="app-6">In</h4>
            <p>Integromat</p>
          </div>
          <div className="app-card">
            <h4 className="app-7">Ai</h4>
            <p>ChatGpt</p>
          </div>
          <div className="app-card">
            <h4 className="app-8">Py</h4>
            <p>Python</p>
          </div>
          <div className="app-card">
            <h4 className="app-9">Js</h4>
            <p>JavaScript</p>
          </div>
          <div className="app-card">
            <h4 className="app-10">Wh</h4>
            <p>Webhooks</p>
          </div>
          <div className="app-card">
            <h4 className="app-11">Ap</h4>
            <p>APIs</p>
          </div>
          <div className="app-card">
            <h4 className="app-12">At</h4>
            <p>Airtable</p>
          </div>
          
        </div>
      </section>

      <hr />

    {/*abuot instructors*/}
    <section className="about-instructors">
      <h3 className="header">About Instructors</h3>
      <h2 className="heading">Learn from Industry Experts</h2>
      <p>Our instructors are seasoned professionals with years of experience in automation and no-code tools. They bring real-world insights and practical knowledge to help you master the art of automation.</p>
      <div className="instructors-container overflow-hidden flex gap-10">
      <div className="instructor-cards flex flex-row gap-10 p-10 pr-1 mr-0">
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" className="profile-pic" alt="Jane Doe" />
          <h4>Jane Doe</h4>
          <p>Automation Specialist with 10+ years in the industry.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" className="profile-pic" alt="John Smith" />
          <h4>John Smith</h4>
          <p>Senior Automation Engineer with enterprise experience.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/women/45.jpg" className="profile-pic" alt="Mary Green" />
          <h4>Mary Green</h4>
          <p>Automation Coach with a focus on no-code tools.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" className="profile-pic" alt="Jane Doe" />
          <h4>Jane Doe</h4>
          <p>Automation Specialist with 10+ years in the industry.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" className="profile-pic" alt="John Smith" />
          <h4>John Smith</h4>
          <p>Senior Automation Engineer with enterprise experience.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/women/45.jpg" className="profile-pic" alt="Mary Green" />
          <h4>Mary Green</h4>
          <p>Automation Coach with a focus on no-code tools.</p>
        </div>
      </div>

      <div className="instructor-cards flex flex-row gap-10 p-10 ml-0 pl-1">
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" className="profile-pic" alt="Jane Doe" />
          <h4>Jane Doe</h4>
          <p>Automation Specialist with 10+ years in the industry.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" className="profile-pic" alt="John Smith" />
          <h4>John Smith</h4>
          <p>Senior Automation Engineer with enterprise experience.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/women/45.jpg" className="profile-pic" alt="Mary Green" />
          <h4>Mary Green</h4>
          <p>Automation Coach with a focus on no-code tools.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" className="profile-pic" alt="Jane Doe" />
          <h4>Jane Doe</h4>
          <p>Automation Specialist with 10+ years in the industry.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" className="profile-pic" alt="John Smith" />
          <h4>John Smith</h4>
          <p>Senior Automation Engineer with enterprise experience.</p>
        </div>
        <div className="instructor-card">
          <img src="https://randomuser.me/api/portraits/women/45.jpg" className="profile-pic" alt="Mary Green" />
          <h4>Mary Green</h4>
          <p>Automation Coach with a focus on no-code tools.</p>
        </div>
      </div>
      </div>

    </section>
    <hr />
  {/* SPACER */}
  <section className="spacer">
    <div className="follow-us text-center">
      <h1 className="header">Veloxy-Automation</h1>
      <p>Learn automation from industry experts.
         Master no-code tools, AI workflows, and 
         turn your skills into a career.
      </p>
      <div className="follow-us-buttons flex items-center justify-center gap-4 mt-4">
        <a href="#hero" type="button" className="follow-btn"><Twitter /></a> 
        <a href="#hero" type="button" className="follow-btn"><Instagram /></a> 
        <a href="#hero" type="button" className="follow-btn"><Github /></a> 
        <a href="#hero" type="button" className="follow-btn"><Linkedin /></a> 
      </div>
    </div>
    <div className="courses">
      <h4 className="head">Courses</h4>
      <ul>
        <li>All Courses</li>
        <li>Beginner Path</li>
        <li>Advanced Path</li>
        <li>AI Automation</li>
        <li>Business Track</li>
        <li>Free Courses</li>
      </ul>
    </div>
    <div className="courses">
      <h4 className="head">Learning Paths</h4>
      <ul>
        <li>No-Code Tools</li>
        <li>Zapier Mastery</li>
        <li>Make.com Pro</li>
        <li>n8n Expert</li>
        <li>Python Automation</li>
        <li>Freelancing</li>
      </ul>
    </div>
    <div className="courses">
      <h4 className="head">Resources</h4>
      <ul>
        <li>Blog</li>
        <li>Tutorials</li>
        <li>Templates</li>
        <li>Community</li>
        <li>YouTube</li>
        <li>Success Stories</li>
      </ul>
    </div>
    <div className="courses">
      <h4 className="head">Company</h4>
      <ul>
        <li>About</li>
        <li>Instructors</li>  
        <li>Pricing</li>
        <li>Reviews</li>
        <li>Contact</li>
        <li>Affiliate Program</li>
      </ul>
    </div>
  </section>

<hr />
      {/* FOOTER */}
      <footer id="contact" className="footer">
        <p>© 2025 Veloxy Automation. All rights reserved.</p>
      </footer>
    </div>
  );
}
