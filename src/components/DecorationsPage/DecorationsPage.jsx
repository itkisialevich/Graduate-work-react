import React from "react";
import styles from "./DecorationsPage.module.css";
import { HeaderMenu } from "../HeaderMenu";
import { BoxFilter } from "../BoxFilter";
import { ModalFilter } from "../ModalFilter";
import { Card } from "../Card";
import { Footer } from "../Footer";
import productJSON from "../product.json";

export class DecorationsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allproducts: productJSON.filter(
        (item) => item.category === "decorations"
      ),
    };
  }

  onClickSearch = (text) => {
    const filteredProducts = productJSON.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase()) ||
        item.type.toLowerCase().includes(text.toLowerCase()) ||
        item.color.toLowerCase().includes(text.toLowerCase()) ||
        item.material.toLowerCase().includes(text.toLowerCase())
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
        <HeaderMenu onClick={this.onClickSearch} />
        <BoxFilter
          showFilters={this.showFilters}
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
