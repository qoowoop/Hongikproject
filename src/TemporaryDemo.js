import styles from "./TemporaryDemo.module.css";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons"
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons"

function TemporaryDemo() {
    return (
        <div className={styles.demo}>
            <div className={styles.status}>
                <button className={styles.activeBtn}>모집중</button>
                <button className={styles.projectBtn}>프로젝트</button>
                <FontAwesomeIcon icon={faBolt} size="lg" className={styles.icon}/>
            </div>
            <div className={styles.title}>
                팀 기획자 모집합니다.
            </div>
            <div className={styles.underlinecon}>
                <div className={styles.underline}></div>
            </div>

            <div className={styles.bottomstatus}>
                <div className={styles.user}>
                    <FontAwesomeIcon icon={faClipboardUser} size="lg"/> 호날두
                </div>
                <div className={styles.date}>마감일: 2023.08.01</div>
            </div>
    </div>
    );
}


export default TemporaryDemo;