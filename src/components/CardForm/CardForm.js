import React from "react";
import styles from "./CardForm.module.css";

const CardForm = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h6>Place Your Load BID</h6>
          <h2 className={styles.bid}>₹ 2,50,000</h2>

          <div className={styles.row}>
            <div className={styles.column1}>
              <button>Fixed Price</button>
            </div>
            <div className={styles.column2}>
              <button className={styles.button1}>Rate Negiotable</button>
            </div>
          </div>

          <div className={styles.container2}>
            <form action="/action_page.php" className={styles.form}>
              <label for="fname" className={styles.label}>
                Enter your mobile number*
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="+91 - 9000955555"
                className={styles.input}
              />
              <label for="fname" className={styles.label1}>
                Enter your name
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder=""
                className={styles.input1}
              />

              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter Remarks (optional)"
                className={styles.input}
              />
              <input
                type="submit"
                value="Bid Now"
                className={styles.submit}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
