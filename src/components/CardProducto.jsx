import "./CardProducto.css";

function CardProducto({ producto, onAgregar }) {
  return (
    <article className="card-producto">

      <div className="producto-imagen-contenedor">
        <span className="producto-categoria">
          {producto.categoria}
        </span>

        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="producto-imagen"
        />

        <div className="producto-brillo"></div>
      </div>

      <div className="producto-info">

        <h3>
          {producto.nombre}
        </h3>

        <p className="producto-descripcion">
          {producto.descripcion}
        </p>

        <div className="producto-datos">

          <p className="precio">
            ${producto.precio.toLocaleString("es-AR")}
          </p>

          <p className="stock">
            <span className="stock-indicador"></span>
            {producto.stock} disponibles
          </p>

        </div>

        <button
          type="button"
          onClick={() => onAgregar(producto)}
        >
          <span>Agregar al carrito</span>
          <span className="boton-flecha">→</span>
        </button>

      </div>

    </article>
  );
}

export default CardProducto;
;
