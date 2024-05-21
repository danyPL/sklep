import React, { useContext } from 'react';
import { KoszykContext } from './KoszykProvider';

const Koszyk = () => {
  const { koszyk, deleteItem, suma } = useContext(KoszykContext);

  return (
    <div className='container'>
      <h1>Zawartość koszyka</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Lp.</th>
            <th scope="col">Produkt</th>
            <th scope="col">Cena jednostkowa</th>
            <th scope="col">Ilość</th>
            <th scope="col">Cena całkowita</th>
            <th scope="col">Ackja</th>
          </tr>
        </thead>
        <tbody>
          {
            koszyk.map((e, i) => (
              <tr key={i}>
                <th scope='row'>{e.id}</th>
                <td>{e.name}</td>
                <td>{e.price}zł</td>
                <td>{e.ilosc}</td>
                <td>{e.totalprice}zł</td>
                <button className='btn btn-danger mb-1' onClick={() => deleteItem(e.id)}>Usuń</button>
              </tr>
            ))
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Suma:</td>
            <td>{suma}zł</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Koszyk;
