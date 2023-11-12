import '../css/card.css';

const Card = ({datosZapatilla}) => {
   
  return (
    <div className="card">
        <img src={datosZapatilla.imagen} alt="" />
        <div className="datos">
            <span className="nomZapatilla">Zapatilla: {datosZapatilla.nombre}</span>
            <span className="nomZapatilla">{datosZapatilla.descripcion}</span>
            <span className="nomZapatilla">Precio: {datosZapatilla.precio}$</span>
            <span className="nomZapatilla">Cod: {datosZapatilla.sku} / Cant: {datosZapatilla.cantidad}</span>
        </div>
    </div>
  )
}

export default Card