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
            <Card
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
