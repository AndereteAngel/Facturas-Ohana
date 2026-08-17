import "./BuscadorFragancia.css";

import { useState } from "react";

function BuscadorFragancia({ fragancias, valor, onSeleccionar }) {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const resultados = fragancias.filter((fragancia) =>
    fragancia.toLowerCase().includes(busqueda.toLowerCase())
  );

  const seleccionarFragancia = (fragancia) => {
    onSeleccionar(fragancia);
    setBusqueda("");
    setMostrarResultados(false);
  };

  return (
    <div className="buscador-fragancia">
      <input
        type="text"
        className="form-control"
        placeholder="🔎 Buscar fragancia..."
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
          setMostrarResultados(true);
        }}
        onFocus={() => setMostrarResultados(true)}
      />

      {mostrarResultados && busqueda && (
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
            <div className="sin-resultados">No se encontraron fragancias</div>
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
