import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

// Navbar determines the base path for links based on current page depth
function Nav({ activePage = 'home', basePath = './' }) {
  const { mode, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Home', href: basePath === './' ? './' : basePath + '../', key: 'home' },
    { label: 'Projects', href: basePath === './' ? 'projects/' : basePath + 'projects/', key: 'projects' },
    { label: 'About', href: basePath === './' ? 'about/' : basePath + 'about/', key: 'about' },
    { label: 'Contact', href: basePath === './' ? 'contact/' : basePath + 'contact/', key: 'contact' },
  ];

  return (
    <nav>
      <a href={basePath === './' ? './' : basePath + '../'} className="logo">
        <img src={basePath + 'logo.jpg'} alt="Darius DevWorks Logo" className="logo-icon" />
        Darius <span>DevWorks</span>
      </a>

      <ul className={`nav-links${mobileOpen ? ' show' : ''}`}>
        {links.map(link => (
          <li key={link.key}>
            <a
              href={link.href}
              className={activePage === link.key ? 'active' : ''}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right-actions">
        <button
          className="mobile-nav-toggle"
          aria-label="Toggle Navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
        >
          ☰
        </button>
        <button
          className="mode-toggle-btn"
          title="Toggle Dark/Light Mode"
          aria-label="Toggle Theme Mode"
          onClick={toggle}
        >
          {mode === 'light' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
