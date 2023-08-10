import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Navbar from "./Navbar";
import styles from "./Alarm.module.css";



function Alarm() {
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.head}>
                    <div className={styles.headline}>
                    <FontAwesomeIcon icon={faBell} size="lg"/> 알람
                    </div>
                </div>
                <div className={styles.content}>
                    
                </div>

            </div>
        </div>

    );
}

export default Alarm;