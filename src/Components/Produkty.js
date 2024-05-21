import React, { useEffect, useState } from 'react'
import Produkt from './Produkt'
import komp from '../komp.webp';
import monitor from '../monitor.jfif'
import myszka from '../myszka.jpg'
import airpots from '../airpots.jfif'
import { useContext } from 'react';
import { KoszykContext } from './KoszykProvider';
export const produktys =[
  {
    id: 0,
    name: "AirPots",
    price: 500,
    image: airpots,
    amount:20
  },
  {
    id: 1,
    name: "Monitor",
    price: 700,
    image: monitor,
    amount:20

  },
  {
    id: 2,
    name: "Komputer",
    price: 4000,
    image: komp,
    amount:20

  },
  {
    id: 3,
    name: "Myszka",
    price: 150,
    image: myszka,
    amount:20

  }
]
const Produkty = ({ cart }) => {
  const { produkty,setProdukty } = useContext(KoszykContext);
  useEffect(()=>{
    setProdukty(produktys);
  },[])
  return (
    <div>
      {
        produkty.map((e, key) => (
          <Produkt key={key} id={e.id} name={e.name} price={e.price} image={e.image} cart={cart} amount={e.amount} products={produkty}/>
        ))
      }
    </div>
  )
}

export default Produkty