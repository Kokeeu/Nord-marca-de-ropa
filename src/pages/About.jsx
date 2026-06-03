import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about__hero">
        <span className="about__eyebrow">— Nosotros</span>
        <h1 className="about__title">
          Hacemos ropa para el viaje nocturno al trabajo.
        </h1>
      </div>

      <div className="about__grid">
        <div className="about__col">
          <p className="about__lede">
            NORD es una pequeña marca urbana que trabaja desde una nave reconvertida
            en el distrito norte. Diseñamos para personas que se mueven por la
            ciudad después del anochecer — ciclistas, trabajadores de turno
            nocturno, comensales tardíos — y fabricamos prendas que resisten
            el frío, la lluvia y el largo camino a casa.
          </p>
        </div>
        <div className="about__col">
          <p className="about__body">
            Cada pieza está cortada en tela gruesa de fibra natural y terminada
            a mano. Trabajamos en tiradas cortas y reponemos despacio. Nada
            es ruidoso, nada es estacional por compromiso, y nada está hecho
            para deshacerse en el segundo lavado.
          </p>
          <p className="about__body">
            La paleta es obsidiana, carbón, ceniza y un solo hilo de oro
            cálido. La tipografía es ajustada. Las costuras están selladas.
            El resto es solo clima y tiempo.
          </p>
        </div>
      </div>

      <div className="about__stats">
        <div className="about__stat">
          <span className="about__stat-num">2019</span>
          <span className="about__stat-label">Fundada</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-num">28</span>
          <span className="about__stat-label">Prendas en rotación</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-num">04</span>
          <span className="about__stat-label">Ciudades de envío</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-num">01</span>
          <span className="about__stat-label">Taller, zona norte</span>
        </div>
      </div>
    </section>
  )
}

export default About
