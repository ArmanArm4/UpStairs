import { createContext } from "react";
import { useState, useMemo } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [phones, setphones] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [devices, setDevices] = useState([]);

  const tabletsRequest = async () => {
    let response = await fetch(
      "https://online-shop-upstairs-default-rtdb.firebaseio.com/Tablets.json"
    );
    let tabletdata = await response.json();
    const tabletsArray = [];

    for (const key in tabletdata) {
      tabletsArray.push({
        id: key,
        name: tabletdata[key].name,
        price: tabletdata[key].price,
        image: tabletdata[key].image,
      });
    }
    setTablets(tabletsArray);
    setDevices(tabletsArray);
  };
  const phonesRequest = async () => {
    let response = await fetch(
      "https://online-shop-upstairs-default-rtdb.firebaseio.com/devices.json"
    );
    let data = await response.json();

    const phonesArray = [];

    for (const key in data) {
      phonesArray.push({
        id: key,
        name: data[key].name,
        price: data[key].price,
        image: data[key].image,
      });
    }
    console.log(phonesArray);
    setphones(phonesArray);
    setDevices(devices => [...devices, ...phonesArray]);
  };
  useMemo(() => {
    tabletsRequest();
    phonesRequest();
  }, []);

  return (
    <ProductsContext.Provider value={{ phones, tablets, devices }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
