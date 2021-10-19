import React from "react";
import { HeaderMenu } from "../HeaderMenu";
import { Footer } from "../Footer";
import styles from "./BasketPage.module.css";
import twistRing from "../images/product/twistRing.jpg";

export function BasketPage() {
  return (
    <div className={styles.wrap}>
      <HeaderMenu />
      <div className={styles.main}>
        <h2 className={styles.basketTitle}>My Basket</h2>
        <div className={styles.lineBlack} />
        <div className={styles.basketCard}>
          <div className={styles.basketOverview}>
            <div className={styles.basketMain}>
              <img className={styles.basketImg} src={twistRing} alt="" />
              <div className={styles.productMain}>
                <div className={styles.productHeader}>
                  <h3 className={styles.productTitle}>Twist ring</h3>
                  <p className={styles.productCategory}>Jewerly</p>
                </div>
                <h3 className={styles.productPrice}>USD 150</h3>
              </div>
            </div>
            <button className={styles.basket}></button>
          </div>
          <div className={styles.basketLine} />
        </div>

        <div className={styles.basketCheck}>
          <div className={styles.total}>
            <h2 className={styles.totalTitle}>Total</h2>
            <p className={styles.totalPrice}>&#36;1,000.00</p>
          </div>
          <button className={styles.basketButton}>Checkout</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
