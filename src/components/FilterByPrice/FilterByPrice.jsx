import React from "react";
import styles from "./FilterByPrice.module.css";

export function FilterByPrice({ sortLowToHigh, sortReset, sortHighToLow }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.filterByPrice}>
        <p className={styles.filterTitle}>Sort by price:</p>
        <button
          onClick={() => sortLowToHigh()}
          className={`${styles.filterButton} ${styles.priceUp}`}
        ></button>
        <button
          onClick={() => sortReset()}
          className={`${styles.filterButton} ${styles.priceReset}`}
        ></button>
        <button
          onClick={() => sortHighToLow()}
          className={`${styles.filterButton} ${styles.priceDown}`}
        ></button>
      </div>
    </div>
  );
}
