import styles from "./ContentNav.module.css"
import { Link } from "react-router-dom";

const ContentNav =()=>{
    return(
        <ul >

            <li>
                <Link to='/home' className={styles.navLink}>Home</Link>
            </li>
            <li>
                <Link to='/services' className={styles.navLink}>Servicios</Link>
            </li>
            <li>
                <Link to='/doctores' className={styles.navLink}>Doctores</Link>
            </li>
            <li>
                <Link to='/citas' className={styles.navLink}>Mis citas</Link>
            </li>
            <li>
                <Link to='/login' className={`nav-link ${styles.iniciar}`}>Iniciar sesión</Link>
            </li>
        </ul>
    )
}

export default ContentNav;