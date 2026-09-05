import Nav from '../components/Nav';
import Footer from '../components/Footer';

const GitHubIcon = () => (
  <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

function Projects() {
  return (
    <>
      <Nav activePage="projects" basePath="../" />
      <div className="container" style={{ maxWidth: '1100px' }}>
        <section className="hero" style={{ marginBottom: '30px' }}>
          <h1>
            Projects <span className="gradient-text">Showcase</span>
          </h1>
          <p>
            Explore software engineering projects, system tools, and mobile applications built with
            clean architecture.
          </p>
        </section>

        <div className="projects-list">
          <div className="project-card">
            <div className="project-header">
              <div className="project-title-group">
                <img
                  src="../auto-analytics.png"
                  alt="Auto Analytics Logo"
                  className="project-icon"
                />
                <h3>
                  <a href="auto-analytics/">Auto Analytics</a>
                </h3>
                <span className="project-badge">Android App &amp; AI</span>
              </div>
              <span className="project-date">August 2026</span>
            </div>

            <div className="project-tagline">
              The Ultimate Android Companion for Your Vehicle Management with AI Integration
            </div>

            <p>
              Auto Analytics is an all-in-one Android companion application designed to empower
              drivers with data-driven vehicle maintenance. Powered by Google Gemini 3.5 Flash-lite
              AI, it combines smart diagnostic assistance (Virtual Mechanic), AI-driven document
              scanning, exhaustive technical profiles, bento-style history logs, and interactive
              Vico mileage charts.
            </p>

            <div className="tech-stack" style={{ marginBottom: '24px' }}>
              {['Kotlin 2.0+', 'Jetpack Compose', 'Gemini 3.5 AI', 'Ktor 3.0', 'Firebase', 'Clean Architecture'].map(
                tech => (
                  <span key={tech} className="tech">
                    {tech}
                  </span>
                )
              )}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="auto-analytics/" className="btn">
                View Project Details &rarr;
              </a>
              <a
                href="https://github.com/dariusepure/auto_analytics"
                target="_blank"
                rel="noopener"
                className="btn btn-secondary"
                style={{ gap: '8px' }}
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
