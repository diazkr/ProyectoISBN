import styles from "./FondoCreateCita.module.css"
import FormAppointment from "../../../view/forms/FormAppointment/FormAppointment"
import NoLogin from "../NoLogin/NoLogin";
import { useSelector } from 'react-redux';

const FondoCreateCita =()=>{

    const userGlobal = useSelector((state)=>(state.userLogin))
    const userLogin = userGlobal.userLogin.id;
    return(
        <div className={`${styles.mainContainer} ${userLogin ? "" : styles.nullUser}`}>

            {userLogin ? (
                <>
                <div>
                    <img src="src/assets/doctor.png" alt="" />
                </div>

                <div className={styles.formuario}>
                    <FormAppointment userLogin={userLogin} />
                </div>

                <div>
                    <img src="src/assets/doctora.png" alt="" />
                </div>
                </>
            ): (
                <NoLogin/>
            )}
        </div>
    )
}

export default FondoCreateCita;