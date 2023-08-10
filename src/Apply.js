import Navbar from "./Navbar";
import styles from "./Apply.module.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";


function Apply () {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.body}>

                <div className={styles.project}>
                <FontAwesomeIcon icon={faDesktop} size="lg"/> &nbsp; &nbsp; 프로젝트
                        <div className={styles.menu}>
                            <div className={styles.title}>제목</div>
                            <div className={styles.status}>상태</div>
                        </div>
                    <div className={styles.content}>
                        <button className={styles.activeBtn}>모집중</button>
                        <div className={styles.name}>팀 매칭 프로젝트</div>
                        <button className={styles.deleteBtn}>취소</button>
                    </div>
                </div>



                <div className={styles.study}>
                    <FontAwesomeIcon icon={faDesktop} size="lg"/> &nbsp; &nbsp; 스터디
                    <div className={styles.menu}>
                            <div className={styles.title}>제목</div>
                            <div className={styles.status}>상태</div>
                        </div>
                    <div className={styles.content}>
                        <button className={styles.activeBtn}>모집중</button>
                        <div className={styles.name}>팀 매칭 프로젝트</div>
                        <button className={styles.deleteBtn}>취소</button>
                    </div>
                </div>


                <div className={styles.team}>
                    <FontAwesomeIcon icon={faDesktop} size="lg"/> &nbsp; &nbsp; 팀
                        <div className={styles.menu}>
                                <div className={styles.title}>제목</div>
                                <div className={styles.status}>상태</div>
                            </div>
                        <div className={styles.content}>
                            <button className={styles.activeBtn}>모집중</button>
                            <div className={styles.name}>팀 매칭 프로젝트</div>
                            <button className={styles.deleteBtn}>취소</button>
                        </div>
                </div>





            </div>
        </div>
    );
}


export default Apply;