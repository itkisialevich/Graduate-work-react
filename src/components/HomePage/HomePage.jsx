import React from "react";
import styles from "./HomePage.module.css";
import { HomeHeader } from "../HomeHeader";
import { BoxFilter } from "../BoxFilter";
import { ModalFilter } from "../ModalFilter";
import { Card } from "../Card";
import { Footer } from "../Footer";
import productJSON from "../product.json";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allproducts: productJSON,
    };
  }

  onClickAdd = (text) => {
    const filteredProducts = productJSON.filter((item) =>
      item.type.includes(text)
    );
    this.setState({ allproducts: filteredProducts });
  };

  sortReset = () => {
    const filteredProducts = this.state.allproducts.sort(
      () => Math.round(Math.random() * 100) - 50
    );
    this.setState({ allproducts: filteredProducts });
  };

  sortLowToHigh = () => {
    const filteredProducts = this.state.allproducts.sort(function (a, b) {
      return a.price - b.price;
    });
    this.setState({ allproducts: filteredProducts });
  };

  sortHighToLow = () => {
    const filteredProducts = this.state.allproducts.sort(function (a, b) {
      return b.price - a.price;
    });
    this.setState({ allproducts: filteredProducts });
  };

  addBasket = () => {};

  render() {
    return (
      <div className={styles.wrap}>
        <HomeHeader onClick={this.onClickAdd} />
        <BoxFilter
          sortLowToHigh={this.sortLowToHigh}
          sortHighToLow={this.sortHighToLow}
          sortReset={this.sortReset}
        />
        <ModalFilter />
        <div className={styles.main}>
          {this.state.allproducts.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price}
                checked={item.checked}
                isFavourite={item.isFavourite}
                addBasket={this.addBasket}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
