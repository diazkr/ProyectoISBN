import styles from "./CancelarDetails.module.css"
import axios from "axios";
import { useState} from "react";
import { CANCEL_APPOINTMENTS } from "../../../apis";

const CancelarDetails =({id, date, time, closeHandlerCancel, actualizarTurnos })=>{
    const [cancel, setCancel] = useState(false)
    const [mensaje, setMensaje] = useState('');

    const CancelTurn = async()=>{
        try {
            const response = await axios.post(`${CANCEL_APPOINTMENTS}${id}`)
            setMensaje("Se ha cancelado la cita")
            setCancel(true);
            actualizarTurnos();
            

        } catch (error) {
            setMensaje("No se pudo eliminar el turno")
            throw Error("No se pudo eliminar el turn0", error)
        }
    }

    return(
        
        <div className={ `container ${styles.container}`}>

            <div className={styles.containerImg}>
                <img src="src/assets/rechazar.png" alt="cancelar" />
            </div>

            <div className={styles.containerText}>
                <p>Deseas cancelar el turno? </p>
                <div className={styles.containerInfo}>
                    <p> Fecha: {date}</p>
                    <p> Hora: {time}</p>
                </div>
                {mensaje && <div className={styles.mensaje}>{mensaje}</div>}

            </div>
            
            <div className={styles.ContainerBotones}>
                <button className={styles.salir} onClick={(event) => closeHandlerCancel(event)}> Salir </button>
                
                {!cancel && (
          <button className={styles.Cerrar} onClick={CancelTurn}> Cancelar turno</button>
        )}
            </div>

        </div>


    )
        
}

export default CancelarDetails;