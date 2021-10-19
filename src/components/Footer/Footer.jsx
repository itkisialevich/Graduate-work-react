import React from "react";
import { HeadFooter } from "../HeadFooter";
import { MainFooter } from "../MainFooter/MainFooter";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <HeadFooter />
      <MainFooter />
      <div className={styles.copyright}>
        <p className={styles.copyrightTitle}>Copyright &copy; 2021</p>
      </div>
    </div>
  );
}
