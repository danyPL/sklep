import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produkty from './Components/Produkty';
import Koszyk from './Components/Koszyk';
import { KoszykContext,KoszykProvider } from './Components/KoszykProvider';

function App() {
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
  ]);

  return (
    <KoszykProvider>
      <div className="App">
        <Produkty produkty={produkty} />
        <Koszyk />
      </div>
    </KoszykProvider>
  );
}

export default App;