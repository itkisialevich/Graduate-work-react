import React from "react";
/*import { HeaderMenu } from "../HeaderMenu";*/
import styles from "./HomePage.module.css";
import { HomeHeader } from "../HomeHeader";
import { Card } from "../Card";
import { Footer } from "../Footer";
import product from "../product.json";

export function HomePage() {
  return (
    <div className={styles.wrap}>
      {/*<HeaderMenu />*/}
      <HomeHeader />
      <div className={styles.main}>
        {product.map((item) => {
          return (
            <div key={item.id} className={styles.product}>
              <input className={styles.checkbox} type="radio" />
              <img className={styles.productImage} src={item.img} alt="" />
            </div>
          );
        })}

        <Card />
      </div>
      <Footer />
    </div>
  );
}
