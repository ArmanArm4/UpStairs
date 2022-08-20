import "./App.css";

import { Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import { UserInfoProvider } from "./context/UserAuthContext";

import Home from "./pages/Home";
import Device from "./pages/Device.js";
import ShoppingCart from "./pages/ShoppingCart.js";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.js";
import NotFound from "./pages/NotFound";

import ForgotPassword from "./pages/ForgotPassword.js";

function App() {
  return (
    <ProductsProvider>
      <UserInfoProvider>
        <Routes>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route path={"/"} element={<Home />} />
          <Route path={"/user/shoping-cart"} element={<ShoppingCart />} />
          <Route path={"/device/:links"} element={<Device />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </UserInfoProvider>
    </ProductsProvider>
  );
}

export default App;
