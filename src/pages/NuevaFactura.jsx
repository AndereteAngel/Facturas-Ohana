import "../styles/nuevaFactura.css";

import LogoOhana from "../components/LogoOhana";
import { WHATSAPP_NUMBER } from "../config/contacto";
import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

function NuevaFactura() {
  const { carrito, total, vaciarCarrito } = useCarrito();

  const navigate = useNavigate();

  function finalizarFactura() {
    const mensaje = [
      "🌸 *NUEVO PEDIDO OHANA*",
      "",
      "🛍️ *Productos:*",
      "",
      ...carrito.map(
        (item) =>
          `• ${item.nombre}${item.fragancia ? ` — ${item.fragancia}` : ""} x${
            item.cantidad
          } — $${item.subtotal.toLocaleString("es-AR")}`
      ),
      "",
      `💰 *TOTAL: $${total.toLocaleString("es-AR")}*`,
      "",
      "¡Gracias por tu compra! 🌸",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(whatsappUrl, "_blank");

    vaciarCarrito();
    navigate("/");
  }

  return (
    <main className="ohana-nueva-factura">
      <section className="ohana-factura-card">
        {/* ENCABEZADO */}

        <header className="ohana-factura-header">
          <div>
            <h1>OHANA</h1>

            <p>Resumen de compra</p>
          </div>

          <span className="ohana-factura-fecha">
            {new Date().toLocaleDateString("es-AR")}
          </span>
        </header>

        <div className="ohana-divider" />

        {carrito.length === 0 ? (
          <div className="ohana-factura-vacia">
            <LogoOhana className="ohana-factura-logo" />

            <h2>No hay productos seleccionados</h2>

            <p>
              Tu carrito está vacío. Volvé a la tienda para elegir tus productos
              favoritos.
            </p>

            <button
              type="button"
              className="ohana-btn-primary"
              onClick={() => navigate("/")}
            >
              Volver a la tienda
            </button>
          </div>
        ) : (
          <>
            {/* PRODUCTOS */}

            <div className="ohana-factura-productos">
              <div className="ohana-factura-productos-titulo">
                <h2>Tu pedido</h2>

                <span>
                  {carrito.length} producto
                  {carrito.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="ohana-factura-tabla">
                <div className="ohana-factura-tabla-header">
                  <span>Producto</span>
                  <span>Fragancia</span>
                  <span>Precio</span>
                  <span>Cantidad</span>
                  <span>Subtotal</span>
                </div>

                {carrito.map((item, index) => (
                  <div
                    className="ohana-factura-fila"
                    key={`${item.id}-${item.fragancia}-${index}`}
                  >
                    <div className="ohana-factura-producto">{item.nombre}</div>

                    <div className="ohana-factura-fragancia">
                      {item.fragancia || "—"}
                    </div>

                    <div>${item.precio.toLocaleString("es-AR")}</div>

                    <div className="ohana-factura-cantidad">
                      {item.cantidad}
                    </div>

                    <div className="ohana-factura-subtotal">
                      ${item.subtotal.toLocaleString("es-AR")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TOTAL */}

            <div className="ohana-factura-total">
              <span>Total de la compra</span>

              <strong>${total.toLocaleString("es-AR")}</strong>
            </div>

            {/* ACCIÓN */}

            <div className="ohana-factura-acciones">
              <button
                type="button"
                className="ohana-btn-secondary"
                onClick={() => navigate("/")}
              >
                Volver
              </button>

              <button
                type="button"
                className="ohana-btn-primary"
                onClick={finalizarFactura}
              >
                Finalizar compra
              </button>
            </div>

            <footer className="ohana-factura-footer">
              <LogoOhana className="ohana-footer-logo" />

              <p>Gracias por elegir OHANA</p>

              <small>Aromas que hacen hogar</small>
            </footer>
          </>
        )}
      </section>
    </main>
  );
}

export default NuevaFactura;
