import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project-one',
      live: '#',
    },
    {
      title: 'Project Two',
      description: 'A mobile-responsive e-commerce platform.',
      tech: ['TypeScript', 'Next.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project-two',
      live: '#',
    },
    {
      title: 'Project Three',
      description: 'An AI-powered data visualization dashboard.',
      tech: ['Python', 'React', 'D3.js'],
      github: 'https://github.com/yourusername/project-three',
      live: '#',
    },
    {
      title: 'Project Four',
      description: 'A real-time chat application with WebSockets.',
      tech: ['React', 'Socket.io', 'Express'],
      github: 'https://github.com/yourusername/project-four',
      live: '#',
    },
  ];

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'CSS/SASS', level: 85 },
    { name: 'Git', level: 80 },
    { name: 'SQL', level: 70 },
  ];

  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Company A',
      period: '2022 - Present',
      description:
        'Led the development of customer-facing web applications, improving performance by 40%.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Startup B',
      period: '2020 - 2022',
      description:
        'Built and maintained multiple microservices and SPAs serving 100K+ users.',
    },
    {
      role: 'Junior Developer',
      company: 'Agency C',
      period: '2018 - 2020',
      description:
        'Developed responsive websites and web applications for various clients.',
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      {/* ========== NAVIGATION ========== */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          &lt;YourName /&gt;
        </div>
        <ul className="nav-links">
          {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(
            (section) => (
              <li key={section}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section id="home" className="hero-section">
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }} />
          ))}
        </div>
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Your Name</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences that live on the internet.
            Specializing in creating elegant solutions to complex problems.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                <span>Your Photo</span>
              </div>
              <div className="image-border"></div>
            </div>
            <div className="about-text">
              <p>
                Hi! I'm a passionate full-stack developer with over 5 years of
                experience building web applications. I love turning complex
                problems into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                My journey in web development started back in college when I
                decided to build a website for a local business. Since then, I've
                had the privilege of working at startups, agencies, and large
                corporations.
              </p>
              <p>
                When I'm not coding, you'll find me hiking, reading tech blogs,
                or experimenting with new technologies. I'm always eager to learn
                and take on new challenges.
              </p>
              <div className="about-details">
                <div className="detail">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">Your Name</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">your.email@example.com</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">Your City, Country</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Availability:</span>
                  <span className="detail-value available">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SKILLS SECTION ========== */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>Preview</span>
                  </div>
                  <div className="project-overlay">
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE SECTION ========== */}
      <section id="experience" className="section experience-section">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <span className="timeline-period">{exp.period}</span>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's this about?" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:your.email@example.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;