import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { HeaderMenu } from "../HeaderMenu";
import { Footer } from "../Footer";
import styles from "./BasketPage.module.css";

export function BasketPage({ id, deleteFromBasket, totalPrice }) {
  const basket = useSelector((state) => state.generalState.basket);
  const total = useSelector((state) => state.generalState.total);
  const dispatch = useDispatch();

  deleteFromBasket = (id) => {
    dispatch({ type: "deleteFromBasket", id });
  };

  totalPrice = () => {
    dispatch({ type: "totalPrice" });
  };

  return (
    <div className={styles.wrap}>
      <HeaderMenu />
      <div className={styles.main}>
        <h2 className={styles.basketTitle}>My Basket</h2>
        <div className={styles.lineBlack} />
        {basket.map((item) => {
          return (
            <div className={styles.basketCard} id={id}>
              <div className={styles.basketOverview}>
                <div className={styles.basketMain}>
                  <img className={styles.basketImg} src={item.img} alt="" />
                  <div className={styles.productMain}>
                    <div className={styles.productHeader}>
                      <h3 className={styles.productTitle}>{item.title}</h3>
                      <p className={styles.productCategory}>{item.category}</p>
                    </div>
                    <h3 className={styles.productPrice}>USD {item.price}</h3>
                  </div>
                </div>
                <button
                  className={styles.basket}
                  onClick={() => deleteFromBasket(id)}
                ></button>
              </div>
              <div className={styles.basketLine} />
            </div>
          );
        })}

        <div className={styles.basketCheck}>
          <div className={styles.total}>
            <h2 className={styles.totalTitle}>Total</h2>
            <p className={styles.totalPrice}>
              &#36; {() => totalPrice()} {total}
            </p>
          </div>
          <button className={styles.basketButton}>Checkout</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
