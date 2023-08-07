// src/App.js
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductCarousel from './components/ProductCarousel';

function App() {
  const [userToken, setUserToken] = useState(null);

  return (
    <div className="App">
      <h1>Product Management App</h1>
      {!userToken ? (
        <>
          <Register />
          <Login />
        </>
      ) : (
        <>
          <AddProduct token={userToken} />
          <ProductCarousel products={[]} />
        </>
      )}
    </div>
  );
}

export default App;
