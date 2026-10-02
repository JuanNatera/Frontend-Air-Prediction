import Image from "next/image";
import styles from "./page.module.css";
import InfoCards from "../components/Infocards/InfoCards";
import Chart from "../components/graphiccharts/Charts";
import Alert from "../components/alerts/Alerts";

export default function Home() {
  return (
    <div className={styles.page}>


      <div id={styles.welcomemessage}>
        <h1>Hello, user!</h1>
        <p>Explore information and activity about your power comsumption</p>
      </div>

      <main className={styles.main}>
        <div className={styles.infocards}>
          <InfoCards />
        </div>

        <div className={styles.infocards}>
          <InfoCards />
        </div>

        <div className={styles.infocards}> 
          <InfoCards />   
        </div>

        <div className={styles.infocards}>
          <InfoCards />
        </div>
      </main>

      <section id={styles.graphicsSec}>
        <div id={styles.graphicsHistoryDiv}>
          <Chart/>
        </div>

        <div id={styles.comsumptionAlertsDiv}>
          <Alert/>
        </div>
      </section>
    </div>
  );
}
