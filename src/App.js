import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import Nav from "./components/Nav.js";
import Home from "./pages/Home";

function App() {
  return (
    <ProductsProvider>
      <Nav></Nav>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
