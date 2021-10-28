import React from "react";
import { Router } from "./router/Router";

import { HomePage } from "./components/HomePage";
import { ProductPage } from "./components/ProductPage";
import { BasketPage } from "./components/BasketPage";
import { NewProductPage } from "./components/NewProductPage";
import { JewerlyPage } from "./components/JewerlyPage";
import { WatchesPage } from "./components/WatchesPage";
import { DecorationsPage } from "./components/DecorationsPage";
import { AccessoriesPage } from "./components/AccessoriesPage";
import { WishlistPage } from "./components/WishlistPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router />
      {/*<WishlistPage />*/}
      {/*<AccessoriesPage />*/}
      {/*<DecorationsPage />*/}
      {/*<WatchesPage />*/}
      {/*<JewerlyPage />*/}
      {/*<NewProductPage />*/}
      {/*<HomePage />*/}
      {/*<ProductPage />*/}
      {/*<BasketPage />*/}
    </div>
  );
}

export default App;
