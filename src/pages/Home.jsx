import HeroLogoMosaic from '../components/HeroLogoMosaic.jsx'
import GhostTextLink from '../components/GhostTextLink.jsx'
import './Home.css'

function Home() {
  return (
    <section className="home">
      <div className="home__hero">
        <HeroLogoMosaic />
        <h1 className="home__headline">
          Siluetas urbanas cortadas con luz de vela y piedra.
        </h1>
        <GhostTextLink to="/collections" label="Explorar la colección" />
      </div>
    </section>
  )
}

export default Home
