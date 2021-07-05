import React from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart";


function App() {
  return (
    <div className="App">
          <>
          <CartProvider>
          <Header />
          <Cart />  
          </CartProvider>
          </>
    </div>
  );
}

export default App;
