"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Code, Smartphone, Shield } from 'lucide-react';


const PortfolioApp = () => {
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
      <style jsx>{`
        /* ==================== GLOBAL STYLES ==================== */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-container {
          font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* ==================== HEADER STYLES ==================== */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.2rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-desktop {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-desktop a {
          text-decoration: none;
          color: #4a5568;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-desktop a:hover {
          color: #667eea;
        }

        .nav-desktop a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #667eea;
          transition: width 0.3s ease;
        }

        .nav-desktop a:hover::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: #667eea;
        }

        /* Mobile Sidebar Navigation */
        .nav-mobile {
          position: fixed;
          top: 0;
          right: ${menuOpen ? '0' : '-100%'};
          width: 280px;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: right 0.4s ease;
          z-index: 2000;
          padding: 2rem;
          box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
        }

        .nav-mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .nav-mobile-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: white;
        }

        .nav-mobile-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .nav-mobile-list a {
          text-decoration: none;
          color: white;
          font-size: 1.2rem;
          font-weight: 500;
          transition: transform 0.3s ease, opacity 0.3s ease;
          display: block;
          padding: 0.5rem 0;
        }

        .nav-mobile-list a:hover {
          transform: translateX(10px);
          opacity: 0.8;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: ${menuOpen ? 'block' : 'none'};
          z-index: 1500;
        }

        /* ==================== HERO SECTION ==================== */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem 4rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-content .subtitle {
          font-size: 1.5rem;
          color: #4a5568;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .hero-content p {
          font-size: 1.1rem;
          color: #718096;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
        }

        /* Blob Image Container */
        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .blob-container {
          position: relative;
          width: 400px;
          height: 400px;
          animation: float 6s ease-in-out infinite;
        }

        .blob {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 8s ease-in-out infinite;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .social-link:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        /* ==================== ABOUT SECTION ==================== */
        .about {
          padding: 6rem 2rem;
          background: white;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .about-card {
          padding: 2rem;
          background: #f7fafc;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .about-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
          border-color: #667eea;
        }

        .about-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .about-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .about-card p {
          color: #718096;
          line-height: 1.8;
        }

        /* ==================== TECH STACK SECTION ==================== */
        .tech-stack {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .tech-category {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .tech-category h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #2d3748;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tech-item {
          margin-bottom: 1.5rem;
        }

        .tech-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #4a5568;
        }

        .progress-bar {
          height: 10px;
          background: #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          transition: width 1s ease;
        }

        /* ==================== PROJECTS SECTION ==================== */
        .projects {
          padding: 6rem 2rem;
          background: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
          border-color: #667eea;
        }

        .project-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
        }

        .project-content {
          padding: 2rem;
        }

        .project-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #2d3748;
        }

        .project-category {
          color: #667eea;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .project-content p {
          color: #718096;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          padding: 0.4rem 1rem;
          background: #edf2f7;
          color: #667eea;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #667eea;
          font-weight: 600;
          text-decoration: none;
          transition: gap 0.3s ease;
        }

        .project-link:hover {
          gap: 1rem;
        }

        /* ==================== CONTACT SECTION ==================== */
        .contact {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .contact .section-title {
          color: white;
          -webkit-text-fill-color: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .contact-info p {
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.8;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(10px);
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #2d3748;
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
        }

        .form-group textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        /* ==================== FOOTER ==================== */
        .footer {
          background: #1a202c;
          color: white;
          padding: 2rem;
          text-align: center;
        }

        .footer p {
          opacity: 0.8;
        }

        /* ==================== RESPONSIVE MEDIA QUERIES ==================== */
        @media (max-width: 968px) {
          .nav-desktop {
            display: none;
          }

          .hamburger {
            display: block;
          }

          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .blob-container {
            width: 300px;
            height: 300px;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .header-container {
            padding: 1rem;
          }

          .hero {
            padding: 5rem 1rem 3rem;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content .subtitle {
            font-size: 1.2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .blob-container {
            width: 250px;
            height: 250px;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .nav-mobile {
            width: 100%;
            right: ${menuOpen ? '0' : '-100%'};
          }
        }
      `}</style>

      {/* Overlay for mobile menu */}
      <div className="overlay" onClick={closeMenu}></div>

      {/* ==================== HEADER ==================== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">RN</div>
          
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
      <nav className="nav-mobile">
        <div className="nav-mobile-header">
          <div className="nav-mobile-logo">RN</div>
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
              <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="blob-container">
              <div className="blob">
                <img 
                  src="./richy1.png" 
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
                { name: "PostgreSQL", percentage: 80 }
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
                  <span>richard.ngasike@email.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={24} />
                  <span>+254 712 345 678</span>
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
          <p>&copy; 2024 Richard Ngasike. All rights reserved. Built with passion and Next.js.</p>
        </div>
      </footer>
    </div>
  );
};

/**
 * Tech Category Component
 * Displays a category of technical skills with animated progress bars
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
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Project Card Component
 * Displays individual project information with hover effects
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

export default PortfolioApp;