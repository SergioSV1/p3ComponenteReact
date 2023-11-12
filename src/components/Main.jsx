import Card from "./Card"
import Hero from "./Hero"
import ZpNaranja from '../img/naranja.jpeg';
import ZpRojo from '../img/rojo.jpeg';


const Main = () => {
    const Datos = [
        {
            imagen: ZpNaranja,
            nombre:'Hero Sport',
            descripcion:'Diseñado para Correr en Concreto y Cesped 100% material (cuero y Nylon extra fuerte)',
            precio:10000,
            sku:'ZP100',
            cantidad:125
        },
        {
            imagen: ZpRojo,
            nombre:'Hero Mountain',
            descripcion:'Ideal para caminatas en el campo y montaña (cuero y Nylon extra fuerte)',
            precio:15000,
            sku:'ZP150',
            cantidad:79
        }
    ]
  return (
    
    <div>
        <Hero/>
        <div style={{display:'flex'}}>
            <Card datosZapatilla = {Datos[0]} />
            <Card datosZapatilla = {Datos[1]} />
        </div>
    </div>
  )
}

export default Main