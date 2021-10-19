import React from "react";
import styles from "./MainFooter.module.css";

export function MainFooter() {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.footerWrap}>
        <div className={styles.customer}>
          <h3 className={styles.title}>Customer</h3>
          <ul className={styles.boxItem}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Contact us
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.aboutCompany}>
          <h3 className={styles.title}>About us</h3>
          <ul className={styles.boxItem}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                About us
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Jobs &amp; Career
              </a>
            </li>
          </ul>
        </div>
        {/*<div className={styles.legal}></div>*/}
      </div>
    </div>
  );
}
