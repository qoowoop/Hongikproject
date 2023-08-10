import styles from "./Home.module.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Slide from "./Slide";
import {Link} from "react-router-dom";


function Home () {
    return (
        <div id={styles.container}>
            <div id={styles.header}>
                <Navbar />
                <div className={styles.adver}>
                    <div className={styles.hh}><h2>같은 학교 사람들과 믿을 수 있는 팀 매칭 서비스</h2></div>
                    <div><h3>
                        팀이 필요한 곳이면 어디든<br></br>
                        부담없이 시작해보세요
                        </h3></div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.project}>
                    <Link className={styles.lnk}>
                        <FontAwesomeIcon icon={faDesktop} size="lg"/> &nbsp; &nbsp;프로젝트
                    </Link>
                    <Slide />
                </div>
                <div className={styles.project}>
                    <Link className={styles.lnk}>
                        <FontAwesomeIcon icon={faDesktop} size="lg"/> &nbsp; &nbsp;스터디
                    </Link >
                    <Slide />
                </div>
                <div className={styles.project}>
                    <Link className={styles.lnk}>
                        <FontAwesomeIcon icon={faDesktop} size="lg"/> &nbsp; &nbsp;팀
                    </Link>
                    <Slide />
                </div>
            </div>
        </div>
    );
}


export default Home;