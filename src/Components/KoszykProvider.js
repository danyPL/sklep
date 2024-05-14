import React, { createContext, useState } from 'react';

const KoszykContext = createContext();

const KoszykProvider = ({ children }) => {
  const [koszyk, setKoszyk] = useState([
    {
      id: 0,
      name: "Airpots",
      price: 20,
      ilosc: 2,
      totalprice: 40
    }
  ]);

  const addToCart = (id, name, price, ilosc) => {
    const totalprice = price * ilosc;
    const newitem = {
      id,
      name,
      price,
      ilosc,
      totalprice
    };
    setKoszyk(prevKoszyk => [...prevKoszyk, newitem]);
  };

  const deleteItem = (id) => {
    setKoszyk(koszyk.filter((item) => item.id !== id));
  };

  return (
    <KoszykContext.Provider value={{ koszyk, addToCart, deleteItem }}>
      {children}
    </KoszykContext.Provider>
  );
};

export { KoszykContext, KoszykProvider };