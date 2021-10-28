import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" className={styles.logoLink}></NavLink>
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
            <NavLink to="/" className={styles.linkHeader}></NavLink>
          </div>

          <div className={styles.wishlist}>
            <NavLink to="/wishlist" className={styles.linkHeader}></NavLink>
          </div>

          <div className={styles.basket}>
            <NavLink to="/basket" className={styles.linkHeader}></NavLink>
          </div>
        </div>
      </div>
      <div className={styles.categories}>
        <NavLink to="/new" className={styles.linkCategories}>
          New
        </NavLink>
        <NavLink to="/jewerly" className={styles.linkCategories}>
          Jewerly
        </NavLink>
        <NavLink to="/watches" className={styles.linkCategories}>
          Watches
        </NavLink>
        <NavLink to="/decorations" className={styles.linkCategories}>
          Decorations
        </NavLink>
        <NavLink to="/accessories" className={styles.linkCategories}>
          Accessories
        </NavLink>
      </div>
    </div>
  );
}
