import "../styles/home.css";

import { useMemo, useState } from "react";

import CardProducto from "../components/CardProducto";
import LogoOhana from "../components/LogoOhana";
import ModalProducto from "../components/ModalProducto";
import { estilosFragancias } from "../data/fragancias";
import productos from "../data/productos";
import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const [estiloSeleccionado, setEstiloSeleccionado] = useState(null);
  const [fraganciaSeleccionada, setFraganciaSeleccionada] = useState(null);
  const [busquedaFragancia, setBusquedaFragancia] = useState("");
  const [ambienteSeleccionado, setAmbienteSeleccionado] = useState("Todos");

  const {
    carrito,
    total,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
  } = useCarrito();

  const navigate = useNavigate();

  // =====================================================
  // ABRIR MODAL
  // =====================================================

  function abrirModal(producto) {
    setProductoSeleccionado(producto);
    setMostrarModal(true);
  }

  // =====================================================
  // AMBIENTES POR CATEGORÍA
  // =====================================================

  const ambientesPorCategoria = {
    Textiles: ["Hogar", "Ropa"],
    Aerosoles: ["Hogar", "Trabajo"],
    Difusores: ["Hogar", "Trabajo"],
    Touch: ["Hogar", "Trabajo"],
    Equipos: ["Hogar", "Trabajo"],
    Mini: ["Hogar", "Trabajo"],
    Tarjetas: ["Hogar", "Auto"],
    Caritas: ["Auto"],
    Autos: ["Auto"],
    Aceites: ["Hogar", "Trabajo"],
    Sahumerios: ["Hogar", "Trabajo"],
  };

  // =====================================================
  // FRAGANCIAS DEL ESTILO SELECCIONADO
  // =====================================================

  const fraganciasDisponibles = useMemo(() => {
    if (!estiloSeleccionado) {
      return [];
    }

    return estilosFragancias[estiloSeleccionado]?.fragancias || [];
  }, [estiloSeleccionado]);

  // =====================================================
  // BUSCAR DENTRO DE LAS FRAGANCIAS
  // =====================================================

  const fraganciasFiltradas = useMemo(() => {
    const texto = busquedaFragancia.trim().toLowerCase();

    if (!texto) {
      return fraganciasDisponibles;
    }

    return fraganciasDisponibles.filter((fragancia) =>
      fragancia.toLowerCase().includes(texto)
    );
  }, [fraganciasDisponibles, busquedaFragancia]);

  // =====================================================
  // PRODUCTOS FILTRADOS
  // =====================================================

  const productosFiltrados = useMemo(() => {
    return productos.filter((producto) => {
      const fraganciasProducto = Array.isArray(producto.fragancias)
        ? producto.fragancias
        : [];

      const coincideFragancia =
        !fraganciaSeleccionada ||
        fraganciasProducto.some(
          (fragancia) =>
            String(fragancia).toLowerCase() ===
            fraganciaSeleccionada.toLowerCase()
        );

      const ambientesProducto =
        ambientesPorCategoria[producto.categoria] || [];

      const coincideAmbiente =
        ambienteSeleccionado === "Todos" ||
        ambientesProducto.includes(ambienteSeleccionado);

      return coincideFragancia && coincideAmbiente;
    });
  }, [fraganciaSeleccionada, ambienteSeleccionado]);

  // =====================================================
  // SELECCIONAR ESTILO
  // =====================================================

  function seleccionarEstilo(clave) {
    if (estiloSeleccionado === clave) {
      setEstiloSeleccionado(null);
      setFraganciaSeleccionada(null);
      setBusquedaFragancia("");
      return;
    }

    setEstiloSeleccionado(clave);
    setFraganciaSeleccionada(null);
    setBusquedaFragancia("");
  }

  // =====================================================
  // SELECCIONAR FRAGANCIA
  // =====================================================

  function seleccionarFragancia(fragancia) {
    setFraganciaSeleccionada(fragancia);
    setBusquedaFragancia("");
  }

  // =====================================================
  // LIMPIAR TODO
  // =====================================================

  function limpiarFiltros() {
    setEstiloSeleccionado(null);
    setFraganciaSeleccionada(null);
    setBusquedaFragancia("");
    setAmbienteSeleccionado("Todos");
  }

  // =====================================================
  // VOLVER A TODAS LAS FRAGANCIAS
  // =====================================================

  function limpiarFragancia() {
    setFraganciaSeleccionada(null);
    setBusquedaFragancia("");
  }

  return (
    <main className="ohana-home">
      <div className="ohana-layout">

        {/* =====================================================
            PRODUCTOS
            ===================================================== */}

        <section className="ohana-productos-contenedor">

          {/* =====================================================
              SELECTOR DE AROMAS
              ===================================================== */}

          <div className="ohana-estilos-card">

            <div className="ohana-estilos-header">

              <div className="ohana-estilos-icono">
                ✨
              </div>

              <div>

                <h1>
                  ¿Qué tipo de aroma buscás?
                </h1>
              </div>

            </div>

            {/* =================================================
                ESTILOS
                ================================================= */}

            <div className="ohana-estilos-grid">

              {Object.entries(estilosFragancias).map(
                ([clave, estilo]) => (
                  <button
                    key={clave}
                    type="button"
                    className={`ohana-estilo-card ${
                      estiloSeleccionado === clave
                        ? "activo"
                        : ""
                    }`}
                    onClick={() => seleccionarEstilo(clave)}
                  >
                    <span className="ohana-estilo-icono">
                      {estilo.icono}
                    </span>

                    <span className="ohana-estilo-contenido">

                      <strong>
                        {estilo.nombre}
                      </strong>

                      <small>
                        {estilo.descripcion}
                      </small>

                    </span>
                  </button>
                )
              )}

            </div>

            {/* =================================================
                FRAGANCIAS DEL ESTILO
                ================================================= */}

            {estiloSeleccionado && (
              <div className="ohana-fragancias-panel">

                <div className="ohana-fragancias-header">

                  <div>

                    <p className="ohana-fragancias-label">
                      {estilosFragancias[estiloSeleccionado].icono}{" "}
                      {estilosFragancias[estiloSeleccionado].nombre}
                    </p>

                    <h2>
                      Elegí una fragancia
                    </h2>

                    <p>
                      Explorá las opciones disponibles dentro de este
                      estilo.
                    </p>

                  </div>

                  {fraganciaSeleccionada && (
                    <button
                      type="button"
                      className="ohana-fragancia-quitar"
                      onClick={limpiarFragancia}
                    >
                      Ver todas
                    </button>
                  )}

                </div>

                {/* BUSCAR DENTRO DEL ESTILO */}

                <div className="ohana-fragancias-buscador">

                  <span>
                    🔎
                  </span>

                  <input
                    type="text"
                    value={busquedaFragancia}
                    onChange={(e) =>
                      setBusquedaFragancia(e.target.value)
                    }
                    placeholder={`Buscar dentro de ${
                      estilosFragancias[
                        estiloSeleccionado
                      ].nombre.toLowerCase()
                    }...`}
                  />

                  {busquedaFragancia && (
                    <button
                      type="button"
                      onClick={() => setBusquedaFragancia("")}
                      aria-label="Limpiar búsqueda"
                    >
                      ×
                    </button>
                  )}

                </div>

                {/* FRAGANCIA SELECCIONADA */}

                {fraganciaSeleccionada && (
                  <div className="ohana-fragancia-activa">

                    <span>
                      {estilosFragancias[estiloSeleccionado].icono}
                    </span>

                    <div>
                      <small>
                        Fragancia seleccionada
                      </small>

                      <strong>
                        {fraganciaSeleccionada}
                      </strong>
                    </div>

                    <button
                      type="button"
                      onClick={limpiarFragancia}
                      aria-label="Quitar fragancia"
                    >
                      ×
                    </button>

                  </div>
                )}

                {/* LISTA */}

                {!fraganciaSeleccionada && (
                  <div className="ohana-fragancias-lista">

                    {fraganciasFiltradas.length > 0 ? (
                      fraganciasFiltradas.map((fragancia) => (
                        <button
                          key={fragancia}
                          type="button"
                          className="ohana-fragancia-btn"
                          onClick={() =>
                            seleccionarFragancia(fragancia)
                          }
                        >
                          <span>
                            {estilosFragancias[estiloSeleccionado].icono}
                          </span>

                          {fragancia}
                        </button>
                      ))
                    ) : (
                      <div className="ohana-fragancias-vacio">

                        <span>
                          🔎
                        </span>

                        <p>
                          No encontramos esa fragancia dentro de este
                          estilo.
                        </p>

                      </div>
                    )}

                  </div>
                )}

              </div>
            )}

          </div>

          {/* =====================================================
              FILTRO POR AMBIENTE
              ===================================================== */}

          <div className="ohana-filtros-secundarios">

            <div className="ohana-ambientes">

              <p className="ohana-ambientes-titulo">
                ¿Dónde querés perfumar?
              </p>

              <div className="ohana-ambientes-opciones">

                {[
                  { nombre: "Todos", icono: "✨" },
                  { nombre: "Hogar", icono: "🏠" },
                  { nombre: "Auto", icono: "🚗" },
                  { nombre: "Ropa", icono: "👕" },
                  { nombre: "Trabajo", icono: "💼" },
                ].map((ambiente) => (
                  <button
                    key={ambiente.nombre}
                    type="button"
                    className={`ohana-ambiente-btn ${
                      ambienteSeleccionado === ambiente.nombre
                        ? "activo"
                        : ""
                    }`}
                    onClick={() =>
                      setAmbienteSeleccionado(ambiente.nombre)
                    }
                  >
                    <span>
                      {ambiente.icono}
                    </span>

                    {ambiente.nombre}
                  </button>
                ))}

              </div>

            </div>

          </div>

          {/* =====================================================
              RESULTADO
              ===================================================== */}

          <div className="ohana-resultados-info">

            {fraganciaSeleccionada ? (
              <>
                <span>
                  {estilosFragancias[estiloSeleccionado].icono}
                </span>

                <p>
                  Productos con fragancia{" "}
                  <strong>
                    {fraganciaSeleccionada}
                  </strong>
                </p>
              </>
            ) : estiloSeleccionado ? (
              <>
                <span>
                  {estilosFragancias[estiloSeleccionado].icono}
                </span>

                <p>
                  Explorando fragancias{" "}
                  <strong>
                    {estilosFragancias[estiloSeleccionado].nombre}
                  </strong>
                </p>
              </>
            ) : (
              <p>
                Mostrando todos nuestros productos
              </p>
            )}

            <small>
              {productosFiltrados.length}{" "}
              {productosFiltrados.length === 1
                ? "producto encontrado"
                : "productos encontrados"}
            </small>

          </div>

          {/* =====================================================
              CARDS DE PRODUCTOS
              ===================================================== */}

          <div className="ohana-productos">

            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((producto) => (
                <CardProducto
                  key={producto.id}
                  producto={producto}
                  onAgregar={abrirModal}
                />
              ))
            ) : (
              <div className="ohana-sin-resultados">

                <div className="ohana-sin-resultados-icon">
                  🌸
                </div>

                <h2>
                  No encontramos productos
                </h2>

                <p>
                  Probá con otra fragancia o elegí otro ambiente.
                </p>

                <button
                  type="button"
                  onClick={limpiarFiltros}
                >
                  Ver todos los productos
                </button>

              </div>
            )}

          </div>

        </section>

        {/* =====================================================
            CARRITO
            ===================================================== */}

        <aside className="ohana-carrito">

          <div className="ohana-carrito-header">

            <div className="ohana-carrito-icon">
              🛍️
            </div>

            <div>

              <h2>
                Tu carrito
              </h2>

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

          {carrito.length === 0 && (
            <div className="ohana-carrito-vacio">

              <LogoOhana className="ohana-carrito-logo" />

              <h3>
                Tu carrito está vacío
              </h3>

              <p>
                Elegí tus productos favoritos
              </p>

            </div>
          )}

          {carrito.length > 0 && (
            <div className="ohana-carrito-items">

              {carrito.map((item, index) => (

                <div
                  key={index}
                  className="ohana-carrito-item"
                >

                  <div className="ohana-item-info">

                    <h3>
                      {item.nombre}
                    </h3>

                    {item.fragancia && (
                      <p className="ohana-item-fragancia">
                        {item.fragancia}
                      </p>
                    )}

                    <p className="ohana-item-precio">
                      ${item.precio.toLocaleString("es-AR")}
                      <span>
                        {" "}
                        / unidad
                      </span>
                    </p>

                  </div>

                  <div className="ohana-item-controles">

                    <div className="ohana-cantidad">

                      <button
                        type="button"
                        className="ohana-cantidad-btn"
                        onClick={() =>
                          disminuirCantidad(
                            item.id,
                            item.fragancia
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.cantidad}
                      </span>

                      <button
                        type="button"
                        className="ohana-cantidad-btn"
                        onClick={() =>
                          aumentarCantidad(
                            item.id,
                            item.fragancia
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      type="button"
                      className="ohana-eliminar"
                      onClick={() =>
                        eliminarProducto(
                          item.id,
                          item.fragancia
                        )
                      }
                      title="Eliminar producto"
                    >
                      🗑
                    </button>

                  </div>

                  <div className="ohana-item-subtotal">

                    <span>
                      Subtotal
                    </span>

                    <strong>
                      ${item.subtotal.toLocaleString("es-AR")}
                    </strong>

                  </div>

                </div>

              ))}

            </div>
          )}

          <div className="ohana-carrito-total">

            <span>
              Total
            </span>

            <strong>
              ${total.toLocaleString("es-AR")}
            </strong>

          </div>

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

      {/* =====================================================
          MODAL
          ===================================================== */}

      <ModalProducto
        visible={mostrarModal}
        producto={productoSeleccionado}
        fraganciaInicial={fraganciaSeleccionada}
        onCerrar={() => setMostrarModal(false)}
      />

    </main>
  );
}

export default Home;

