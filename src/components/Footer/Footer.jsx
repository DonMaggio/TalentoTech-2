import './Footer.css';

export const Footer = ( ) => {

  const footerNavs = [
    { label: "Resources",
      items: [
        { href: "#", name: "Contact" },
        { href: "#", name: "Support" },
        { href: "#", name: "Documentation" },
        { href: "#", name: "Pricing" },
      ],},
    { label: "About",
      items: [
        { href: "#", name: "Terms" },
        { href: "#", name: "License" },
        { href: "#", name: "Privacy" },
        { href: "#", name: "About Us" },
      ],},
    { label: "Explore",
      items: [
        { href: "#", name: "Showcase" },
        { href: "#", name: "Roadmap" },
        { href: "#", name: "Languages" },
        { href: "#", name: "Blog" },
      ],},
    { label: "Company",
      items: [
        { href: "#", name: "Partners" },
        { href: "#", name: "Team" },
        { href: "#", name: "Careers" },
      ],},
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Newsletter */}
        <div className="footer-top">
          <div className="footer-text">
            <h3>Suscribite a nuestro newsletter y recibí ofertas especiales todas las semanas.</h3>
          </div>
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-wrapper">
              <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
              <input type="email" required placeholder="Ingresá tu email" className="footer-input"/>
            </div>
            <button className="footer-button">Suscribete</button>
          </form>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          {footerNavs.map((nav, idx) => (
            <ul key={idx} className="footer-nav">
              <h4>{nav.label}</h4>
              {nav.items.map((el, i) => (
                <li key={i}>
                  <a href={el.href}>{el.name}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <p>© 2025 Don Maggio Dev. All rights reserved.</p>
          <div className="footer-icons">
            <a href="#"><i className="icon facebook"></i></a>
            <a href="#"><i className="icon twitter"></i></a>
            <a href="#"><i className="icon github"></i></a>
            <a href="#"><i className="icon instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
