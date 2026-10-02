import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
      <div id={styles.NavBardiv}>
        <nav>
            <Image
                id={styles.logoApp}
                src="/prediction.png"
                alt="Next.js logo"
                width={44}
                height={44}
                priority
            />
  
            <div id={styles.NavMenubtns}>
              <Image
                  className={styles.Energybtn}
                  src="/energy.png"
                  alt="Next.js logo"
                  width={24}
                  height={24}
                  priority
              />

              <Image
                  className={styles.Registrybtn}
                  src="/registry.png"
                  alt="Next.js logo"
                  width={24}
                  height={24}
                  priority
              />
            </div>
      </nav>

      </div>
    );
  }