import { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import {Link} from "react-router-dom";

function LoginPage() {
    const [university, setUniversity] = useState([]);
    const [email, setEmail] = useState([]);

    const[uniValid, setUniValid] = useState(false);
    const[emaValid, setEmaValid] = useState(false);

    const[notAllowU, setNotAllowU] = useState(true);
    const[notAllowE, setNotAllowE] = useState(true);


    const onChangeUni = (event) => {
        setUniversity(event.target.value);
        console.log(university);
        
    }

    const onChangeEma = (event) => {
        setEmail(event.target.value);
        if(email.includes("ac.kr")){
            setEmaValid(true);
        }
        else {
            setEmaValid(false);
        }
    }
    useEffect(() => {
        if(university.includes("대학교")){
            setUniValid(true);
        } else
        {
            setUniValid(false);
        }
    }, [university])

    useEffect(() => {
        if(email.includes("ac.kr")){
            setEmaValid(true);
        } else
        {
            setEmaValid(false);
        }
    }, [email])

    useEffect(() => {
        console.log(uniValid);
        if(uniValid) {
            setNotAllowU(false);
        }
        else {setNotAllowU(true);}
    }, [uniValid])

    useEffect(() => {
        if(emaValid) {
            setNotAllowE(false);
        }
        else {setNotAllowE(true);}
    }, [emaValid])




    return (
        <div>
           <div className={styles.logo}>Siuuuu </div>
           <div className={styles.pages}>
                <div className={styles.titleWrap}>Login</div>
               <div className={styles.contentWrap}>
                    <div className={styles.inputWrap}>
                        <input value= {university} className={styles.input} placeholder="ex) 홍익대학교"
                        onChange={onChangeUni}></input>
                        <button className={styles.btn}
                        disabled={notAllowU}>대학명체크</button>
                    </div>
                    <div className={styles.errorMessageWrap}>
                        {uniValid===(false) && university.length > 0 && (
                            <div>올바른 대학명을 입력해 주세요.</div>
                        )}
                    </div>

                    <div className={styles.inputWrap}>
                        <input value = {email} className={styles.input} placeholder="ex) abc@mail.hongik.ac.kr"
                        onChange={onChangeEma}></input>

                        <button className={styles.btnl} disabled={notAllowE}>
                            <Link className={styles.lnk} to ={!notAllowE?'/home' : null}>메일입력</Link>
                        </button>



                    </div>
                    <div className={styles.errorMessageWrap}>
                        {!emaValid && email.length > 0 && (
                            <div>형식에 맞는 이메일 주소를 입력해 주세요.</div>
                        )}
                    </div>
               </div>
            </div>
        </div>
    );
}

export default LoginPage;