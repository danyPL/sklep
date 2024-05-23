import React, { createContext, useState } from 'react';

const KoszykContext = createContext();

const KoszykProvider = ({ children }) => {
  const [koszyk, setKoszyk] = useState([]);
  const [suma, setSuma] = useState(0);
  const [produkty, setProdukty] = useState([]);

  const addToCart = (id, name, price, ilosc) => {
    const totalprice = price * ilosc;
    const newid = koszyk.length + 1;
    const newitem = {
      id: newid,
      name,
      price,
      ilosc,
      totalprice
    };

    const product = produkty.find(e => e.id === id);
    if (product && product.amount >= 0 && ilosc <= product.amount && ilosc > 0) {
      product.amount -= ilosc;
      setProdukty(produkty => produkty.map(e => e.id === id ? { ...e, amount: e.amount } : e));
      setKoszyk(prevKoszyk => [...prevKoszyk, newitem]);
      setSuma(suma => suma + totalprice);
    } else {
      alert("Nie ma już produktów lub ilość jest niepoprawna");
      return;
    }
  };

  const deleteItem = (id) => {
    const item = koszyk.find(item => item.id === id);
    if (item) {
      setKoszyk(koszyk.filter((item) => item.id !== id));
      setSuma(suma => suma - item.totalprice);
    }
  };

  const changeCount = (id, newIlosc) => {
    setKoszyk(koszyk.map(item => {
      if (item.id === id) {
        const oldTotalPrice = item.totalprice;
        item.ilosc = newIlosc;
        item.totalprice = item.price * newIlosc;
        setSuma(suma => suma - oldTotalPrice + item.totalprice);
      }
      return item;
    }));
  };

  return (
    <KoszykContext.Provider value={{ koszyk, addToCart, deleteItem, changeCount, suma, produkty, setProdukty }}>
      {children}
    </KoszykContext.Provider>
  );
};

export { KoszykContext, KoszykProvider };
