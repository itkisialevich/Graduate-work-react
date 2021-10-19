import React from "react";

import { HomePage } from "./components/HomePage";
import { ProductPage } from "./components/ProductPage";
import { BasketPage } from "./components/BasketPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/*<ProductPage />*/}
      {/*<BasketPage />*/}
    </div>
  );
}

export default App;
