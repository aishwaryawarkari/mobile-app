import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <i
            class="fa fa-bars fa-2x"
            aria-hidden="true"
            styles={{ fontSize: "36px" }}
          ></i>
        </div>
        <div className={styles.column}>
          <img src="logo6.png" className={styles.logo} />
        </div>
        <div className={styles.column}>
          <img src="user.jpg" className={styles.profile} />
        </div>
      </div>
    </div>
  );
};

export default Header;
