import Nav from '../components/Nav';
import Footer from '../components/Footer';

const GitHubIcon = () => (
  <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const techStack = [
  { category: 'Language', tech: 'Kotlin 2.0+' },
  { category: 'Compatibility', tech: 'Android 8.0 (API 26) and up' },
  { category: 'UI Framework', tech: 'Jetpack Compose with Material Design 3' },
  { category: 'AI SDK', tech: 'Google Generative AI SDK (Gemini 3.5 Flash-lite)' },
  { category: 'Networking & Backend', tech: 'Ktor Client 3.0 & Firebase (Firestore, Storage, Auth)' },
  { category: 'Architecture', tech: 'MVVM + Clean Architecture + Hilt DI' },
  { category: 'Charts & Media', tech: 'Vico Charts, Coil Image Loading' },
  { category: 'Identity & Serialization', tech: 'Android Credential Manager & Kotlinx Serialization' },
];

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Intelligence',
    items: [
      { bold: 'Smart Diagnosis (Virtual Mechanic)', text: ': Persistent chat with an expert AI car mechanic.' },
      { bold: 'History Persistence', text: ': Conversations are saved per car and synced to the cloud.' },
      { bold: 'Context-Aware', text: ': The AI knows your car\'s technical specs and history to provide precise advice.' },
      { bold: 'Read-Only Context', text: ': The AI can read all vehicle data to assist you, but technical modifications must be made manually by the user for maximum safety.' },
      { bold: 'AI Document Scanning', text: ': Extract technical data from vehicle documents.' },
      { bold: 'Flexible Input', text: ': Import documents via Gallery or PDF files.' },
      { bold: 'Manual Data Confirmation', text: ': Review and select which scanned details (VIN, Make, Model, Year, etc.) to apply to your car profile.' },
    ],
  },
  {
    icon: '🛠️',
    title: 'Comprehensive Vehicle Management',
    items: [
      { bold: 'Exhaustive Technical Profiles', text: ': Track everything from engine layout and cylinder setup, to tire sizes, and brake types.' },
      { bold: 'Advanced Search & VIN Protection', text: ': Instant search by Make, Model, Plate, or VIN with duplicate VIN prevention.' },
      { bold: 'Bento-Style History', text: ': Service, Tires, Inspections, Insurance, and Vignette logs with real-time stats.' },
      { bold: 'Smart Mileage & Fuel', text: ': Interactive Vico Charts with 1-tap import from fuel & service logs.' },
    ],
  },
  {
    icon: '🔐',
    title: 'Secure Access & Cloud Sync',
    items: [
      { bold: 'Modern Authentication', text: ': Sign in via Email/Password or Google One Tap (Android Credential Manager).' },
      { bold: 'Cloud Backup & Sync', text: ': Powered by Firebase Firestore & Storage across all your devices.' },
    ],
  },
  {
    icon: '🌗',
    title: 'Premium UI / UX',
    items: [
      { bold: 'Material Design 3 (M3)', text: ': Adaptive modern components with Edge-to-Edge interface.' },
      { bold: 'Global Unit System', text: ': Instant toggle between Metric (km, L) and Imperial (mi, gal).' },
      { bold: 'Multi-Language', text: ': Native localization for English and Romanian.' },
      { bold: 'Modal Bottom Sheet Settings', text: ': Centralized theme and preference management.' },
    ],
  },
];

function AutoAnalytics() {
  const year = new Date().getFullYear();

  return (
    <>
      <Nav activePage="projects" basePath="../../" />
      <div className="container" style={{ maxWidth: '1100px' }}>
        <a href="../" className="back-link">
          &larr; Back to Projects
        </a>

        <div className="project-card" style={{ marginTop: '10px' }}>
          <div className="project-header">
            <div className="project-title-group">
              <img
                src="../../auto-analytics.png"
                alt="Auto Analytics Logo"
                className="project-icon"
              />
              <h3>
                Auto <span className="gradient-text">Analytics</span>
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
            scanning (Gallery &amp; PDF), exhaustive technical profiles, bento-style history logs,
            interactive Vico mileage charts, and legal document tracking with seamless cloud backup.
          </p>

          {/* Key Features */}
          <h4 style={{ color: 'var(--text-title)', fontSize: '1.1rem', margin: '24px 0 12px 0' }}>
            🌟 Key Features
          </h4>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-item" key={feature.title}>
                <h4>
                  {feature.icon} {feature.title}
                </h4>
                <ul className="feature-list">
                  {feature.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.bold}</strong>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tech Stack Table */}
          <h4 style={{ color: 'var(--text-title)', fontSize: '1.1rem', margin: '28px 0 12px 0' }}>
            🛠️ Tech Stack &amp; Architecture
          </h4>
          <table className="tech-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Technology / Library</th>
              </tr>
            </thead>
            <tbody>
              {techStack.map((row) => (
                <tr key={row.category}>
                  <td>
                    <strong>{row.category}</strong>
                  </td>
                  <td>{row.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* License */}
          <div className="license-box">
            <span>
              Licensed under <code>GNU General Public License v3 (GPL v3)</code>
            </span>
            <span>
              Copyright &copy; {year} <strong>Darius Epure (Darius DevWorks)</strong>
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
            <a
              href="https://github.com/dariusepure/auto_analytics"
              target="_blank"
              rel="noopener"
              className="btn btn-secondary"
              style={{ gap: '8px' }}
            >
              <GitHubIcon />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AutoAnalytics;
