import React from "react";
import styles from "./ModalFilter.module.css";

export function ModalFilter() {
  return (
    <div className={styles.wrap}>
      <div className={styles.modalFilter}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Filter by</h2>
        </div>
        <div className={styles.filterByColor}>
          <button className={styles.buttonFilter}>Color</button>
          <form className={styles.formFilter}>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              write
            </label>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              gray
            </label>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              blue
            </label>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              brawn
            </label>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              red
            </label>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              write
            </label>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              pink
            </label>
          </form>
        </div>
        <div className={styles.filterByMaterial}>
          <button className={styles.buttonFilter}>Material</button>
          <form className={styles.formFilter}>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              gold tone
            </label>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              mixed tone
            </label>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              rose-gold tone
            </label>
            <label className={styles.labelFilter}>
              <input className={styles.inputFilter} type="radio" />
              silver tone
            </label>
          </form>
        </div>
        <button className={styles.resetFilter}>Reset</button>
      </div>
    </div>
  );
}
