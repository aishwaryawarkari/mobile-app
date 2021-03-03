import React from "react";
import styles from "./CardProfile.module.css";

export default function CardProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column1}>
          <img src="user.jpg" alt="profile" className={styles.profile} />
        </div>
        <div className={styles.column2}>
          <h3>Rohan Sharma</h3>
          <h5>Bengaluru, Karnataka</h5>
        </div>
      </div>
    </div>
  );
}
