import { useEffect, useState } from "react";

import BuscadorFragancia from "./BuscadorFragancia";
import { useCarrito } from "../context/CarritoContext";

function ModalProducto({
  producto,
  visible,
  onCerrar,
  fraganciaInicial = null,
}) {
  const { agregarProducto } = useCarrito();

  const [fragancia, setFragancia] = useState("");
  const [color, setColor] = useState("");
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (!producto) return;

    const fraganciasProducto = Array.isArray(producto.fragancias)
      ? producto.fragancias
      : [];

    const fraganciaEncontrada =
      fraganciaInicial &&
      fraganciasProducto.find(
        (item) =>
          String(item).toLowerCase() ===
          String(fraganciaInicial).toLowerCase()
      );

    setFragancia(
      fraganciaEncontrada ||
      fraganciasProducto[0] ||
      ""
    );

    setColor(producto.colores?.[0] || "");
    setCantidad(1);
  }, [producto, fraganciaInicial]);

  if (!visible || !producto) {
    return null;
  }

  const tieneFragancias =
    Array.isArray(producto.fragancias) &&
    producto.fragancias.length > 0;

  const tieneColores =
    Array.isArray(producto.colores) &&
    producto.colores.length > 0;

  const cantidadNumerica = Number(cantidad) || 0;

  const subtotal =
    producto.precio * cantidadNumerica;

  function manejarAgregar() {
    const cantidadFinal = Math.max(
      1,
      Number(cantidad) || 1
    );

    agregarProducto({
      ...producto,
      fragancia: tieneFragancias
        ? fragancia
        : "",
      color: tieneColores
        ? color
        : "",
      cantidad: cantidadFinal,
      subtotal:
        producto.precio * cantidadFinal,
    });

    onCerrar();
  }

  return (
    <div
      className="modal d-block"
      style={{
        background: "rgba(0,0,0,.5)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content">

          {/* HEADER */}

          <div className="modal-header">

            <h5>
              {producto.nombre}
            </h5>

            <button
              type="button"
              className="btn-close"
              onClick={onCerrar}
              aria-label="Cerrar"
            ></button>

          </div>

          {/* BODY */}

          <div className="modal-body">

            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded mb-3"
            />

            {/* FRAGANCIA */}

            {tieneFragancias && (
              <>
                <label className="form-label">
                  Fragancia
                </label>

                <BuscadorFragancia
                  fragancias={producto.fragancias}
                  valor={fragancia}
                  onSeleccionar={setFragancia}
                />
              </>
            )}

            {/* COLOR */}

            {tieneColores && (
              <>
                <label className="form-label mt-3">
                  Color
                </label>

                <select
                  className="form-select"
                  value={color}
                  onChange={(e) =>
                    setColor(e.target.value)
                  }
                >
                  {producto.colores.map(
                    (item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    )
                  )}
                </select>
              </>
            )}

            {/* CANTIDAD */}

            <label className="form-label mt-3">
              Cantidad
            </label>

            <input
              type="number"
              min="1"
              className="form-control"
              value={cantidad}
              onChange={(e) =>
                setCantidad(e.target.value)
              }
              onBlur={() => {
                if (
                  cantidad === "" ||
                  Number(cantidad) < 1
                ) {
                  setCantidad(1);
                }
              }}
            />

            {/* PRECIO */}

            <h5 className="mt-4">
              Precio: $
              {producto.precio.toLocaleString(
                "es-AR"
              )}
            </h5>

            <h4>
              Subtotal: $
              {subtotal.toLocaleString(
                "es-AR"
              )}
            </h4>

          </div>

          {/* FOOTER */}

          <div className="modal-footer">

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCerrar}
            >
              Cancelar
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={manejarAgregar}
            >
              Agregar al carrito
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ModalProducto;
;
