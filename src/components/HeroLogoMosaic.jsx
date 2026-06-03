import './HeroLogoMosaic.css'

function HeroLogoMosaic() {
  const tiles = Array.from({ length: 64 }, (_, i) => i)
  return (
    <div className="hero-mosaic" aria-hidden="true">
      {tiles.map((i) => (
        <span key={i} className="hero-mosaic__tile" style={{ animationDelay: `${(i % 16) * 0.05}s` }} />
      ))}
    </div>
  )
}

export default HeroLogoMosaic
