import React from "react";
import styles from "./BoxFilter.module.css";
import { FilterByPrice } from "../FilterByPrice";

export function BoxFilter({ showFilters }) {
  return (
    <div className={styles.boxFilter}>
      <div className={styles.generalFilter}>
        <button className={styles.generalButton} onClick={() => showFilters()}>
          Filter by
        </button>
      </div>
      <FilterByPrice />
    </div>
  );
}
