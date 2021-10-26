import React from "react";
import { useState } from "react";
import styles from "./HomeHeader.module.css";

export function HomeHeader({ onClick }) {
  const [text, setText] = useState("");

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const getText = () => {
    onClick(text);
    setText("");
  };

  return (
    <div className={styles.head}>
      <div className={styles.header}>
        <div className={styles.headerContainerLeft}>
          <div className={styles.home}>
            <a className={styles.homeLink} href="https://google.com"></a>
          </div>
          <div className={styles.search}>
            <input
              className={styles.searchInput}
              type="text"
              value={text}
              placeholder="search..."
              onChange={onChangeInput}
            ></input>
            <button className={styles.searchButton} onClick={getText}></button>
          </div>
        </div>

        <div className={styles.headerContainerRight}>
          <div className={styles.user}></div>
          <a className={styles.linkHeader} href="#">
            My Account
          </a>

          <div className={styles.wishlist}></div>
          <a className={styles.linkHeader} href="#">
            My Wishlist
          </a>
          <div className={styles.basket}></div>
          <a className={styles.linkHeader} href="#">
            My Basket
          </a>
        </div>
      </div>
      <div className={styles.menu}>
        <ul className={styles.categories}>
          <li className={styles.link}>
            <a className={styles.linkCategories} href="#">
              New
            </a>
          </li>
          <li className={styles.link}>
            <a className={styles.linkCategories} href="#">
              Jewerly
            </a>
          </li>
          <li className={styles.link}>
            <a className={styles.linkCategories} href="#">
              Watches
            </a>
          </li>
          <li className={styles.link}>
            <a className={styles.linkCategories} href="#">
              Decorations
            </a>
          </li>
          <li className={styles.link}>
            <a className={styles.linkCategories} href="#">
              Accessories
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
