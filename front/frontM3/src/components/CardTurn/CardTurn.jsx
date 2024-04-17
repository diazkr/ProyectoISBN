import styles from "./CardTurn.module.css"
import { TbClockHour9 } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { MdFmdBad } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa6";
import getStatusClass from "../../helpers/function/getStatusClass";
import { getStatusClassButton, trueIfActive } from "../../helpers/function/statusFuntions";


const CardTurn =({id, date, time,especialist, status, clickHandler, clickHandlerCancel})=>{

    const statusClass = getStatusClass(status);
    const classButton = getStatusClassButton(status);
    const activeStatus = trueIfActive (status)


    return(
        <div className={ `container ${styles.container}`}>
            <div className={`${styles.containerCell} ${styles.divDate}`}><FaCalendarAlt className={styles.iconTurn}/><p>{date}</p></div>

            <div className={`${styles.containerCell} ${styles.divHour}`}><TbClockHour9 className={styles.iconTurn}/><p>{time}</p></div>
            <div className={`${styles.containerCell} ${styles.divState}`}> <MdFmdBad className={styles.iconTurn}/>
                <div>
                    <p className={statusClass}>{status}</p>
                </div>
            </div>

            <div className={`${styles.containerCell} ${styles.divEspecialist}`}><FaBriefcaseMedical className={styles.iconTurn}/><p>{especialist}</p></div>
            
            <div className={`${styles.containerCell} ${styles.divVerMas}`}>
                <button className={styles.botonVerDetalles} onClick={(event) => clickHandler(id, event)}> Ver información </button>
            </div>

            <div className={`${styles.containerCell} ${styles.divButton}`}>

                {activeStatus? ( <button className={classButton} onClick={(event) => {clickHandlerCancel(id, event)}}> Cancelar </button>)
                :(<button className={classButton} disabled > Cancelar </button>)}
            </div>

        </div>


    )
}

export default CardTurn;
