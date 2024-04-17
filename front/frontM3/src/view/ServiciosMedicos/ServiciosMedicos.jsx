import styles from "./ServiciosMedicos.module.css"
import { FaAddressBook } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";
import { MdBloodtype } from "react-icons/md";


const ServiciosMedicos = ()=>{
    return(
        <div className={styles.ContainerMain}>

            <h1>Servicios</h1>
            <h3>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h3>
            <div className={styles.parent}>
                <div className={`${styles.div1} ${styles.card}`}>
                    <FaAddressBook className={styles.icon} />
                    <h4>Lorem Ipsum</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
                <div className={`${styles.div2} ${styles.card}`}>
                    <FaHandHoldingMedical className={styles.icon}/>
                    <h4>Lorem Ipsum</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
                <div className={`${styles.div3} ${styles.card}`}>
                    <RiMentalHealthFill className={styles.icon}/>
                    <h4>Lorem Ipsum</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
                <div className={`${styles.div4} ${styles.card}`}>
                    <MdBloodtype className={styles.icon}/>
                    <h4>Lorem Ipsum</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
                <div className={`${styles.div5} ${styles.card}`}>
                    <RiMentalHealthFill className={styles.icon}/>
                    <h4>Lorem Ipsum</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
                <div className={`${styles.div6} ${styles.card}`}>
                    <FaUserDoctor className={styles.icon}/>
                    <h4>Lorem Ipsum</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
            </div>
        </div>
    )
}

export default ServiciosMedicos;