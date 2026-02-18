import React from 'react';
import './App.css';
import profilePhoto from './photo.jpg';

function App() {
  const work = [
    {
      type: 'project',
      title: 'Sekiro: Resurrection',
      subtitle: 'Personal Project — Aug 2020 - Present',
      description:
        'One of the most downloaded gameplay modification projects for Sekiro: Shadows Die Twice on NexusMods, with 260,000+ downloads and a 5,000+ member Discord community. Features new combat mechanics, NPC AI behaviors, animations, and 3D models.',
      tech: ['Python', 'Lua', 'FMOD', 'Git'],
      link: 'https://www.nexusmods.com/sekiro',
      linkLabel: 'Mod Page',
    },
    {
      type: 'experience',
      title: 'Data Science / SWE Intern',
      subtitle: 'TakeTheLiveUnder (Startup) — Jan 2026 - May 2026',
      description:
        'Contributing to a live NCAA basketball analytics platform generating high-confidence score outcome predictions. Implementing serverless data pipelines using AWS Lambda and S3 for real-time game data processing. Working with Databricks for data ingestion, analysis, and model experimentation.',
      tech: ['AWS Lambda', 'S3', 'Databricks', 'Python'],
    },
    {
      type: 'project',
      title: 'Are We There Yet?',
      subtitle: 'Capstone Project — Jan 2025 - May 2025',
      description:
        'A cross-platform mobile application for iOS and Android built as a senior capstone project for Hillool. Features real-time ETA calculations and map visualizations using Google Maps API.',
      tech: ['React Native', 'TypeScript', 'Google Maps API', 'Firebase'],
      link: 'https://github.com/Ionian-SR',
      linkLabel: 'GitHub',
    },
    {
      type: 'experience',
      title: 'Data Annotator',
      subtitle: 'Handshake AI Fellowship — Oct 2025 - Present',
      description:
        'Training, evaluating, and quality-checking multimedia data (image, video, audio, and text) to improve AI/ML model performance. Assessing and ranking AI-generated outputs based on accuracy, relevance, and alignment with project guidelines.',
      tech: ['AI/ML', 'Data Annotation'],
    },
    {
      type: 'experience',
      title: 'Engineering Officer',
      subtitle: 'OU Game Developers Association — Aug 2024 - Present',
      description:
        'Delivering weekly presentations on technical aspects and mechanics of various games, fostering knowledge sharing and technical skill development among members.',
      tech: ['Leadership', 'Game Development'],
    },
  ];

  return (
    <div className="portfolio">

      {/* ========== HERO + ABOUT ========== */}
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
          <div className="hero-top">
            <img
              src={profilePhoto}
              alt="Dylan Chang"
              className="profile-photo"
            />
            <div className="hero-intro">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">Dylan Chang</h1>
              <h2 className="hero-title">Computer Science Graduate Student</h2>
              <div className="hero-socials">
                <a href="https://github.com/Ionian-SR" target="_blank" rel="noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a href="mailto:dylanchang4444@gmail.com" className="social-link">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-about">
            <p>
              M.S. Computer Science student at the University of Oklahoma with a
              focus on Data Science. I completed my B.S. in Computer Science with a
              Minor in Mathematics (GPA: 3.5) in May 2025.
            </p>
            <p>
              My passion for programming started with game modding — I created
              Sekiro: Resurrection, one of the most popular mods on NexusMods with
              260,000+ downloads and a 5,000+ member community. That experience
              taught me collaboration, problem-solving, and how to manage a large project.
            </p>
            <p>
              I am interested in data science and full-stack development, working on
              NCAA basketball analytics platforms, cross-platform mobile apps, and
              AI/ML data annotation.
            </p>
            <div className="about-details">
              <div className="detail">
                <span className="detail-label">Email:</span>
                <span className="detail-value">dylanchang4444@gmail.com</span>
              </div>
              <div className="detail">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Norman, Oklahoma</span>
              </div>
              <div className="detail">
                <span className="detail-label">Education:</span>
                <span className="detail-value">M.S. CS @ OU (Expected Dec 2027)</span>
              </div>
              <div className="detail">
                <span className="detail-label">Availability:</span>
                <span className="detail-value available">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </section>

      {/* ========== WORK (PROJECTS + EXPERIENCE COMBINED) ========== */}
      <section id="work" className="section work-section">
        <div className="section-container">
          <h2 className="section-title">Projects & Experience</h2>
          <div className="work-list">
            {work.map((item, index) => (
              <div key={index} className="work-card">
                <div className="work-badge">
                  {item.type === 'project' ? '📁 Project' : '💼 Experience'}
                </div>
                <h3 className="work-title">{item.title}</h3>
                <p className="work-subtitle">{item.subtitle}</p>
                <p className="work-description">{item.description}</p>
                <div className="work-bottom">
                  <div className="work-tech">
                    {item.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer" className="work-link">
                      {item.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;