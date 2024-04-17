import styles from "./HeaderTable.module.css"

const HeaderTable =()=>{
    return(
        <div className={ `container ${styles.container}`}>
                <div className={`${styles.containerCell} ${styles.divDate}`}><p>Fecha</p></div>

                <div className={`${styles.containerCell} ${styles.divHour}`}><p>Hora</p></div>
                <div className={`${styles.containerCell} ${styles.divState}`}> 
                    <div>
                        <p>Estado</p>
                    </div>
                </div>

                <div className={`${styles.containerCell} ${styles.divEspecialist}`}><p>Especialidad</p></div>
                <div className={`${styles.containerCell} ${styles.divDescription}`}></div>
                <div className={`${styles.containerCell} ${styles.divButton}`}></div>

        </div>
    )
}

export default HeaderTable;