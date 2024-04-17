import styles from "./Doctores.module.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Doctores = ()=>{
    return(
        <div className={styles.ContainerMain}>
            <h1>Doctores</h1>
            <h3>Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h3>
            <div className={styles.parent}>

                <div className={`${styles.card} ${styles.div1}`}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgContainerRedondo}>
                            <img src="src/assets/doctors/doctors-1.jpg" alt="" />
                        </div>
                    </div>

                    <div>
                        <h4>Walter White</h4>
                        <p>Médico general</p>
                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className={styles.iconos}>
                            <FaFacebook  className={styles.icono}/>
                            <FaInstagram className={styles.icono}/>
                            <FaTwitter className={styles.icono}/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.div2}`}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgContainerRedondo}>
                            <img src="src/assets/doctors/doctors-2.jpg" alt="" />
                        </div>
                    </div>

                    <div>
                        <h4>Walter White</h4>
                        <p>Médico general</p>
                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className={styles.iconos}>
                            <FaFacebook  className={styles.icono}/>
                            <FaInstagram className={styles.icono}/>
                            <FaTwitter className={styles.icono}/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.div3}`}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgContainerRedondo}>
                            <img src="src/assets/doctors/doctors-3.jpg" alt="" />
                        </div>
                    </div>

                    <div>
                        <h4>Walter White</h4>
                        <p>Médico general</p>
                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className={styles.iconos}>
                            <FaFacebook  className={styles.icono}/>
                            <FaInstagram className={styles.icono}/>
                            <FaTwitter className={styles.icono}/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.div4}`}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgContainerRedondo}>
                            <img src="src/assets/doctors/doctors-4.jpg" alt="" />
                        </div>
                    </div>

                    <div>
                        <h4>Walter White</h4>
                        <p>Médico general</p>
                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className={styles.iconos}>
                            <FaFacebook  className={styles.icono}/>
                            <FaInstagram className={styles.icono}/>
                            <FaTwitter className={styles.icono}/>
                        </div>
                    </div>
                </div>



            </div>

        </div>
        
    )
}

export default Doctores ;