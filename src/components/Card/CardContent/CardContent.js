import React from "react";
import styles from "./CardContent.module.css";

const CardContent = ({ data, onClickedContent, showContent }) => {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.column1}>
          {/* <i className={`fa fa-${data.icon}`} /> */}
          <img src={data.image} alt="group" />
        </div>
        <div className={styles.column2}>
          <h3 onClick={() => onClickedContent(data.id)}>{data.title}</h3>
        </div>
      </div>
      <div className={styles.container}>
        {showContent && <p>{data.description}</p>}
      </div>
      {showContent && (
        <div className={styles.hide}>
          <span>
            <p>Hide Details</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default CardContent;
