import React from "react";
import styles from "./BoxFilter.module.css";

export function BoxFilter({ sortLowToHigh, sortReset, sortHighToLow }) {
  return (
    <div className={styles.boxFilter}>
      <div className={styles.generalFilter}>
        <button className={styles.generalButton}>Filter by</button>
      </div>
      <div className={styles.filterByPrice}>
        <p className={styles.filterTitle}>Sort by price:</p>
        <button
          onClick={() => sortLowToHigh()}
          className={(styles.filterButton, styles.priceUp)}
        ></button>
        <button
          onClick={() => sortReset()}
          className={(styles.filterButton, styles.priceReset)}
        ></button>
        <button
          onClick={() => sortHighToLow()}
          className={(styles.filterButton, styles.priceDown)}
        ></button>
      </div>
      {/*<div className={styles.priceFilter}>
        <select
          onChange={() => {
            sortBy();
          }}
          className={styles.minimal}
        >
          <option value="Sort by price">Sort by price</option>
          <option value="Price Low to High">Price Low to High</option>
          <option value="Price High to Low">Price High to Low</option>
        </select>
        </div>*/}
    </div>
  );
}
