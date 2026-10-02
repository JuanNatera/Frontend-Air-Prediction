import Image from "next/image";
import styles from "./infocards.module.css";

export default function InfoCards() {
    return (
      <div className={styles.InfoCardsdiv}>
        <div className={styles.cardheader}>
            <span className={styles.cardtitle}>Energy Usage</span>

            <button className={styles.cardbutton}>
                ↗
            </button>
        </div>

        <div className={styles.consumption}>
            400 <span>kWh</span>
        </div>

        <div className={styles.cardfooter}>
            <span className={styles.percentage}>+20%</span>
            <span className={styles.comparison}>390 kWh last month</span>
        </div>

      </div>
    );
  }