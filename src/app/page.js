// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Phone, MapPin, Github, Linkedin, Twitter, 
  ExternalLink, Code, Smartphone, Shield 
} from 'lucide-react';

// Make sure globals.css is imported in layout.tsx or _app.tsx
// All styles are now in app/globals.css (or styles/globals.css)

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on link
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-container">
      {/* Overlay for mobile menu */}
      <div 
        className="overlay" 
        style={{ display: menuOpen ? 'block' : 'none' }}
        onClick={closeMenu}
      />

      {/* ==================== HEADER ==================== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Replaced RN text with signature image */}
          <div className="logo">
            <img 
              src="/richysignature.png" 
              alt="Richard Ngasike Signature" 
              style={{ height: '45px', width: 'auto' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-desktop">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Hamburger Menu Button */}
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <nav 
        className="nav-mobile" 
        style={{ right: menuOpen ? '0' : '-100%' }}
      >
        <div className="nav-mobile-header">
          <div className="nav-mobile-logo">
            <img 
              src="/richysignature.png" 
              alt="Richard Ngasike Signature" 
              style={{ height: '40px', width: 'auto' }}
            />
          </div>
          <button className="close-btn" onClick={closeMenu}>
            <X size={28} />
          </button>
        </div>
        <ul className="nav-mobile-list">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Richard Ngasike</h1>
            <div className="subtitle">Full-Stack Developer & Ethical Hacker</div>
            <p>
              Passionate about crafting elegant mobile applications, robust web solutions,
              and ensuring digital security through ethical hacking practices. With expertise
              spanning multiple technologies, I transform ideas into powerful, secure digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View Projects
                <ExternalLink size={20} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/richardngasike" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/richard-ngasike-6247b5232/" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/sudopacmansyu" className="social-link" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="blob-container">
              <div className="blob">
                <img
                  src="/richy1.png"
                  alt="Richard Ngasike"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">What I Do</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">
                <Smartphone size={30} />
              </div>
              <h3>Mobile Development</h3>
              <p>
                Creating intuitive and performant mobile applications for iOS and Android
                using React Native, Flutter, and native technologies. Focus on user experience,
                smooth animations, and offline-first architecture.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Code size={30} />
              </div>
              <h3>Web Development</h3>
              <p>
                Building modern, scalable web applications with React, Next.js, Node.js,
                and PostgreSQL. Specialized in creating responsive designs, RESTful APIs,
                and full-stack solutions that drive business growth.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Shield size={30} />
              </div>
              <h3>Ethical Hacking</h3>
              <p>
                Conducting penetration testing, vulnerability assessments, and security audits
                to protect systems from cyber threats. Certified in industry-standard security
                practices and committed to safeguarding digital assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK SECTION ==================== */}
      <section id="skills" className="tech-stack">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="tech-grid">
            <TechCategory
              title="Frontend Development"
              icon={<Code size={24} />}
              skills={[
                { name: "React & Next.js", percentage: 95 },
                { name: "JavaScript/TypeScript", percentage: 92 },
                { name: "HTML5 & CSS3", percentage: 98 },
                { name: "Tailwind CSS", percentage: 90 }
              ]}
            />
            <TechCategory
              title="Mobile Development"
              icon={<Smartphone size={24} />}
              skills={[
                { name: "React Native", percentage: 90 },
                { name: "Flutter", percentage: 85 },
                { name: "iOS (Swift)", percentage: 78 },
                { name: "Android (Kotlin)", percentage: 80 }
              ]}
            />
            <TechCategory
              title="Backend & Database"
              icon={<Code size={24} />}
              skills={[
                { name: "Node.js & Express", percentage: 88 },
                { name: "Python & Django", percentage: 82 },
                { name: "PostgreSQL", percentage: 85 },
                { name: "PostgreSQL", percentage: 80 } // Note: duplicate entry
              ]}
            />
            <TechCategory
              title="Security & Testing"
              icon={<Shield size={24} />}
              skills={[
                { name: "Penetration Testing", percentage: 87 },
                { name: "Network Security", percentage: 85 },
                { name: "OWASP Top 10", percentage: 92 },
                { name: "Burp Suite & Metasploit", percentage: 83 }
              ]}
            />
            <TechCategory
              title="DevOps & Tools"
              icon={<Code size={24} />}
              skills={[
                { name: "Git & GitHub", percentage: 95 },
                { name: "Docker", percentage: 82 },
                { name: "AWS & Azure", percentage: 78 },
                { name: "CI/CD Pipelines", percentage: 80 }
              ]}
            />
            <TechCategory
              title="Design & UI/UX"
              icon={<Code size={24} />}
              skills={[
                { name: "Figma", percentage: 88 },
                { name: "Adobe XD", percentage: 82 },
                { name: "Responsive Design", percentage: 95 },
                { name: "User Testing", percentage: 85 }
              ]}
            />
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className="projects">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <ProjectCard
              icon="📱"
              category="Mobile App"
              title="FinTrack - Expense Manager"
              description="A comprehensive mobile application for tracking personal finances with AI-powered insights, budget planning, and expense categorization. Features real-time synchronization and offline support."
              tags={["React Native", "Firebase", "TypeScript", "Redux"]}
              link="#"
            />
            <ProjectCard
              icon="🌐"
              category="Web Application"
              title="E-Commerce Platform"
              description="Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard. Built with modern technologies for scalability and performance."
              tags={["Next.js", "Node.js", "PostgreSQL", "Stripe"]}
              link="#"
            />
            <ProjectCard
              icon="🔒"
              category="Security Project"
              title="VulnScanner Pro"
              description="Automated vulnerability scanner for web applications. Identifies common security flaws, generates detailed reports, and provides remediation recommendations based on OWASP guidelines."
              tags={["Python", "Flask", "SQLite", "BeautifulSoup"]}
              link="#"
            />
            <ProjectCard
              icon="📊"
              category="Web Application"
              title="Analytics Dashboard"
              description="Real-time analytics dashboard for business intelligence with interactive charts, customizable widgets, and data export capabilities. Handles large datasets efficiently."
              tags={["React", "D3.js", "Express", "PostgreSQL"]}
              link="#"
            />
            <ProjectCard
              icon="🎮"
              category="Mobile App"
              title="GameHub Social"
              description="Social networking platform for gamers with chat, tournaments, leaderboards, and live streaming integration. Cross-platform support for seamless gaming experience."
              tags={["Flutter", "Firebase", "WebRTC", "Dart"]}
              link="#"
            />
            <ProjectCard
              icon="🔐"
              category="Security Tool"
              title="SecureAuth System"
              description="Multi-factor authentication system with biometric support, encrypted data storage, and audit logging. Implements industry-standard security protocols and compliance measures."
              tags={["Node.js", "JWT", "Redis", "bcrypt"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities.
                Whether you need a mobile app, a secure web application, or a security
                audit, feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={24} />
                  <span>richardngasike1999@email.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={24} />
                  <span>+254 718 959 781</span>
                </div>
                <div className="contact-item">
                  <MapPin size={24} />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="section-container">
          <p>&copy; 2024 Richard Ngasike. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

/**
 * Tech Category Component
 */
const TechCategory = ({ title, icon, skills }) => {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="tech-category">
      <h3>{icon} {title}</h3>
      {skills.map((skill, index) => (
        <div key={index} className="tech-item">
          <div className="tech-header">
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: animate ? `${skill.percentage}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Project Card Component
 */
const ProjectCard = ({ icon, category, title, description, tags, link }) => {
  return (
    <div className="project-card">
      <div className="project-image">{icon}</div>
      <div className="project-content">
        <div className="project-category">{category}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">{tag}</span>
          ))}
        </div>
        <a href={link} className="project-link">
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
