import Image from "next/image";
import styles from "./Alerts.module.css";

export default function AlertCard() {
    return (

        <div className={styles.alertscard}>

            <div className={styles.header}>
                <h2>Alerts &amp; Notifications</h2>
                <span className={styles.seeall}>See All →</span>
            </div>
    
  
        <div className={styles.alertcritical}>
          <button className={styles.close} aria-label="Cerrar">×</button>
    
          <div className={styles.alerttitle}>
            <span className={styles.icon}>▣</span>
            <span>Electric Fault</span>
            <span className={styles.badge}>⚠ Critical</span>
          </div>
    
          <p className={styles.description}>
            consumo
            Voltage spike detected! Impact main circuit immediately.
          </p>
    
          <p className={styles.date}>Tue 25 Nov, 11:25</p>
        </div>
    
 
        <div className={styles.alertwarning}>
          <button className={styles.close} aria-label="Cerrar">×</button>
    
          <div className={styles.alerttitle}>
            <span className={styles.icon}>⚠</span>
            <span>High Weekly Usage</span>
          </div>
    
          <p className={styles.description}>
            Energy Usage Last Week: 120KWh. Consider Checking Appliances
          </p>
    
          <p className={styles.date}>Sun 23 Nov, 20:00</p>
        </div>
    

        <div className={styles.alertwarning}>
          <button className={styles.close} aria-label="Cerrar">×</button>
    
          <div className={styles.alerttitle}>
            <span className={styles.icon}>⚠</span>
            <span>Unexpected Night Activity</span>
          </div>
    
          <p className={styles.description}>
            Unusual-time motion detected. Review for security.
          </p>
    
          <p className={styles.date}>Fri 21 Nov, 04:23</p>
        </div>

        <div className={styles.alertwarning}>
          <button className={styles.close} aria-label="Cerrar">×</button>
    
          <div className={styles.alerttitle}>
            <span className={styles.icon}>⚠</span>
            <span>Low Solar Production</span>
          </div>
    
          <p className={styles.description}>
            Solar Panels are producing less than usual right now (0.2kW).
          </p>
    
          <p className={styles.date}>Thu 20 Nov, 13:00</p>
        </div>
    
      </div>
    );
  }