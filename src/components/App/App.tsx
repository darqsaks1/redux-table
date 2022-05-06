import React from "react";
import "./App.css";
import Gallery from '../Gallery/gallery'
import Products from '../Products/products'

import Header from '../Header/header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
