import Navbar from "./Navbar";
import styles from "./CreateProject.module.css";
import { useState } from "react";

function CreateProject() {
    const {title, setTitle}=useState([]);
    const {recruit, setRecruit}=useState([]);
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
                        <input value={title} className={styles.tinput} placeholder="프로젝트 제목을 입력해 주세요."></input>
                    </div>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.info1}>
                    <div className={styles.recruitarea}>모집 분야</div>
                    <input value={recruit} className={styles.recruitinput} placeholder="ex) 프론트엔드, 백엔드 ..."></input>
                    <div className={styles.stack}>기술 스택</div>
                    <input value={recruit} className={styles.stackinput} placeholder="ex) React, Java, Unity ..."></input>
                </div>
                <div className={styles.info2}>
                    <div className={styles.memnumber}>모집 인원</div>
                    <input value={member} className={styles.numinput}></input>
                    <div className={styles.front}>프론트엔드</div>
                    <input className={styles.meminput}></input>
                    <div className={styles.back}>백엔드</div>
                    <input className={styles.meminput}></input>
                    <div className={styles.designer}>디자이너</div>
                    <input className={styles.designinput}></input>
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



export default CreateProject;