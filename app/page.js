const highlights = [
  {
    category: 'COBERTURA INTERNACIONAL',
    title: 'Oscar 2026 em Los Angeles',
    description:
      'Cobertura 360 da cerimônia, sala de imprensa, tapete vermelho e entrevistas diretamente de Los Angeles.',
    link: 'https://www.instagram.com/reel/DV84hy5jl0d/',
    linkText: 'Ver cobertura'
  },
  {
    category: 'ENTREVISTA',
    title: 'Francis Ford Coppola',
    description:
      'Conversa sobre cinema, futuro da indústria e o legado de O Poderoso Chefão.',
    link: 'https://www.youtube.com/watch?v=ifX52rYODic',
    linkText: 'Assistir entrevista'
  },
  {
    category: 'ENTREVISTA',
    title: 'Fernanda Torres & Selton Mello',
    description:
      'Entrevista sobre Ainda Estou Aqui e a emoção por trás de um dos filmes brasileiros mais celebrados dos últimos anos.',
    link: 'https://www.youtube.com/watch?v=F0QrvBQMho8',
    linkText: 'Assistir entrevista'
  }
];

const interviews = [
  {
    title: 'Supergirl',
    description: 'Entrevista e conteúdo especial sobre a produção.',
    link: 'https://www.instagram.com/reel/DaBe7lAhBda/'
  },
  {
    title: 'Ainda Estou Aqui',
    description: 'Fernanda Torres e Selton Mello.',
    link: 'https://www.youtube.com/watch?v=F0QrvBQMho8'
  },
  {
    title: 'Oppenheimer',
    description: 'Entrevista sobre o filme de Christopher Nolan.',
    link: 'https://www.youtube.com/watch?v=70khQTuXtrs'
  },
  {
    title: 'M. Night Shyamalan',
    description: 'Entrevista com o cineasta.',
    link: 'https://www.youtube.com/watch?v=m3jj8mckjNo'
  },
  {
    title: 'Duna: Parte 2',
    description: 'Entrevista com o elenco do épico de Denis Villeneuve.',
    link: 'https://www.youtube.com/watch?v=8hoiJhNcmFc'
  },
  {
    title: 'Stranger Things',
    description: 'Entrevista sobre a série e seus bastidores.',
    link: 'https://www.youtube.com/watch?v=RVO1OudUwww'
  }
];

const reviews = [
  {
    title: 'Oppenheimer',
    link: 'https://www.adorocinema.com/filmes/filme-296168/criticas-adorocinema/'
  },
  {
    title: 'Duna: Parte 2',
    link: 'https://www.adorocinema.com/filmes/filme-278742/criticas-adorocinema/'
  },
  {
    title: 'Tár',
    link: 'https://www.adorocinema.com/filmes/filme-291967/criticas-adorocinema/'
  },
  {
    title: 'Triângulo da Tristeza',
    link: 'https://www.adorocinema.com/filmes/filme-256851/criticas-adorocinema/'
  },
  {
    title: 'Megalópolis',
    link: 'https://www.adorocinema.com/filmes/filme-12934/criticas-adorocinema/'
  },
  {
    title: 'O Último Azul',
    link: 'https://www.adorocinema.com/filmes/filme-1000018687/criticas-adorocinema/'
  }
];

const coverages = [
  {
    location: 'LOS ANGELES',
    title: 'Oscar 2026',
    description:
      'Cobertura da cerimônia, sala de imprensa, tapete vermelho, entrevistas e produção de conteúdo.',
    link: 'https://www.instagram.com/reel/DV84hy5jl0d/'
  },
  {
    location: 'GRAMADO',
    title: 'Festival de Gramado',
    description:
      'Coberturas presenciais das edições de 2022, 2023, 2024 e 2025.',
    link: 'https://www.instagram.com/stories/highlights/17978879696863719/'
  },
  {
    location: 'CANNES',
    title: 'Festival de Cannes',
    description:
      'Cobertura internacional, conteúdo para redes sociais e bastidores.',
    link: 'https://www.instagram.com/stories/highlights/17950722934896051/'
  },
  {
    location: 'NOVA YORK',
    title: 'Oppenheimer',
    description:
      'Produção e edição de vlog durante cobertura internacional.',
    link: 'https://www.instagram.com/reels/CusGBO2NDuC/'
  },
  {
    location: 'MÉXICO',
    title: 'Duna',
    description:
      'Cobertura de viagem, entrevistas e produção de conteúdo audiovisual.',
    link: 'https://www.instagram.com/reel/C37xv_SLZb3/'
  }
];

const participations = [
  {
    year: '2026',
    title: 'Comentarista do Oscar — CNN',
    description:
      'Análise da cerimônia do Oscar 2026 no Jornal da CNN, diretamente de Los Angeles.'
  },
  {
    year: '2026',
    title: 'Influent Summit — Elas no Set',
    description:
      'Mediação do painel Criação e Liderança no Cinema.'
  },
  {
    year: '2026',
    title: 'Influent Summit — Anatomia de um Hit',
    description:
      'Mediação sobre criação de filmes, séries, marcas e conexão com a audiência.'
  },
  {
    year: '2024–2025',
    title: 'Revista Exame',
    description:
      'Jurada da seleção de Melhores Filmes do Ano.'
  },
  {
    year: 'XXXXXXXXXXX',
    title: 'Guia Folha — Folha de S.Paulo',
    description:
      'Jurada da seleção de Melhores Cinemas de São Paulo.'
  },
  {
    year: 'XXXXXXXXXXX',
    title: 'Festival MixBrasil',
    description:
      'Jurada do Prêmio Canal Brasil de Curtas no 33º Festival MixBrasil da Cultura da Diversidade.'
  },
  {
    year: 'XXXXXXXXXXX',
    title: 'Santos Film Fest',
    description:
      'Palestrante no bate-papo Crítica de Cinema em Tempos de Plataformas Digitais e Streaming.'
  },
  {
    year: '2023',
    title: 'CCXP',
    description:
      'Convidada do painel Entrevistas Internacionais.'
  },
  {
    year: 'XXXXXXXXXXX',
    title: 'UNIP e UNIFECAP',
    description:
      'Aula especial sobre carreira e jornalismo de entretenimento para turmas de Marketing.'
  },
  {
    year: 'XXXXXXXXXXX',
    title: 'Em Cartaz',
    description:
      'Condução de programa de entrevistas com artistas sobre suas trajetórias e carreiras.',
    link: 'https://www.youtube.com/watch?v=OuvhIjouqfM'
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
          <a href="#entrevistas">Entrevistas</a>
          <a href="#criticas">Críticas</a>
          <a href="#coberturas">Coberturas</a>
          <a href="#participacoes">Participações</a>
          <a href="#sobre">Sobre</a>
          <a className="nav-contact" href="#contato">
            Contato ↗
          </a>
        </nav>
      </header>


      {/* HOME */}
      <section id="inicio" className="hero shell">

        <div className="eyebrow">
          JORNALISMO • CINEMA • ENTRETENIMENTO
        </div>

        <h1>
          Aline
          <br />
          Pereira
        </h1>

        <p className="hero-copy">
          Jornalista • Repórter • Crítica de Cinema
        </p>

        <p className="hero-description">
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
            href="#entrevistas"
          >
            Assistir entrevistas ↗
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
      <section id="destaques" className="section shell">

        <div className="section-heading">
          <span>01</span>
          <h2>Destaques</h2>
          <p>
            Entrevistas, coberturas e momentos de destaque na trajetória profissional.
          </p>
        </div>

        <div className="highlight-grid">

          {highlights.map((item, index) => (

            <article className="story-card" key={index}>

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
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkText} <span>↗</span>
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ENTREVISTAS */}
      <section
        id="entrevistas"
        className="section section-dark"
      >

        <div className="shell">

          <div className="section-heading light">

            <span>02</span>

            <h2>
              Entrevistas
            </h2>

            <p>
              Conversas com grandes nomes do cinema e do entretenimento nacional e internacional.
            </p>

          </div>

          <div className="video-list">

            {interviews.map((item, index) => (

              <article
                className="video-item"
                key={index}
              >

                <div className="video-thumb placeholder-media dark-placeholder">

                  <div className="play">
                    ▶
                  </div>

                  <span>
                    ENTREVISTA
                  </span>

                </div>

                <div className="video-info">

                  <small>
                    ENTREVISTA
                  </small>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                <a
                  className="circle-link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Assistir ${item.title}`}
                >
                  ↗
                </a>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* CRÍTICAS */}
      <section
        id="criticas"
        className="section shell"
      >

        <div className="section-heading">

          <span>03</span>

          <h2>
            Críticas
          </h2>

          <p>
            Análises e críticas de cinema publicadas no AdoroCinema.
          </p>

        </div>

        <div className="reviews-list">

          {reviews.map((review, index) => (

            <a
              className="review-item"
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >

              <span className="review-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>
                {review.title}
              </h3>

              <span>
                Ler crítica ↗
              </span>

            </a>

          ))}

        </div>

      </section>


      {/* COBERTURAS */}
      <section
        id="coberturas"
        className="section coverage-section"
      >

        <div className="shell">

          <div className="section-heading">

            <span>04</span>

            <h2>
              Coberturas
            </h2>

            <p>
              Cinema e entretenimento em festivais, premiações e eventos no Brasil e no exterior.
            </p>

          </div>

          <div className="coverage-grid">

            {coverages.map((coverage, index) => (

              <article
                className="coverage-card"
                key={index}
              >

                <div className="coverage-image placeholder-media">

                  <span>
                    {coverage.location}
                  </span>

                  <strong>
                    XXXXXXXXXXX
                  </strong>

                </div>

                <div className="coverage-content">

                  <small>
                    {coverage.location}
                  </small>

                  <h3>
                    {coverage.title}
                  </h3>

                  <p>
                    {coverage.description}
                  </p>

                  <a
                    href={coverage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver cobertura ↗
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* EVENTOS E PARTICIPAÇÕES */}
      <section
        id="participacoes"
        className="section section-dark"
      >

        <div className="shell">

          <div className="section-heading light">

            <span>05</span>

            <h2>
              Eventos & Participações
            </h2>

            <p>
              Mediação, apresentação, júris, palestras e participações especiais.
            </p>

          </div>

          <div className="participations-list">

            {participations.map((item, index) => (

              <article
                className="participation-item"
                key={index}
              >

                <span className="participation-year">
                  {item.year}
                </span>

                <div className="participation-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                {item.link && (

                  <a
                    className="circle-link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${item.title}`}
                  >
                    ↗
                  </a>

                )}

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

          <span>
            FOTO
          </span>

          <strong>
            XXXXXXXXXXX
          </strong>

        </div>

        <div className="about-copy">

          <div className="section-heading compact">

            <span>06</span>

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

          <div className="expertise">

            <span>Jornalismo</span>
            <span>Cinema</span>
            <span>Entretenimento</span>
            <span>Entrevistas</span>
            <span>Crítica de Cinema</span>
            <span>Coberturas Internacionais</span>

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
              07 • CONTATO
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
          Jornalista • Repórter • Crítica de Cinema
        </span>

      </footer>

    </main>
  );
}
