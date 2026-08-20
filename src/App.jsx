import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CarritoProvider } from "./context/CarritoContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NuevaFactura from "./pages/NuevaFactura";

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/nueva-factura" element={<NuevaFactura />} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
