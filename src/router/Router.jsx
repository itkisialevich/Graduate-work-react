import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { AccessoriesPage } from "../components/AccessoriesPage";
import { BasketPage } from "../components/BasketPage";
import { DecorationsPage } from "../components/DecorationsPage";
import { JewerlyPage } from "../components/JewerlyPage";
import { NewProductPage } from "../components/NewProductPage";
import { ProductPage } from "../components/ProductPage";
import { WatchesPage } from "../components/WatchesPage";
import { WishlistPage } from "../components/WishlistPage";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/wishlist">
          <WishlistPage />
        </Route>
        <Route exact path="/basket">
          <BasketPage />
        </Route>
        <Route exact path="/new">
          <NewProductPage />
        </Route>
        <Route exact path="/jewerly">
          <JewerlyPage />
        </Route>
        <Route exact path="/watches">
          <WatchesPage />
        </Route>
        <Route exact path="/decorations">
          <DecorationsPage />
        </Route>
        <Route exact path="/accessories">
          <AccessoriesPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
