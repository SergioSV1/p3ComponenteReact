import '../css/hero.css';
import logoHero from '../img/logoHero.png';
import zapatilla from '../img/Zapatilla1.png';
const Hero = () => {
  return (
    <div className="hero">
        <div className="fondoHero">
            <img src={logoHero} alt="" />
            <h1>Zapatillas <br />para <br /> Caballeros</h1>
        </div>
        <img src={zapatilla} alt="" className='zapatilla'/>
    </div>
  )
}

export default Hero