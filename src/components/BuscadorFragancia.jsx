import "./BuscadorFragancia.css";

import { useEffect, useRef, useState } from "react";

function BuscadorFragancia({ fragancias, valor, onSeleccionar }) {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const contenedorRef = useRef(null);

  const resultados = fragancias.filter((fragancia) =>
    fragancia.toLowerCase().includes(busqueda.toLowerCase())
  );

  const seleccionarFragancia = (fragancia) => {
    onSeleccionar(fragancia);
    setBusqueda("");
    setMostrarResultados(false);
  };

  // Cerrar la lista al hacer clic afuera
  useEffect(() => {
    const manejarClickAfuera = (event) => {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(event.target)
      ) {
        setMostrarResultados(false);
      }
    };

    document.addEventListener("mousedown", manejarClickAfuera);

    return () => {
      document.removeEventListener("mousedown", manejarClickAfuera);
    };
  }, []);

  return (
    <div className="buscador-fragancia" ref={contenedorRef}>
      <input
        type="text"
        className="form-control"
        placeholder="🔎 Buscar fragancia..."
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
          setMostrarResultados(true);
        }}
        onFocus={() => {
          setMostrarResultados(true);
        }}
      />

      {mostrarResultados && (
        <div className="resultados-fragancias">
          {resultados.length > 0 ? (
            resultados.map((fragancia) => (
              <button
                type="button"
                key={fragancia}
                className="fragancia-opcion"
                onClick={() => seleccionarFragancia(fragancia)}
              >
                🌸 {fragancia}
              </button>
            ))
          ) : (
            <div className="sin-resultados">
              No se encontraron fragancias
            </div>
          )}
        </div>
      )}

      {valor && (
        <div className="fragancia-seleccionada">
          <strong>Fragancia:</strong> {valor}
        </div>
      )}
    </div>
  );
}

export default BuscadorFragancia;
;