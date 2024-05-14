import React, { useContext, useState } from 'react';
import { KoszykContext } from './KoszykProvider';

const Produkt = ({ id, name, price }) => {
  const { addToCart } = useContext(KoszykContext);

  const AddToCart = () => {
    addToCart(id, name, price, ilosc);
  };

  const [ilosc, setIlosc] = useState(1);

  return (
    <div className='container'>
      <div className="card">
        <div className="card-body">
          <div className='col'>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Cena: {price}</p>
          </div>
          <div className='col'>
            <p className="card-text">Ilosc:</p>
            <input type='number' onChange={(e) => setIlosc(e.target.value)} value={ilosc} />
          </div>
          <row>
          </row>
          <button onClick={AddToCart} className="btn btn-primary">Dodaj do koszyka</button>
        </div>
      </div>
    </div>
  )
}

export default Produkt;