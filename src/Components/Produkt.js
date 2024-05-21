import React, { useContext, useState } from 'react';
import { KoszykContext } from './KoszykProvider';

const Produkt = ({ id, name, price, image, amount,products }) => {
  const { addToCart } = useContext(KoszykContext);

  const AddToCart = () => {
    addToCart(id, name, price, ilosc);
  };

  const [ilosc, setIlosc] = useState(1);

  return (
    <div class="m-4 border p-4">
      <div class="row">
        <div class="col-sm">
          <img alt='test' style={{width:"200px",height:"250px"}} src={image}/>
        </div>
        <div class="col-sm">
          <h2>{ name }</h2>
          <p>Cena: {price} zł</p>
        </div>
        <div class="col-sm">
          <p>Ilosc:</p>
          <input type='number' placeholder={amount} onChange={(e) => setIlosc(e.target.value)} value={ilosc} /><br/>
          <button onClick={AddToCart} className="btn btn-primary">Dodaj do koszyka</button>
        </div>
      </div>
    </div>
  )
}

export default Produkt;