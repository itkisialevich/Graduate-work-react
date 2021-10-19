import React from "react";
import styles from "./HeadFooter.module.css";

export function HeadFooter() {
  return (
    <div className={styles.headFooter}>
      <form className={styles.newsletters}>
        <label className={styles.newslettersLabel}>
          Subscribe to our newsletters
          <input
            className={styles.newslettersAdress}
            type="text"
            name="name"
            placeholder="e-mail address"
          />
        </label>
        <input
          className={styles.newslettersSubmit}
          type="submit"
          value="Subscribe"
        />
      </form>
      <div className={styles.social}>
        <h3 className={styles.socialTitle}>Follow us</h3>
        <div className={styles.facebook}>
          <a
            className={styles.socialLink}
            href="https://www.facebook.com/SWAROVSKI.global/"
          ></a>
        </div>
        <div className={styles.pinterest}>
          <a
            className={styles.socialLink}
            href="https://www.pinterest.com/swarovski/"
          ></a>
        </div>
        <div className={styles.twitter}>
          <a
            className={styles.socialLink}
            href="https://twitter.com/swarovski"
          ></a>
        </div>
        <div className={styles.instagram}>
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/swarovski/"
          ></a>
        </div>
        <div className={styles.youtube}>
          <a
            className={styles.socialLink}
            href="https://www.youtube.com/Swarovski"
          ></a>
        </div>
      </div>
    </div>
  );
}
