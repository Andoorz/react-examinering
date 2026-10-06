import { Link } from 'react-router-dom'
import cat from '../assets/cat-vibing.avif'

const FrontPageContent = () => {

    return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> DIN LILLA USER-DATABAS</div>
        <h1>Allt om dina<br /><span>användare.</span></h1>
        <p className="hero-description">
          En enkel och snygg plats för att utforska användardata.
          Klicka dig vidare och se vad som finns i listan.
        </p>
        <div className="hero-actions">
          <Link to="/users" className="primary-button">
            Utforska användare <span aria-hidden="true">↗</span>
          </Link>
          <span className="hero-note">React · TypeScript · React Query</span>
        </div>
        <div className="hero-stats">
          <div><strong>01</strong><span>Hämta data</span></div>
          <div className="stat-divider" />
          <div><strong>02</strong><span>Visa profiler</span></div>
          <div className="stat-divider" />
          <div><strong>03</strong><span>Utforska</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-glow" />
        <div className="image-frame">
          <img src={cat} alt="En avslappnad katt som illustrerar den lekfulla startsidan" />
        </div>
        <div className="floating-card">
          <span className="floating-icon">✦</span>
          <div><strong>Hej där!</strong><span>Redo att utforska?</span></div>
        </div>
        <span className="visual-orbit orbit-one" />
        <span className="visual-orbit orbit-two" />
      </div>
    </section>
    )
}

export default FrontPageContent