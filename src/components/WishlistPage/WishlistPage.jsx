import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { HeaderMenu } from "../HeaderMenu";
import { Footer } from "../Footer";
import styles from "./WishlistPage.module.css";

export function WishlistPage() {
  const wishlist = useSelector((state) => state.generalState.wishlist);
  const dispatch = useDispatch();

  const deleteFromWishlistHandler = (id) => {
    dispatch({ type: "deleteFromWishlist", id });
  };

  return (
    <div className={styles.wrap}>
      <HeaderMenu />
      <div className={styles.main}>
        {wishlist.map((item) => {
          return (
            <div className={styles.product}>
              <img className={styles.productImg} src={item.img} alt="" />
              <div className={styles.productOverview}>
                <div className={styles.productMain}>
                  <div className={styles.productHeader}>
                    <h3 className={styles.productTitle}>{item.title}</h3>
                    <button
                      className={styles.basket}
                      onClick={() => deleteFromWishlistHandler(item.id)}
                    ></button>
                  </div>
                  <p className={styles.productDiscription}>
                    {item.description}
                  </p>
                  <div className={styles.productLine} />
                </div>

                <div className={styles.productFooter}>
                  <h3 className={styles.productPrice}>USD {item.price}</h3>
                  <button className={styles.productButton}>Add to bag</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
