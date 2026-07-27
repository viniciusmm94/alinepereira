const highlights = [
  {
    category: 'REPORTAGEM',
    title: 'XXXXXXXXXXX',
    vehicle: 'XXXXXXXXXXX',
    meta: 'XXXXXXXXXXX'
  },
  {
    category: 'ENTREVISTA',
    title: 'XXXXXXXXXXX',
    vehicle: 'XXXXXXXXXXX',
    meta: 'XXXXXXXXXXX'
  },
  {
    category: 'VÍDEO',
    title: 'XXXXXXXXXXX',
    vehicle: 'XXXXXXXXXXX',
    meta: 'XXXXXXXXXXX'
  }
];

const videos = [
  {
    type: 'Reportagem',
    title: 'XXXXXXXXXXX',
    description: 'XXXXXXXXXXX'
  },
  {
    type: 'Entrevista',
    title: 'XXXXXXXXXXX',
    description: 'XXXXXXXXXXX'
  },
  {
    type: 'Entrada ao vivo',
    title: 'XXXXXXXXXXX',
    description: 'XXXXXXXXXXX'
  }
];

export default function Home() {
  return (
    <main>

      {/* MENU */}
      <header className="topbar">
        <a className="brand" href="#inicio">
          AP
        </a>

        <nav>
          <a href="#destaques">Destaques</a>
          <a href="#videos">Em vídeo</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HOME */}
      <section id="inicio" className="hero shell">

        <div className="eyebrow">
          JORNALISMO • REPORTAGEM • APRESENTAÇÃO
        </div>

        <h1>
          Aline
          <br />
          Pereira
        </h1>

        <p className="hero-copy">
          XXXXXXXXXXX
        </p>

        <div className="hero-actions">

          <a
            className="button button-dark"
            href="#destaques"
          >
            Conheça meu trabalho
          </a>

          <a
            className="text-link"
            href="#contato"
          >
            Contato ↗
          </a>

        </div>

        <div className="hero-media">
          <img
            src="/aline.jpg"
            alt="Aline Pereira"
            className="hero-photo"
          />
        </div>

      </section>

      {/* DESTAQUES */}
      <section
        id="destaques"
        className="section shell"
      >

        <div className="section-heading">
          <span>01</span>
          <h2>Destaques</h2>
          <p>XXXXXXXXXXX</p>
        </div>

        <div className="highlight-grid">

          {highlights.map((item, index) => (

            <article
              className="story-card"
              key={index}
            >

              <div className="story-image placeholder-media">
                <span>IMAGEM</span>
                <strong>XXXXXXXXXXX</strong>
              </div>

              <div className="story-body">

                <small>
                  {item.category}
                </small>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.vehicle} • {item.meta}
                </p>

                <a href="#">
                  Ver trabalho <span>↗</span>
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* VÍDEOS */}
      <section
        id="videos"
        className="section section-dark"
      >

        <div className="shell">

          <div className="section-heading light">

            <span>02</span>

            <h2>
              Em vídeo
            </h2>

            <p>
              XXXXXXXXXXX
            </p>

          </div>

          <div className="video-list">

            {videos.map((video, index) => (

              <article
                className="video-item"
                key={index}
              >

                <div className="video-thumb placeholder-media dark-placeholder">

                  <div className="play">
                    ▶
                  </div>

                  <span>
                    XXXXXXXXXXX
                  </span>

                </div>

                <div className="video-info">

                  <small>
                    {video.type}
                  </small>

                  <h3>
                    {video.title}
                  </h3>

                  <p>
                    {video.description}
                  </p>

                </div>

                <a
                  className="circle-link"
                  href="#"
                  aria-label="Assistir"
                >
                  ↗
                </a>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="section shell about"
      >

        <div className="about-photo placeholder-media">
          <span>FOTO</span>
          <strong>XXXXXXXXXXX</strong>
        </div>

        <div className="about-copy">

          <div className="section-heading compact">

            <span>03</span>

            <h2>
              Sobre Aline
            </h2>

          </div>

          <p className="large-copy">
            XXXXXXXXXXX
          </p>

          <p>
            XXXXXXXXXXX
          </p>

          <div className="experience">

            <div>
              <strong>XXXXXXXXXXX</strong>
              <span>XXXXXXXXXXX</span>
            </div>

            <div>
              <strong>XXXXXXXXXXX</strong>
              <span>XXXXXXXXXXX</span>
            </div>

            <div>
              <strong>XXXXXXXXXXX</strong>
              <span>XXXXXXXXXXX</span>
            </div>

          </div>

        </div>

      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="contact-section"
      >

        <div className="shell contact-grid">

          <div>

            <span className="contact-kicker">
              04 • CONTATO
            </span>

            <h2>
              Vamos
              <br />
              conversar.
            </h2>

            <div className="contact-links">

              <a href="mailto:aline.per@msn.com">
                E-mail
                <span>
                  aline.per@msn.com ↗
                </span>
              </a>

              <a
                href="https://br.linkedin.com/in/alineper"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span>
                  alineper ↗
                </span>
              </a>

              <a
                href="https://www.instagram.com/alineper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <span>
                  @alineper ↗
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* RODAPÉ */}
      <footer className="footer shell">

        <span>
          © 2026 Aline Pereira
        </span>

        <span>
          Jornalista • Repórter • Apresentadora
        </span>

      </footer>

    </main>
  );
}
