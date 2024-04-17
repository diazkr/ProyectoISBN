import styles from "./NoLogin.module.css"
import { Link } from "react-router-dom"

const NoLogin = ()=>{
    return(
        <div className={styles.mainContainer}>
            <img src="src/assets/triste.png" alt="debes logearte" />
            <p>Ups! para ver o crear citas debes loggearte</p>
            <div className={styles.divBotones}>
                <Link to="/login" className={styles.classLink}> <button> Iniciar Sesión </button> </Link>
                <Link to="/register" className={styles.classLink}> <button > Registrate! </button> </Link>
            </div>
        </div>
    )
}

export default NoLogin