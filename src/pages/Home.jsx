import { useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const phrases = ['Code with Vision.'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typingRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 30 : 60;

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400;
      }

      timer = setTimeout(type, typeSpeed);
    }

    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav activePage="home" basePath="./" />
      <div className="container">
        <section className="hero">
          <div className="hero-brand-badge">
            <span className="pulse-dot"></span>
            <span>Software Engineering &amp; Innovation</span>
          </div>
          <h1>
            Darius <span className="gradient-text">DevWorks</span>
          </h1>
          <div className="tagline-container">
            <span>&gt;&nbsp;</span>
            <span ref={typingRef}>Code with Vision.</span>
            <span className="typing-cursor"></span>
          </div>
          <p>
            Software engineering, system-level development, and high-performance tools built with
            precision, efficiency, and clean architecture in mind.
          </p>
          <div className="hero-actions">
            <a href="projects/" className="btn">
              View Projects &rarr;
            </a>
            <a href="contact/" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
