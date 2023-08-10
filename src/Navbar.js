import styles from "./Navbar.module.css";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import { faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons"

import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div id={styles.header}>
            <div className={styles.menu}>
                    <Link className={styles.lnk} to={"/home"}>
                        <div className={styles.logo}>Siuuuu </div>
                    </Link>
                    <div className={styles.shortcut}>
                        <div className={styles.dropdown}>
                            <button className={styles.teamcreate}> 팀 생성 <FontAwesomeIcon icon={faCaretDown}/></button>
                                <div className={styles.dropdown_box}>
                                    <div className={styles.dropdown_content}>
                                        <Link className={styles.lnk} to={"/createproject"}>
                                            <FontAwesomeIcon icon={faFolderOpen} size="lg"/> 프로젝트
                                        </Link>
                                    </div>

                                    <Link className={styles.lnk} to={"/createstudy"}>
                                        <div className={styles.dropdown_content}>
                                            <FontAwesomeIcon icon={faPencil} size="lg"/> 스터디
                                        </div>
                                    </Link>

                                    <Link className={styles.lnk} to={"/createteam"}>
                                        <div className={styles.dropdown_content}>
                                            <FontAwesomeIcon icon={faPeopleGroup} size="lg"/> 팀
                                        </div>
                                    </Link>


                                </div>
                        </div>
                        <Link className={styles.lnk} to={"/alarm"}>
                            <div className={styles.arl}>
                                <FontAwesomeIcon icon={faBell} size="lg"/>
                                </div>
                        </Link>
                        <div className={styles.dropdownu}>
                            <button className={styles.user}><FontAwesomeIcon icon={faUser} size="lg"/></button>
                                <div className={styles.dropdown_ubox}>
                                    <div className={styles.dropdown_ucontent}> 
                                            <FontAwesomeIcon icon={faClipboardUser} size="lg"/> 호날두 
                                    </div>
                                    <div className={styles.dropdown_ucontent}> 
                                        <Link className={styles.lnk} to={"/recruit"}>
                                            <FontAwesomeIcon icon={faClipboard} size="lg"/> 모집현황 
                                        </Link> 
                                    </div>
                                    <div className={styles.dropdown_ucontent}>
                                        <Link className={styles.lnk} to={"/apply"}>
                                            <FontAwesomeIcon icon={faPenToSquare} size="lg"/> 지원현황
                                        </Link> 
                                    </div>
                                    <div className={styles.dropdown_ucontent}> <FontAwesomeIcon icon={faBolt} size="lg"/> 관심목록 </div>
                                    <div className={styles.underline}></div>
                                    
                                        <Link className={styles.lnk} to={"/"}>
                                            <div className={styles.dropdown_logout}>
                                                <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg"/> 로그아웃
                                            </div>
                                        </Link> 
                                    
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}


export default Navbar;