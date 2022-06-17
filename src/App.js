import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home";
import Device from "./pages/Device.js";
import ShopingCart from "./pages/ShopingCart.js";

function App() {
  return (
    <ProductsProvider>
      <Nav></Nav>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/user/shoping-cart"} element={<ShopingCart />} />
        <Route path={"/device/:links"} element={<Device />} />
      </Routes>
      <Footer></Footer>
    </ProductsProvider>
  );
}

export default App;
