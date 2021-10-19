import React from "react";
import { HeaderMenu } from "../HeaderMenu";
import { Footer } from "../Footer";
import styles from "./ProductPage.module.css";
import twistRing from "../images/product/twistRing.jpg";

export function ProductPage() {
  return (
    <div className={styles.wrap}>
      <HeaderMenu />
      <div className={styles.main}>
        <img className={styles.productImg} src={twistRing} alt="" />
        <div className={styles.productOverview}>
          <div className={styles.productMain}>
            <div className={styles.productHeader}>
              <h3 className={styles.productTitle}>Twist ring</h3>
              <input className={styles.checkbox} type="radio" />
            </div>
            <p className={styles.productDiscription}>White, Rhodium plated</p>
            <div className={styles.productLine} />
          </div>

          <div className={styles.productFooter}>
            <h3 className={styles.productPrice}>USD 150</h3>
            <button className={styles.productButton}>Add to bag</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
