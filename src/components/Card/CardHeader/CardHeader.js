import React from "react";
import styles from "./CardHeader.module.css";

const CardHeader = () => {
  return (
    <div className={styles.cardHeader}>
      <h2>Honda City</h2>
      <h4>Posted at 1 Nov, 9.30 AM</h4>
    </div>
  );
};

export default CardHeader;
