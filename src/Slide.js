import styles from "./Slide.module.css";
import {useState, useEffect} from "react";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

import TemporaryDemo from "./TemporaryDemo";



function Slide () {
    const [trans, setTrans] = useState(0);

    const onClickL = () => {
        if(trans >=0 ){
            return;
        }
        setTrans(current => current + 283);
    }

    const onClickR = () => {
        if(trans <= -2450) {
            return;
        }
        setTrans(current => current -283);
    }
    return (
        <div className={styles.container}>
            <div className={styles.slide_show}>
                    <div className={styles.slides} style={{
                        transform: `translateX(${trans}px)`
                    }}>

                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        <div><TemporaryDemo/></div>
                        

                    </div>
            </div>
            <div className={styles.controller}>
                <button className={styles.left} onClick={onClickL}><FontAwesomeIcon icon={faCaretLeft}/></button>
                <button className={styles.right} onClick={onClickR}><FontAwesomeIcon icon={faCaretRight}/></button>
            </div>
        </div>
    );
}

export default Slide;