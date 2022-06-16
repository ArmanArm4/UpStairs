import { createContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
};

export default ProductsContext;
