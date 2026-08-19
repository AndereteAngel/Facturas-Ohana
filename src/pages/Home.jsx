import "../styles/home.css";

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
    <main className="ohana-home">
      <div className="ohana-layout">
        {/* =========================
            PRODUCTOS
            ========================= */}

        <section className="ohana-productos">
          {productos.map((producto) => (
            <CardProducto
              key={producto.id}
              producto={producto}
              onAgregar={abrirModal}
            />
          ))}
        </section>

        {/* =========================
            CARRITO
            ========================= */}

        <aside className="ohana-carrito">
          <div className="ohana-carrito-header">
            <div className="ohana-carrito-icon">🛍️</div>

            <div>
              <h2>Tu carrito</h2>

              <p>
                {carrito.length === 0
                  ? "Todavía no agregaste productos"
                  : `${carrito.length} producto${
                      carrito.length !== 1 ? "s" : ""
                    }`}
              </p>
            </div>
          </div>

          <div className="ohana-carrito-linea" />

          {/* CARRITO VACÍO */}

          {carrito.length === 0 && (
            <div className="ohana-carrito-vacio">
              <span>🌸</span>

              <h3>Tu carrito está vacío</h3>

              <p>Elegí tus productos favoritos</p>
            </div>
          )}

          {/* PRODUCTOS DEL CARRITO */}

          {carrito.length > 0 && (
            <div className="ohana-carrito-items">
              {carrito.map((item, index) => (
                <div key={index} className="ohana-carrito-item">
                  <div className="ohana-item-info">
                    <h3>{item.nombre}</h3>

                    {item.fragancia && (
                      <p className="ohana-item-fragancia">{item.fragancia}</p>
                    )}

                    <p className="ohana-item-precio">
                      ${item.precio.toLocaleString("es-AR")}
                      <span> / unidad</span>
                    </p>
                  </div>

                  <div className="ohana-item-controles">
                    <div className="ohana-cantidad">
                      <button
                        type="button"
                        className="ohana-cantidad-btn"
                        onClick={() =>
                          disminuirCantidad(item.id, item.fragancia)
                        }
                      >
                        −
                      </button>

                      <span>{item.cantidad}</span>

                      <button
                        type="button"
                        className="ohana-cantidad-btn"
                        onClick={() =>
                          aumentarCantidad(item.id, item.fragancia)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="ohana-eliminar"
                      onClick={() => eliminarProducto(item.id, item.fragancia)}
                      title="Eliminar producto"
                    >
                      🗑
                    </button>
                  </div>

                  <div className="ohana-item-subtotal">
                    <span>Subtotal</span>

                    <strong>${item.subtotal.toLocaleString("es-AR")}</strong>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TOTAL */}

          <div className="ohana-carrito-total">
            <span>Total</span>

            <strong>${total.toLocaleString("es-AR")}</strong>
          </div>

          {/* FINALIZAR */}

          <button
            type="button"
            className="ohana-btn-finalizar"
            disabled={carrito.length === 0}
            onClick={() => navigate("/nueva-factura")}
          >
            Finalizar venta
          </button>
        </aside>
      </div>

      <ModalProducto
        visible={mostrarModal}
        producto={productoSeleccionado}
        onCerrar={() => setMostrarModal(false)}
      />
    </main>
  );
}

export default Home;
