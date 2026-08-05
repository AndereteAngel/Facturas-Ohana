import CardProducto from "../components/CardProducto";
import ModalProducto from "../components/ModalProducto";
import productos from "../data/productos";
import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const {
    carrito,
    total,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
  } = useCarrito();

  const navigate = useNavigate();

  function abrirModal(producto) {
    setProductoSeleccionado(producto);
    setMostrarModal(true);
  }

  return (
    <div className="container-fluid py-4">
      <h1 className="text-center mb-4">Facturas Ohana</h1>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {productos.map((producto) => (
              <CardProducto
                key={producto.id}
                producto={producto}
                onAgregar={abrirModal}
              />
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow p-3 sticky-top" style={{ top: "20px" }}>
            <h3>🛒 Carrito</h3>

            <hr />

            {carrito.length === 0 && <p>No hay productos.</p>}

            {carrito.map((item, index) => (
              <div key={index} className="border rounded p-3 mb-3">
                <h5>{item.nombre}</h5>

                {item.fragancia && (
                  <p className="mb-1">
                    Fragancia: <strong>{item.fragancia}</strong>
                  </p>
                )}

                <p className="mb-2">
                  Precio unidad:{" "}
                  <strong>${item.precio.toLocaleString("es-AR")}</strong>
                </p>

                <div className="d-flex align-items-center gap-2 mb-3">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => disminuirCantidad(item.id, item.fragancia)}
                  >
                    -
                  </button>

                  <span className="fw-bold">{item.cantidad}</span>

                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => aumentarCantidad(item.id, item.fragancia)}
                  >
                    +
                  </button>

                  <button
                    className="btn btn-outline-danger btn-sm ms-auto"
                    onClick={() => eliminarProducto(item.id, item.fragancia)}
                  >
                    🗑
                  </button>
                </div>

                <strong>
                  Subtotal: ${item.subtotal.toLocaleString("es-AR")}
                </strong>
              </div>
            ))}

            <h3>Total: ${total.toLocaleString("es-AR")}</h3>

            <button
              className="btn btn-success w-100 mt-3"
              disabled={carrito.length === 0}
              onClick={() => navigate("/nueva-factura")}
            >
              Finalizar Venta
            </button>
          </div>
        </div>
      </div>

      <ModalProducto
        visible={mostrarModal}
        producto={productoSeleccionado}
        onCerrar={() => setMostrarModal(false)}
      />
    </div>
  );
}

export default Home;
