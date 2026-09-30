import "./App.css";

function App() {
  return (
   
    <main>
       <nav className="navbar">
  <div className="navbar-logo">Rafi.dev</div>

  <div className="navbar-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-intro">Hi, I'm</p>

          <h1 className="hero-title">Rafi Ullah</h1>

          <h2 className="hero-role">
            React Developer & AI Enthusiast
          </h2>

          <p className="hero-description">
            I build modern web applications using React, JavaScript,
            APIs, and AI-powered technologies.
          </p>

          <div className="hero-buttons">
            <button className="hero-button primary-button">
              View My Work
            </button>

            <button className="hero-button secondary-button">
              Contact Me
            </button>
          </div>
        </div>
      </section>
      <section className="about" id="about">
  <div className="about-content">
    <p className="section-label">ABOUT ME</p>

    <h2>Building for the Web & Exploring AI</h2>

    <p>
      I'm a developer focused on building modern web applications
      with React and JavaScript. I'm currently expanding my skills
      across APIs, backend development, AI integration, and
      Model Context Protocol (MCP).
    </p>

    <p>
      My goal is to build practical, scalable applications that
      solve real problems and provide a great user experience.
    </p>
  </div>
</section>
<section className="skills" id="skills">
  <div className="skills-content">
    <p className="section-label">MY SKILLS</p>

    <h2>Technologies I Work With</h2>
<div className="skills-grid">
  <div className="skill-card">HTML</div>
  <div className="skill-card">CSS</div>
  <div className="skill-card">JavaScript</div>
  <div className="skill-card">React.js</div>
  <div className="skill-card">Flutter</div>
  <div className="skill-card">Dart</div>
  <div className="skill-card">Firebase</div>
  <div className="skill-card">REST APIs</div>
  <div className="skill-card">Python</div>
  <div className="skill-card">Flask</div>
  <div className="skill-card">Git & GitHub</div>
  <div className="skill-card">AI / MCP</div>
</div>
  </div>
</section>
<section className="projects" id="projects">
  <div className="projects-content">
    <p className="section-label">FEATURED PROJECT</p>

    <h2>SafeCity</h2>

    <p className="project-subtitle">
      A Real-Time Community-Driven Safety & Incident Reporting System
    </p>

    <p className="project-description">
      SafeCity is a mobile-based safety platform designed to improve
      public awareness through real-time, community-driven incident
      reporting. The system combines location-based mapping,
      incident visualization, safety scoring, and safer route
      recommendations.
    </p>

    <div className="project-tech">
      <span>Flutter</span>
      <span>Dart</span>
      <span>Firebase</span>
      <span>Google Maps API</span>
      <span>REST APIs</span>
      <span>Python</span>
      <span>Flask</span>
    </div>

    <div className="project-role">
      <h3>My Contribution</h3>

      <ul>
        <li>Map Display Module</li>
        <li>Safe Route Suggestion Module</li>
        <li>Safety Scoring Module</li>
      </ul>
    </div>

    <div className="project-buttons">
      <button className="hero-button primary-button">
        View Project
      </button>

      <button className="hero-button secondary-button">
        GitHub
      </button>
    </div>
  </div>
</section>

    </main>
  );
}

export default App;