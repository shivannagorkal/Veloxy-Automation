import { useEffect, useState } from "react";
import { CircleDot, ArrowRight, GitBranch, Zap, SquareCode,GitFork, Youtube, Twitter, Instagram, Linkedin, Menu, X } from "lucide-react";
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
        <h1>Debug Dynamos</h1>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="main-nav">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div id="main-nav" className={`nav-links ${menuOpen ? "active" : ""}` }>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#AboutUs" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#Instructors" onClick={() => setMenuOpen(false)}>Our Team</a>
          <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Support</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero reveal">
        <div className="text">
        <h2 className="heading"> Learn Coding from  <span className="gradient-text">Zero to Hero, </span>  Practical. Beginner-Friendly.</h2>
        <p>
          We are a passionate team helping students learn Python, C++, AI, and real-world projects in the easiest way possible.
        </p>
        <div className="hero-buttons">
          <a href="http://www.youtube.com/@DebugDynamosHQ"><button className="primary-btn">
            ▶ Watch on YouTube →
          </button></a>

          <a href="https://chat.whatsapp.com/BjmZkH49FB3Aor4n2H12pY"><button className="secondary-btn">
            👥 Join Our Community
          </button></a>
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

      {/* About us8 */}
      <section id="AboutUs" className="section reveal">
        <h3 className="header">About Us</h3>
        <p>We are a group of learners, creators, and future developers working together to make coding simple for everyone.</p>
        <h2 className="heading">Our journey started with <span className="gradient-text"> one goal:</span></h2>
        <p className="ml-6 mb-6">   👉 Help beginners who don’t know where to start in programming.</p>
        <p>Through step-by-step lessons, daily practice problems, and real projects, we guide students from zero knowledge to real skills.</p>
        <h4><b>Our Mission:</b></h4>
        <p>To make <b>quality coding education free,</b> simple, and accessible to <b>every student.</b></p>
        <h4><b>Our Vision:</b></h4>
        <p>To build a strong community of <b>skilled developers and innovators</b> across India and beyond.</p>
      </section>

      <hr />

      {/* FEATURES */}
      <section className="section reveal">
        <h3 className="header">What We Teach</h3>
        <h2 className="heading">What We Teach to Help <span className="gradient-text"> You Grow.</span></h2>
        <p>Our learning content is designed especially for complete beginners who want to build strong programming skills step by step.
        <br/>We focus on clear explanations, daily practice, and real-world projects so that every student can move from zero knowledge to real confidence in coding.</p>
        <div className="cards">
          <div className="card">
            <div className="symbole s-3">🐍</div>
            <h4>Python Programming</h4>
            <p>Learn Python from the very basics to advanced concepts in a simple and practical way.
                We cover syntax, logic building, problem solving, and real mini-projects so you can start building applications with confidence.</p>
          </div>
          <div className="card">
            <div className="symbole s-2">🌐 </div>
            <h4>Web Development</h4>
            <p>Create modern, responsive websites using HTML, CSS, and JavaScript.
                Learn how to design, build, and publish real websites and web projects.</p>
          </div>
          <div className="card">
            <div className="symbole s-1"><SquareCode/></div>
            <h4>C++ Fundamentals</h4>
            <p>Understand the core foundation of programming through C++.
                You will learn loops, conditions, arrays, functions, and problem-solving techniques that are useful for competitive programming and interviews.</p>
          </div>
          <div className="card">
            <div className="symbole s-5"><GitFork className="rotate-90 size-10"/>
            </div>
            <h4>Automation</h4>
            <p>Learn how to automate real-world tasks using n8n, a powerful workflow automation tool.
                We teach you how to connect apps, create smart workflows, and save time by building no-code and low-code automations for everyday problems and business needs.</p>
          </div>
          <div className="card">
            <div className="symbole s-4">🤖</div>
            <h4>AI Tools & Productivity</h4>
            <p>Discover powerful AI tools that help in coding, designing, writing, learning, and automation.
                Understand how to use AI smartly to save time and increase productivity in studies and projects.</p>
          </div>
          <div className="card">
            <div className="symbole s-6">🚀 </div>
            <h4>Real-World Projects</h4>
            <p>Learning becomes powerful when you build something real.
                We create beginner-friendly projects like calculators, chatbots, and mini AI apps to give you practical experience and portfolio-ready work.</p>
          </div>
          
        </div>
      </section>

      <hr />


    {/*abuot instructors*/}
    <section id="Instructors" className="section reveal">
      <h3 className="header mb-10">👥 MEET OUR TEAM</h3>
      <h2 className="heading text-3xl">We are a small but passionate team working together to create <span className="gradient-text"> powerful learning content.</span></h2>
      <p>Our instructors are seasoned professionals with years of experience in automation and no-code tools. They bring real-world insights and practical knowledge to help you master the art of automation.</p>
      
      <div className="team-roles mt-6 mb-6">
        <h2 className="text-3xl text-center mb-5">Roles in our team include:</h2>
        <div className="team-card">
          <div className="category">
            <h4 className="text-2xl font-bold">Programming Trainers.</h4>

            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-2 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Dhanush BM</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>

            <div className="instructors">
              <img src="/images/123.JPG" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Shivanna</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>
            
            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Sachinkumar</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>
          
            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Athman TK</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>
            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Hemanth</p>
                <p className="mt-0">B.Tech CSE in SE</p>
              </div>
            </div>
          </div>
          
          <div className="category">
            <h4 className="text-2xl font-bold">Designers & Editors.</h4>
            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Ravi Shankar</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>
            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Uday KS</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>
            <div className="instructors">
              <img src="/images/dileep.JPG" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Dileep</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>
            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Tarun kumar K</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>
          </div>
          <div className="category">
            <h4 className="text-2xl font-bold">Community Supportors.</h4>
            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Tilak</p>
                <p className="mt-0">B.Tech in AIML</p>
              </div>
            </div>
            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Sujith</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>
            <div className="instructors">
              <img src="" alt="Instructor 1" className="pic" />
              <div className="text-left mt-1 flex flex-col gap-0">
                <p className="mb-0 text-lg font-bold">Veeresh</p>
                <p className="mt-0">B.Tech CSE in AI</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>  
        
      

      <p>Together, we grow… and help others grow too.</p>
    </section>

    <hr />

    {/* Community & Courses */}
    <section id="community" className="section reveal">
      <h3 className="header">Join Our Community</h3>
      <h2 className="heading">Learning is better when we <span className="gradient-text"> learn together.</span></h2>
      <p>Become part of our growing student community:</p>
      <ul className="community-list">
        <li>👨‍💻 Get daily coding questions</li>
        <li>📚 Receive learning resources</li>
        <li>👥 Connect with other learners</li>
        <li>🚀 Stay motivated on your journey</li>
      </ul>

      <div className="community-buttons mt-6">
        <a href="https://whatsapp.com/channel/0029Vb7zYPN05MUVceADMD2Q"><button className="primary-btn ml-3 mr-3 md-mr-10">
          ▶ Join Our Whatsapp Channel
        </button></a>

        <a href="https://chat.whatsapp.com/BjmZkH49FB3Aor4n2H12pY"><button className="secondary-btn ml-3 mr-3">
          👥 Join Our Whatsapp Community
        </button></a>
      </div>
    </section>

    <hr />


  {/* SPACER */}
  <section className="spacer">
    <div className="follow-us text-center">
      <h1 className="header">Debug Dynamos</h1>
      <p>Our support team is always here to help you on your learning journey. 
        Whether you have questions about our tutorials, projects, or community, feel free to reach out anytime. 
        We aim to respond quickly and guide you with clear and helpful solutions so you can continue learning without interruption.
      </p>
      <div className="follow-us-buttons flex items-center justify-center gap-4 mt-4">
        <a href="http://www.youtube.com/@DebugDynamosHQ" type="button" className="follow-btn"><Youtube /></a> 
        <a href="#hero" type="button" className="follow-btn"><Twitter /></a> 
        <a href="#hero" type="button" className="follow-btn"><Instagram /></a> 
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
        <li><a href="#community">Community</a></li>
        <li><a href="http://www.youtube.com/@DebugDynamosHQ">YouTube</a></li>
        <li>Success Stories</li>
      </ul>
    </div>
    <div className="courses">
      <h4 className="head">Company</h4>
      <ul>
        <li><a href="#AboutUs">About</a></li>
        <li>Instructors</li>  
        <li>Pricing</li>
        <li>Reviews</li>
        <li><a href="#contact">Contact</a></li>
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
