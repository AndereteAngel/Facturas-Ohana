import CardProducto from "../components/CardProducto";
import ModalProducto from "../components/ModalProducto";
import productos from "../data/productos";
import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const { carrito, total } = useCarrito();

  const navigate = useNavigate();

  function abrirModal(producto) {
    setProductoSeleccionado(producto);
    setMostrarModal(true);
  }

  return (
    <div className="container-fluid py-4">
      <h1 className="text-center mb-4">Facturas Ohana</h1>

      <div className="row">
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
          <div className="card shadow p-3">
            <h3>🛒 Carrito</h3>

            <hr />

            {carrito.length === 0 && <p>No hay productos.</p>}

            {carrito.map((item, index) => (
              <div key={index} className="mb-3">
                <strong>{item.nombre}</strong>
                <br />
                Fragancia: {item.fragancia}
                <br />
                Cantidad: {item.cantidad}
                <br />
                Precio: ${item.precio.toLocaleString("es-AR")}
                <br />
                <strong>
                  Subtotal: ${item.subtotal.toLocaleString("es-AR")}
                </strong>
                <hr />
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
