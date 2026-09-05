function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        &copy; <span>{year}</span> Darius DevWorks. Hosted with performance on{' '}
        <a href="https://pages.github.com/" target="_blank" rel="noopener">
          GitHub Pages
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
