import React from "react";
import styles from "./Card.module.css";
//import twistRing from "../images/product/twistRing.jpg";

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardFavourite}></div>
      <img
        className={styles.cardImage}
        //src="/images/product/watches/octea-lux-watch--white.jpg"
        src="/images/product/rings/twistRing.jpg"
        alt=""
      />
      <h3 className={styles.cardTitle}>Twist ring</h3>
      <p className={styles.cardDiscription}>White, Rhodium plated</p>
      <div className={styles.cardFooter}>
        <h3 className={styles.cardPrice}>$150</h3>
        <button className={styles.cardButton}>Add to bag</button>
      </div>
    </div>
  );
}
