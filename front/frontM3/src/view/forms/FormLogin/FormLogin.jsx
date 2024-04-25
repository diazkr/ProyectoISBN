import styles from "../FormRegister/FormRegister.module.css"
import { useState} from "react";
import axios from "axios";
import {ValidateFullData} from "../../../helpers/function/forms/validateForm";
import { useNavigate } from "react-router-dom";
import { addUserLogin } from '../../../redux/userLoginSlice'
import { useDispatch } from 'react-redux'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";


const FormLogin=()=>{

    const dispatch = useDispatch()
    const clickHandler = (user) => {
        dispatch(addUserLogin(user))
    }
  

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    


    const [mensaje, setMensaje] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!ValidateFullData(userData)) {
            setMensaje('Todos los campos son requeridos');
        } else {
            try {
                const response = await axios.post("http://localhost:3003/credential/login", userData);
                setMensaje("Login exitoso")
                clickHandler(response.data)
                
                navigate("/citas")
            } catch (error) {
                setMensaje(error.response.data.error)
            }
        }

        
        
    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserData({
            ...userData,
            [name]: value
        })
    }

    return(
        <div className={styles.ContainerMain}>

            
            <div className={styles.Container}>
                <form onSubmit={(e) => handleSubmit(e)}>

                    <div name = "introduction" className={`${styles.Centrar} ${styles.EachInput}`}>
                        <h3>Inicia sesión</h3>
                    </div>

                    <div name = "username" className={styles.EachInput}>
                        <label>Username</label>
                        <input
                            type= "text"
                            value={userData.username}
                            name = "username" 
                            placeholder="Crea tu usuario" 
                            onChange={handleChange}

                        />

                        <FaUser className={styles.icon}/> 
                        
                        </div>

                        <div name = "password" className={styles.EachInput}>
                            <label>Contraseña</label>
                            <input
                                type= "password"
                                value={userData.password}
                                name = "password" 
                                placeholder="******"  
                                onChange={handleChange}
 
                            />

                            <RiLockPasswordFill className={styles.icon}/> 
                        </div>

                        {mensaje && <div className={styles.mensaje}>{mensaje}</div>}

                    <div className={styles.Centrar}>
                        <button type="submit">

                            <FaLongArrowAltRight className={styles.iconButton}/>

                            Enviar 
                        
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default FormLogin;