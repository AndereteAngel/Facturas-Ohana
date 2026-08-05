import "./CardProducto.css";

function CardProducto({ producto, onAgregar }) {
  return (
    <div className="card-producto">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="producto-imagen"
      />

      <div className="producto-info">
        <h3>{producto.nombre}</h3>

        <p>{producto.descripcion}</p>

        <p className="precio">${producto.precio.toLocaleString("es-AR")}</p>

        <p className="stock">Stock: {producto.stock} unidades</p>

        <button onClick={() => onAgregar(producto)}>Agregar</button>
      </div>
    </div>
  );
}

export default CardProducto;
