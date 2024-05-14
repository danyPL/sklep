import React, { useState } from 'react'
import Produkt from './Produkt'

const Produkty = ({ cart }) => {
  const [produkty, setProdukty] = useState([
    {
      id: 0,
      name: "AirPots",
      price: 500
    },
    {
      id: 1,
      name: "Monitor",
      price: 700
    },
    {
      id: 2,
      name: "Komputer",
      price: 4000
    },
    {
      id: 3,
      name: "Myszka",
      price: 150
    }
  ])

  return (
    <div>
      {
        produkty.map((e, key) => (
          <Produkt key={key} id={e.id} name={e.name} price={e.price} cart={cart} />
        ))
      }
    </div>
  )
}

export default Produkty