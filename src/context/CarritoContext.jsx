import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
    const existe = carrito.find(
      (item) => item.id === producto.id && item.fragancia === producto.fragancia
    );

    if (existe) {
      const nuevoCarrito = carrito.map((item) => {
        if (item.id === producto.id && item.fragancia === producto.fragancia) {
          const nuevaCantidad = item.cantidad + producto.cantidad;

          return {
            ...item,
            cantidad: nuevaCantidad,
            subtotal: item.precio * nuevaCantidad,
          };
        }

        return item;
      });

      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, producto]);
    }
  }

  function aumentarCantidad(id, fragancia) {
    setCarrito(
      carrito.map((item) => {
        if (item.id === id && item.fragancia === fragancia) {
          const cantidadNueva = item.cantidad + 1;

          return {
            ...item,
            cantidad: cantidadNueva,
            subtotal: item.precio * cantidadNueva,
          };
        }

        return item;
      })
    );
  }

  function disminuirCantidad(id, fragancia) {
    setCarrito(
      carrito
        .map((item) => {
          if (item.id === id && item.fragancia === fragancia) {
            const cantidadNueva = item.cantidad - 1;

            return {
              ...item,
              cantidad: cantidadNueva,
              subtotal: item.precio * cantidadNueva,
            };
          }

          return item;
        })
        .filter((item) => item.cantidad > 0)
    );
  }

  function eliminarProducto(id, fragancia) {
    setCarrito(
      carrito.filter(
        (item) => !(item.id === id && item.fragancia === fragancia)
      )
    );
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
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
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
