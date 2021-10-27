import React from "react";
import styles from "./Card.module.css";

export function Card({
  id,
  img,
  title,
  description,
  price,
  currency,
  status,
  category,
  type,
  isFavourite,
  color,
  material,
  checked,
  addBasket,
}) {
  return (
    <div className={styles.cardBox}>
      {/* <div
        className={styles.miniCard}
        id={id}
        currency={currency}
        status={status}
        category={category}
        type={type}
        isFavourite={isFavourite}
        color={color}
        material={material}
      >
        <input className={styles.checkbox} type="radio" checked={checked} />
        <img className={styles.miniCardImage} src={img} alt="" />
      </div>*/}
      <div
        className={styles.card}
        id={id}
        currency={currency}
        status={status}
        category={category}
        type={type}
        isFavourite={isFavourite}
        color={color}
        material={material}
      >
        <input className={styles.checkbox} type="radio" checked={checked} />
        <img className={styles.cardImage} src={img} alt="" />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDiscription}>{description}</p>
        <div className={styles.cardFooter}>
          <h3 className={styles.cardPrice}>{price}</h3>
          <button onClick={() => addBasket()} className={styles.cardButton}>
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}
