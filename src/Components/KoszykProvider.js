import React, { createContext, useState } from 'react';

const KoszykContext = createContext();

const KoszykProvider = ({ children }) => {
  const [koszyk, setKoszyk] = useState([]);
  const [suma, setSuma] = useState(0);
  const [produkty,setProdukty] = useState([]);
  const addToCart = (id, name, price, ilosc) => {
    const totalprice = price * ilosc;
    const newid = id + 1;
    const newitem = {
      id: newid,
      name,
      price,
      ilosc,
      totalprice
    };
   
    const product = produkty.find(e => e.id === id);
    if (product && product.amount >= 0 && ilosc <= product.amount && ilosc > 0) {
      product.amount-=ilosc;
      setProdukty(produkty => produkty.map(e => e.id === id ? {...e, amount: e.amount } : e));
      setKoszyk(prevKoszyk => [...prevKoszyk, newitem]);
      setSuma(suma => suma + totalprice);
    }else if(ilosc < product.amount){
    alert("Nie ma aż tyle produktów lub wartość jest na minusie")
    }else if(ilosc){
        alert("Nie podano ilosci")
    }else{
      alert("Nie ma już produktów")
      return;

    }
  };

  const deleteItem = (id) => {
    setKoszyk(koszyk.filter((item) => item.id!== id));
  };

  return (
    <KoszykContext.Provider value={{ koszyk, addToCart, deleteItem, suma, produkty, setProdukty }}>
      {children}
    </KoszykContext.Provider>
  );
};

export { KoszykContext, KoszykProvider };