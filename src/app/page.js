// app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Phone, MapPin, Github, Linkedin, Twitter, 
  ExternalLink, Code, Smartphone, Shield, ChevronLeft, ChevronRight,
  Briefcase, Calendar, Award, Download
} from 'lucide-react';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    alert('Thank you! Your message has been sent.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="portfolio-container">
      <div 
        className="overlay" 
        style={{ display: menuOpen ? 'block' : 'none' }}
        onClick={closeMenu}
      />

      {/* ==================== HEADER ==================== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <img 
              src="/richysignature.png" 
              alt="Richard Ngasike Signature" 
              style={{ height: '45px', width: 'auto' }}
            />
          </div>
          <nav>
            <ul className="nav-desktop">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#designs">Designs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      <nav className="nav-mobile" style={{ right: menuOpen ? '0' : '-100%' }}>
        <div className="nav-mobile-header">
          <div className="nav-mobile-logo">
            <img src="/signature.png" alt="Richard Ngasike Signature" style={{ height: '40px', width: 'auto' }} />
          </div>
          <button className="close-btn" onClick={closeMenu}>
            <X size={28} />
          </button>
        </div>
        <ul className="nav-mobile-list">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#designs" onClick={closeMenu}>Designs</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Richard Ngasike</h1>
            <div className="subtitle">Full-Stack Developer | Graphic Designer | Ethical Hacker</div>
            <p>
              Award-winning developer with 6+ years of experience crafting innovative solutions 
              across government, education, and international organizations. Currently contributing 
              to global development initiatives at the United Nations while maintaining expertise 
              in mobile development, web applications, security, and graphic design.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">6+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View Projects
                <ExternalLink size={20} />
              </a>
              <a href="/resume.pdf" className="btn-secondary" download>
                <Download size={20} />
                Download CV
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
                <img src="/richy1.jpeg" alt="Richard Ngasike" className="profile-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">What I Do</h2>
          <div className="about-intro">
            <p>
              I'm a versatile developer who thrives at the intersection of technology, design, and security. 
              With a proven track record spanning government digitalization projects, educational technology, 
              creative design solutions, and international development work, I bring a unique blend of technical 
              expertise and creative problem-solving to every project.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">
                <Smartphone size={30} />
              </div>
              <h3>Mobile Development</h3>
              <p>
                Creating intuitive, high-performance mobile applications for iOS and Android using 
                React Native, Flutter, and native technologies. Specialized in building offline-first 
                architectures, smooth animations, seamless user experiences, and cross-platform solutions 
                that work flawlessly across devices.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Code size={30} />
              </div>
              <h3>Web Development</h3>
              <p>
                Building modern, scalable, and performant web applications using React, Next.js, Node.js, 
                TypeScript, and PostgreSQL. Expert in creating responsive designs, RESTful APIs, microservices 
                architecture, and full-stack solutions. From e-commerce platforms to enterprise dashboards, 
                I deliver solutions that drive business growth and user engagement.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Shield size={30} />
              </div>
              <h3>Ethical Hacking & Security</h3>
              <p>
                Conducting comprehensive penetration testing, vulnerability assessments, and security audits 
                to protect systems from evolving cyber threats. Proficient in OWASP Top 10, network security, 
                web application security, and using industry-standard tools like Burp Suite, Metasploit, and Nmap. 
                Committed to building secure-by-design applications and safeguarding digital assets.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Award size={30} />
              </div>
              <h3>Graphic Design</h3>
              <p>
                Crafting visually stunning designs that communicate brand messages effectively. Experienced 
                in creating logos, posters, banners, social media graphics, UI/UX mockups, and complete 
                brand identity systems. Proficient in Adobe Creative Suite, Figma, and modern design tools 
                to bring creative visions to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EXPERIENCE SECTION ==================== */}
      <section id="experience" className="experience">
        <div className="section-container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <ExperienceItem
              year="2025 - Present"
              company="United Nations"
              role="Developer"
              description="Contributing to international development initiatives through technology solutions. Developing and maintaining applications that support UN's global programs, working with diverse teams across multiple countries, and implementing solutions that impact communities worldwide. Focus on creating scalable, accessible, and multilingual platforms."
              achievements={[
                "Built web applications serving 10,000+ users across multiple countries",
                "Implemented accessibility standards for inclusive digital experiences",
                "Collaborated with international teams on development best practices",
                "Contributed to open-source projects supporting sustainable development goals"
              ]}
            />
            <ExperienceItem
              year="2024"
              company="Extravis Solutions Africa"
              role="Graphic Designer"
              description="Led creative design initiatives for diverse clients across Africa. Created compelling visual identities, marketing materials, and digital content that elevated brand presence and engagement. Worked on projects ranging from startup branding to established corporate campaigns."
              achievements={[
                "Designed 50+ brand identities and marketing campaigns",
                "Increased client engagement by 40% through strategic visual content",
                "Managed multiple projects simultaneously while meeting tight deadlines",
                "Developed design systems that improved brand consistency"
              ]}
            />
            <ExperienceItem
              year="2020 - 2022"
              company="Butterfly Techies"
              role="Computer Literacy Instructor"
              description="Empowered individuals with essential digital skills through comprehensive computer training programs. Taught programming fundamentals, web development, office productivity tools, and digital literacy to students of diverse backgrounds and skill levels. Developed curriculum and mentored aspiring developers."
              achievements={[
                "Trained 200+ students in programming and digital literacy",
                "Developed hands-on curriculum for web development courses",
                "Achieved 95% student satisfaction rate",
                "Mentored students who went on to pursue tech careers"
              ]}
            />
            <ExperienceItem
              year="2019"
              company="County Registrar Office - Samburu County"
              role="Data Entry Specialist"
              description="Played a crucial role in the county's digital transformation initiative by digitalizing birth certificate records. Managed the systematic digitization of physical birth certificates for Samburu County, ensuring data accuracy, security, and accessibility. Contributed to improving public service delivery through technology."
              achievements={[
                "Digitalized 10,000+ birth certificate records with 99.9% accuracy",
                "Implemented data validation protocols to ensure data integrity",
                "Reduced certificate processing time from weeks to hours",
                "Trained staff on digital record management systems"
              ]}
            />
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
                { name: "MongoDB", percentage: 80 }
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
                { name: "Adobe Creative Suite", percentage: 90 },
                { name: "Responsive Design", percentage: 95 },
                { name: "User Research", percentage: 85 }
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
              category="Web Application"
              title="UNAIDS Microsite - UN"
              description="Full-stack United Nations microsite developed for the UNAIDS organisation to update, manage, and download country profiles and sustainability roadmaps, supported by a robust backend API and a role-based admin panel for data validation and publishing.."
              tags={["Next.js", "FastAPI", "PostgreSQL", "Supabase", "CSS"]}
              screenshots={[
                "/projects/unaids1.jpeg",
                 "/projects/unaids2.jpeg",
                "/projects/unaids3.jpeg",
                "/projects/unaids4.jpeg", 
              ]} 
              demoLink="https://unaids.vercel.app"
              githubLink="https://github.com/richardngasike/ecommerce"
            />
            <ProjectCard
              category="Mobile App"
              title="FinTrack - Expense Manager"
              description="Comprehensive personal finance management application featuring AI-powered expense categorization, budget tracking with customizable alerts, detailed spending analytics with interactive charts, bill reminders, and multi-currency support. Includes offline functionality with cloud sync and bank account integration."
              tags={["React Native", "Firebase", "TypeScript", "AI/ML"]}
              screenshots={[
                "/projects/fintrack-1.png",
                "/projects/fintrack-2.png",
                "/projects/fintrack-3.png",
                "/projects/fintrack-4.png"
              ]}
              demoLink="https://fintrack-demo.com"
              githubLink="https://github.com/richardngasike/fintrack"
            />
            <ProjectCard
              category="Security Tool"
              title="VulnScanner Pro"
              description="Advanced automated security vulnerability scanner for web applications. Performs comprehensive security assessments including SQL injection, XSS, CSRF testing, SSL/TLS analysis, and more. Generates detailed PDF reports with risk ratings, proof-of-concept exploits, and actionable remediation steps based on OWASP guidelines and industry best practices."
              tags={["Python", "Flask", "BeautifulSoup", "Selenium"]}
              screenshots={[
                "/projects/vulnscanner-1.png",
                "/projects/vulnscanner-2.png",
                "/projects/vulnscanner-3.png",
                "/projects/vulnscanner-4.png"
              ]}
              demoLink="https://vulnscanner-demo.com"
              githubLink="https://github.com/richardngasike/vulnscanner"
            />
            <ProjectCard
              category="Web Application"
              title="Real-Time Analytics Dashboard"
              description="Enterprise-grade business intelligence dashboard with real-time data visualization using WebSocket connections. Features customizable widgets, interactive D3.js charts, scheduled report generation, role-based access control, and data export in multiple formats. Optimized to handle millions of data points with efficient querying and caching strategies."
              tags={["React", "D3.js", "Express", "WebSocket", "PostgreSQL"]}
              screenshots={[
                "/projects/dashboard-1.png",
                "/projects/dashboard-2.png",
                "/projects/dashboard-3.png",
                "/projects/dashboard-4.png"
              ]}
              demoLink="https://analytics-demo.com"
              githubLink="https://github.com/richardngasike/analytics"
            />
            <ProjectCard
              category="Mobile App"
              title="GameHub Social Network"
              description="Feature-rich social networking platform designed for the gaming community. Includes real-time chat with group messaging, tournament organization and bracket systems, global and friend leaderboards, live streaming integration, gaming profile management, achievement tracking, and in-app voice communication. Cross-platform support for seamless gaming experience."
              tags={["Flutter", "Firebase", "WebRTC", "Dart", "Agora"]}
              screenshots={[
                "/projects/gamehub-1.png",
                "/projects/gamehub-2.png",
                "/projects/gamehub-3.png",
                "/projects/gamehub-4.png"
              ]}
              demoLink="https://gamehub-demo.com"
              githubLink="https://github.com/richardngasike/gamehub"
            />
            <ProjectCard
              category="Web Application"
              title="SecureAuth MFA System"
              description="Enterprise multi-factor authentication system with support for biometric authentication, SMS/Email OTP, authenticator apps (TOTP), and hardware tokens. Features include encrypted data storage using AES-256, comprehensive audit logging, session management, brute-force protection, and compliance with SOC 2 and ISO 27001 standards."
              tags={["Node.js", "JWT", "Redis", "PostgreSQL", "Docker"]}
              screenshots={[
                "/projects/secureauth-1.png",
                "/projects/secureauth-2.png",
                "/projects/secureauth-3.png",
                "/projects/secureauth-4.png"
              ]}
              demoLink="https://secureauth-demo.com"
              githubLink="https://github.com/richardngasike/secureauth"
            />
          </div>
        </div>
      </section>

      {/* ==================== GRAPHIC DESIGNS SECTION ==================== */}
      <section id="designs" className="designs">
        <div className="section-container">
          <h2 className="section-title">Graphic Design Portfolio</h2>
          <DesignCategory
            title="Logos & Brand Identity"
            designs={[
              { image: "/designs/logo-1.png", title: "Tech Startup Logo", client: "InnovateTech" },
              { image: "/designs/logo-2.png", title: "Restaurant Branding", client: "Savory Bites" },
              { image: "/designs/logo-3.png", title: "Fitness Brand", client: "FitLife Studio" },
              { image: "/designs/logo-4.png", title: "Fashion Brand", client: "Urban Threads" },
              { image: "/designs/logo-5.png", title: "Coffee Shop Logo", client: "Brew Haven" },
              { image: "/designs/logo-6.png", title: "Real Estate Brand", client: "Prime Properties" }
            ]}
          />
          <DesignCategory
            title="Posters & Flyers"
            designs={[
              { image: "/designs/poster-1.png", title: "Music Festival Poster", client: "Summer Beats 2024" },
              { image: "/designs/poster-2.png", title: "Tech Conference Flyer", client: "DevCon Africa" },
              { image: "/designs/poster-3.png", title: "Charity Event Poster", client: "Hope Foundation" },
              { image: "/designs/poster-4.png", title: "Product Launch Flyer", client: "Gadget Pro" },
              { image: "/designs/poster-5.png", title: "Sports Event Poster", client: "Marathon Challenge" },
              { image: "/designs/poster-6.png", title: "Movie Premiere Poster", client: "Cinema Productions" }
            ]}
          />
          <DesignCategory
            title="Banners & Social Media"
            designs={[
              { image: "/designs/banner-1.png", title: "Instagram Campaign", client: "Fashion Brand" },
              { image: "/designs/banner-2.png", title: "LinkedIn Banner", client: "Corporate Services" },
              { image: "/designs/banner-3.png", title: "Facebook Ad Banner", client: "E-commerce Store" },
              { image: "/designs/banner-4.png", title: "Twitter Header", client: "Tech Influencer" },
              { image: "/designs/banner-5.png", title: "YouTube Thumbnail", client: "Content Creator" },
              { image: "/designs/banner-6.png", title: "Website Hero Banner", client: "Travel Agency" }
            ]}
          />
          <DesignCategory
            title="UI/UX Mockups"
            designs={[
              { image: "/designs/mockup-1.png", title: "Mobile App Mockup", client: "Banking App" },
              { image: "/designs/mockup-2.png", title: "Website Design", client: "E-learning Platform" },
              { image: "/designs/mockup-3.png", title: "Dashboard UI", client: "SaaS Product" },
              { image: "/designs/mockup-4.png", title: "E-commerce Mockup", client: "Online Store" },
              { image: "/designs/mockup-5.png", title: "Landing Page", client: "Startup Launch" },
              { image: "/designs/mockup-6.png", title: "App Interface", client: "Health & Wellness" }
            ]}
          />
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
                Whether you need a mobile app, a secure web application, a security
                audit, or creative design work, feel free to reach out! I'm available 
                for freelance projects, consulting, and full-time opportunities.
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
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your.email@example.com" 
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                ></textarea>
              </div>
              <button onClick={handleContactSubmit} className="submit-btn">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="section-container">
          <p>&copy; 2025 Richard Ngasike. All rights reserved. Built with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
};

const ExperienceItem = ({ year, company, role, description, achievements }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <Briefcase size={20} />
      </div>
      <div className="timeline-content">
        <div className="timeline-year">
          <Calendar size={16} />
          {year}
        </div>
        <h3>{role}</h3>
        <h4>{company}</h4>
        <p>{description}</p>
        {achievements && (
          <ul className="achievements-list">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const TechCategory = ({ title, icon, skills }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
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

const ProjectCard = ({ category, title, description, tags, screenshots, demoLink, githubLink }) => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="project-card">
      <div className="project-screenshot-container">
        <img 
          src={screenshots[currentScreenshot]} 
          alt={`${title} screenshot ${currentScreenshot + 1}`}
          className="project-screenshot"
        />
        <div className="screenshot-navigation">
          <button onClick={prevScreenshot} className="nav-btn prev-btn" aria-label="Previous screenshot">
            <ChevronLeft size={20} />
          </button>
          <div className="screenshot-indicators">
            {screenshots.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentScreenshot ? 'active' : ''}`}
                onClick={() => setCurrentScreenshot(index)}
              />
            ))}
          </div>
          <button onClick={nextScreenshot} className="nav-btn next-btn" aria-label="Next screenshot">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="project-content">
        <div className="project-category">{category}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={demoLink} className="project-link demo-link" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            View Demo
          </a>
          <a href={githubLink} className="project-link github-link" target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const DesignCategory = ({ title, designs }) => {
  return (
    <div className="design-category">
      <h3 className="design-category-title">{title}</h3>
      <div className="design-grid">
        {designs.map((design, index) => (
          <div key={index} className="design-item">
            <div className="design-image-wrapper">
              <img src={design.image} alt={design.title} className="design-image" />
              <div className="design-overlay">
                <h4>{design.title}</h4>
                <p>{design.client}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;