import '../css/header.css';
import logo from '../img/logoZapatilla.png';

const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src= {logo} alt="" />
        </div>
        <nav>
            <ul>
                <li className='seleccionado'><a href="#">Inicio</a></li>
                <li><a href="#">Marcas</a></li>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contactos</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header