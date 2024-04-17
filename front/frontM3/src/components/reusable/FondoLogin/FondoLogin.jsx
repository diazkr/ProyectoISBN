import styles from "./FondoLogin.module.css"
import FormLogin from "../../../view/forms/FormLogin/FormLogin"
import { Link } from "react-router-dom"
const FondoLogin = ({clickHandler})=>{
    return(
        <div className={styles.mainContainer}>
            <div>
                <img src="src/assets/Portrait_of_satisfied__smiling-removebg-preview.png" alt="" />
            </div>

            <div className={styles.containerForm}>
                <FormLogin clickHandler={clickHandler}/>

                <div className={styles.containerRegister}>
                    <p>No tienes cuenta?</p>
                    <Link to="/register"><button>Registrate!</button></Link>
                </div>
            </div>


        </div>

    )
}

export default FondoLogin;