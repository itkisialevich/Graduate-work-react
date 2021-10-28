import React from "react";
import styles from "./BoxFilter.module.css";
import { FilterByPrice } from "../FilterByPrice";

export function BoxFilter({
  showFilters,
  sortHighToLow,
  sortLowToHigh,
  sortReset,
}) {
  return (
    <div className={styles.boxFilter}>
      <div className={styles.generalFilter}>
        <button className={styles.generalButton} onClick={() => showFilters()}>
          Filter by
        </button>
      </div>
      <FilterByPrice
        sortHighToLow={sortHighToLow}
        sortLowToHigh={sortLowToHigh}
        sortReset={sortReset}
      />
    </div>
  );
}
