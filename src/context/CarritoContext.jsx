import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
    setCarrito([...carrito, producto]);
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  const total = carrito.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        vaciarCarrito,
        total,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}
