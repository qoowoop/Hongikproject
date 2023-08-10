import Navbar from "./Navbar";
import styles from "./CreateTeam.module.css";
import { useState } from "react";

function CreateTeam() {
    const {title, setTitle}=useState([]);
    const {member, setMember}=useState([]);
    const {project, setProject}=useState([]);
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className={styles.body}>
                <div className={styles.protitle}>
                    <div>
                        <h3>제목</h3>
                    </div>
                    <div>
                        <input value={title} className={styles.tinput} placeholder="팀 제목을 입력해 주세요."></input>
                    </div>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.info1}>
                <div className={styles.memnumber}>모집 인원</div>
                    <input value={member} className={styles.numinput} type="number"></input>
                </div>
                <div className={styles.underline2}></div>
                <div className={styles.explain}>
                    <textarea value={project} className={styles.projectexplain}></textarea>
                </div>
                <div className={styles.btn}>
                    <button className={styles.createbtn}>생성하기</button>
                    <button className={styles.cancelbtn}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default CreateTeam;