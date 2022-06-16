import { createContext } from "react";
import { useState, useMemo } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [devices, setdevices] = useState({});

  const devicesRequest = async () => {
    let response = await fetch(
      "https://online-shop-upstairs-default-rtdb.firebaseio.com/devices.json"
    );
    let user = await response.json();
    setdevices(user);
    console.log(user);
  };
  useMemo(() => {
    devicesRequest();
  }, []);
  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
};

export default ProductsContext;
