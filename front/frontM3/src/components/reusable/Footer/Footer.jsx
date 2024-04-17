import styles from "./Footer.module.css"

import { FaHandHoldingMedical } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer=()=>{

    return(
        
            <footer>

                <div className={styles.containers}>

                    <div>
                        <h1>Medilab</h1>
                        <p>Cra 27 #53 - 90 Bogotá</p>
                        <p>Colombia</p>

                    </div>

                </div>

                <div className={styles.containers}>
                        <h2>Links de acceso:</h2>
                        <div className={styles.divsInfo}> 
                            <IoIosArrowForward  className={styles.icono}/>
                            <p> Home </p>
                        </div>
                        <div className={styles.divsInfo}> 
                            <IoIosArrowForward  className={styles.icono}/>
                            <p> Servicios </p>
                        </div>
                        <div className={styles.divsInfo}> 
                            <IoIosArrowForward  className={styles.icono}/>
                            <p> Doctors </p>
                        </div>

                </div>

                <div className={styles.containers}>

                    <h2>Nuestras redes:</h2>
                        <div className={styles.divsInfo}> 
                            <FaFacebook  className={styles.icono}/>
                            <p> Facebook </p>
                        </div>
                        <div className={styles.divsInfo}> 
                            <FaInstagram className={styles.icono}/>
                            <p> Instagram </p>
                        </div>
                        <div className={styles.divsInfo}> 
                            <FaTwitter className={styles.icono}/>
                            <p> Twitter </p>
                        </div>


                </div>

                <div className={styles.containers}>

                <h2>Uneté a nuestra NewsLetter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <form>
                    <input placeholder="example@gmail.com" />
                    <button>Suscribete</button>
                </form>


                </div>


                
            </footer>
    )

}

export default Footer;