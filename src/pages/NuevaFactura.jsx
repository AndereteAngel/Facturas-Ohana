import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

function NuevaFactura() {
  const { carrito, total, vaciarCarrito } = useCarrito();

  const navigate = useNavigate();

  function finalizarFactura() {
    vaciarCarrito();

    navigate("/");
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Resumen de compra</h2>

      {carrito.length === 0 ? (
        <div className="alert alert-warning">
          No hay productos seleccionados.
        </div>
      ) : (
        <div className="card shadow p-4">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Producto</th>

                  <th>Fragancia</th>

                  <th>Valor unitario</th>

                  <th>Cantidad</th>

                  <th>Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {carrito.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nombre}</td>

                    <td>{item.fragancia}</td>

                    <td>${item.precio.toLocaleString("es-AR")}</td>

                    <td>{item.cantidad}</td>

                    <td>${item.subtotal.toLocaleString("es-AR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr />

          <h3 className="text-end">Total: ${total.toLocaleString("es-AR")}</h3>

          <button className="btn btn-success mt-3" onClick={finalizarFactura}>
            Finalizar Factura
          </button>
        </div>
      )}
    </div>
  );
}

export default NuevaFactura;
