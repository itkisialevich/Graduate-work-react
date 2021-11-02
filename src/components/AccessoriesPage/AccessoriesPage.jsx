import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AccessoriesPage.module.css";
import { HeaderMenu } from "../HeaderMenu";
import { FilterByPrice } from "../FilterByPrice";
import { Card } from "../Card";
import { Footer } from "../Footer";

export function AccessoriesPage() {
  const allproducts = useSelector(
    (state) => state.generalState.allproducts
  ).filter((item) => item.category === "accessories");

  /*const filteredProducts = useSelector((state) =>
    state.generalState.filteredProducts.filter(
      (item) => item.category === "accessories"
    )
  );*/
  const dispatch = useDispatch();

  const onClickSearch = (text) => {
    dispatch({ type: "onClickSearch", text });
  };

  const sortReset = () => {
    dispatch({ type: "sortReset" });
  };

  const sortLowToHigh = () => {
    dispatch({ type: "sortLowToHigh" });
  };

  const sortHighToLow = () => {
    dispatch({ type: "sortHighToLow" });
  };

  const handleCheckboxChange = (id) => {
    dispatch({ type: "handleCheckboxChange", id });
  };

  const addBasket = (id) => {
    dispatch({ type: "addBasket", id });
  };

  return (
    <div className={styles.wrap}>
      <HeaderMenu onClick={onClickSearch} />
      <FilterByPrice
        sortLowToHigh={sortLowToHigh}
        sortHighToLow={sortHighToLow}
        sortReset={sortReset}
      />
      <div className={styles.main}>
        {allproducts.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
              //checked={item.checked}
              isFavourite={item.isFavourite}
              addBasket={addBasket}
              handleCheckboxChange={handleCheckboxChange}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
