import React from "react";
import { useState } from "react";
import styles from "./HeaderMenu.module.css";

export function HeaderMenu({ onClick }) {
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
          <div className={styles.logo}>
            <a className={styles.logoLink} href="https://google.com"></a>
          </div>
        </div>

        <div className={styles.headerContainerRight}>
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

          <div className={styles.user}>
            <a className={styles.linkHeader} href="https://google.com"></a>
          </div>

          <div className={styles.wishlist}>
            <a className={styles.linkHeader} href="#"></a>
          </div>

          <div className={styles.basket}>
            <a className={styles.linkHeader} href="#"></a>
          </div>
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
