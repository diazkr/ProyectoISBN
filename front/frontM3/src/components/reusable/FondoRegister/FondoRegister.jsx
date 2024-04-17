import styles from "./FondoRegister.module.css"
import FormRegister from "../../../view/forms/FormRegister/FormRegister";
const FondoRegister = ({clickHandler})=>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.ContainerImage}>
                <img src="src/assets/Portrait_of_satisfied__smiling-removebg-preview.png" alt="" />
            </div>

            <div className={styles.containerForm}>
                <FormRegister clickHandler={clickHandler}/>
            </div>


        </div>

    )
}

export default FondoRegister;