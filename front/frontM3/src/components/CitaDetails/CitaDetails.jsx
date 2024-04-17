import styles from "./CitaDetails.module.css"
import { TbClockHour9 } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa6";
import getStatusClass from "../../helpers/function/getStatusClass";
import { srcDoctorImage } from "../../helpers/function/srcDoctorImage";

const CitaDetails =({date, time,especialist, status, description,closeHandler})=>{

        const statusClass = getStatusClass(status);

    return(
        

        <div className={ `container ${styles.container}`}>
            


            <div className={`${styles.divImage}`}>
                <img className = {styles.imageHospital}src="https://i.pinimg.com/564x/4b/44/2a/4b442a1e2c529f573bad7e390edc201e.jpg" alt="Hospital" />
            </div>

            <div className={` ${styles.divDoctor}`}>
                <div>
                    <img className = {styles.imageDoctor} src={srcDoctorImage(especialist)} alt="Imagen doctor" />
                </div>
            </div>

            <div className={`${styles.containerCell} ${styles.divEspecialist}`}>
                
                <p className={styles.textCard}>{especialist}</p>
            </div>

            <div className={`${styles.containerCell} ${styles.divDate}`}>
                <FaCalendarAlt className={styles.iconTurn}/>
                <p>{date}</p>
            </div>

            <div className={`${styles.containerCell} ${styles.divHour}`}>
                <TbClockHour9 className={styles.iconTurn}/>
                <p>{time}</p>
            </div>
            
            <div className={`${styles.containerCell} ${styles.divDescription}`}>
                <FaBriefcaseMedical className={styles.iconTurn}/>
                <p>{description}</p>
            </div>
            <div className={`${styles.containerCell} ${styles.divStatus}`}>
                <FaBriefcaseMedical className={styles.iconTurn}/>
                <p>{status}</p>
            </div>

            <div className={`${styles.containerCell} ${styles.divLocation}`}>
                <FaBriefcaseMedical className={styles.iconTurn}/>
                <p>Location</p>
            </div>


            
            <div className={`${styles.containerCell} ${styles.divButtonCerrar}`}>
                <button className={styles.Cerrar} onClick={(event) => closeHandler(event)}> Cerrar </button>
            </div>

        </div>


    )
        
}

export default CitaDetails;