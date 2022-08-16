import { createContext } from "react";
import { useState, useMemo } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [phones, setphones] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [devices, setDevices] = useState([]);

  const APIRequest = async (type, typeState, deviceState) => {
    let response = await fetch(
      `https://online-shop-upstairs-default-rtdb.firebaseio.com/${type}.json`
    );
    let data = await response.json();

    const Array = [];

    for (const key in data) {
      Array.push({
        id: key,
        name: data[key].name,
        price: data[key].price,
        image: data[key].image,
        amount: 0,
        wishList: false,
        memory: 64,
      });
    }

    typeState(Array);
    deviceState(devices => [...devices, ...Array]);
  };

  useMemo(() => {
    APIRequest("Tablets", setTablets, setDevices);
    APIRequest("devices", setphones, setDevices);
  }, []);

  const deviceAmountHandler = (deviceId, amount) => {
    let index = devices.findIndex(device => {
      return device.id === deviceId;
    });

    let newArr = [...devices];
    newArr[index].amount = amount;
    setDevices(newArr);
  };
  const deviceMemoryHandler = (deviceId, Memory) => {
    let index = devices.findIndex(device => {
      return device.id === deviceId;
    });

    let newArr = [...devices];
    newArr[index].memory = Memory;
    setDevices(newArr);
  };

  return (
    <ProductsContext.Provider
      value={{
        phones,
        tablets,
        devices,
        deviceAmountHandler,
        deviceMemoryHandler,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
