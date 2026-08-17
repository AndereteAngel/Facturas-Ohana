import { useEffect, useState } from "react";

import BuscadorFragancia from "./BuscadorFragancia";
import { useCarrito } from "../context/CarritoContext";

function ModalProducto({ producto, visible, onCerrar }) {
  const { agregarProducto } = useCarrito();

  const [fragancia, setFragancia] = useState("");
  const [color, setColor] = useState("");
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (producto) {
      setFragancia(producto.fragancias?.[0] || "");
      setColor(producto.colores?.[0] || "");
      setCantidad(1);
    }
  }, [producto]);

  if (!visible || !producto) return null;

  const tieneFragancias = producto.fragancias && producto.fragancias.length > 0;

  const tieneColores = producto.colores && producto.colores.length > 0;

  const subtotal = producto.precio * cantidad;

  const manejarAgregar = () => {
    agregarProducto({
      ...producto,
      fragancia: tieneFragancias ? fragancia : "",
      color: tieneColores ? color : "",
      cantidad,
      subtotal,
    });

    onCerrar();
  };

  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5>{producto.nombre}</h5>

            <button className="btn-close" onClick={onCerrar}></button>
          </div>

          <div className="modal-body">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded mb-3"
            />

            {/* FRAGANCIAS */}
            {tieneFragancias && (
              <>
                <label className="form-label">Fragancia</label>

                <BuscadorFragancia
                  fragancias={producto.fragancias}
                  valor={fragancia}
                  onSeleccionar={setFragancia}
                />
              </>
            )}

            {/* COLORES */}
            {tieneColores && (
              <>
                <label className="form-label mt-3">Color</label>

                <select
                  className="form-select"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  {producto.colores.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </>
            )}

            {/* CANTIDAD */}
            <label className="form-label mt-3">Cantidad</label>

            <input
              type="number"
              min="1"
              className="form-control"
              value={cantidad}
              onChange={(e) => {
                const nuevaCantidad = Number(e.target.value);

                setCantidad(nuevaCantidad < 1 ? 1 : nuevaCantidad);
              }}
            />

            {/* PRECIOS */}
            <h5 className="mt-4">
              Precio: ${producto.precio.toLocaleString("es-AR")}
            </h5>

            <h4>Subtotal: ${subtotal.toLocaleString("es-AR")}</h4>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCerrar}>
              Cancelar
            </button>

            <button className="btn btn-primary" onClick={manejarAgregar}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProducto;
