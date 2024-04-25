import styles from "./FormRegister.module.css"
import axios from "axios";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { validate, ValidateFullData} from "../../../helpers/function/forms/validateForm";
import { addUserLogin } from '../../../redux/userLoginSlice'
import { useDispatch } from 'react-redux'
import { FaRegUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineNumbers } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const FormRegister=()=>{
    const dispatch = useDispatch()
    const clickHandler = (user) => {
        dispatch(addUserLogin(user))
    }

    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: '',
        birthdate: '',
        nDni: '',
        email: ''
    })

    const [userRegister, setUserRegister]= useState({
        username: '',
        password: '', 
        userId: ''
    })




    const [errors, setErrors] = useState({
        name: '',
        birthdate: '',
        nDni: '',
        email: '',
        username: '',
        password: ''
    })

    //Set mensaje de error:

    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        const validationErrors = validate(userData);
        setErrors(validationErrors);
    }, [userData])

    useEffect(() => {
        const sendUserRegister = async () => {
            try {
                const respuestaRegister = await axios.post("http://localhost:3003/credential/register/", userRegister);
                console.log(respuestaRegister);
                setMensaje("Registro Exitoso");
                navigate("/citas");
            } catch (error) {
                if (error instanceof Error && error.response) {
                    setMensaje(error.response.data.error);
                } else {
                    setMensaje('Ha ocurrido un error desconocido');
                }
            }
        };
    
        if (userRegister.username !== '' && userRegister.password !== '' && userRegister.userId !== '') {
            sendUserRegister();
        }
    }, [userRegister, navigate]);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!ValidateFullData(userData)) {
            setMensaje('Todos los campos son requeridos');
        } else {
            try {
                const respuesta = await axios.post("http://localhost:3002/users/register", userData);
                clickHandler(respuesta.data.register);
                setUserRegister(prevState => ({
                    ...prevState,
                    userId: respuesta.data.register.id
                }));

                const respuestaRegister = await axios.post("http://localhost:3003/credential/register/", userRegister );

                console.log(respuestaRegister)

                setMensaje("Registro Exitoso");
                navigate("/citas")
            } catch (error) {
                if (error instanceof Error && error.response) {
                    setMensaje(error.response.data.error);
                } else {
                    setMensaje('Ha ocurrido un error desconocido');
                }
            }
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserData({
            ...userData,
            [name]: value
        })
        setUserRegister({
            ...userRegister,
            [name]: value
        })
        const errors = validate(userData)
        setErrors(errors)
    }


    return(
        <div className={styles.ContainerMain}>

            
            <div className={styles.Container}>
                <form onSubmit={(e) => handleSubmit(e)}>

                    <div name = "introduction" className={`${styles.Centrar} ${styles.EachInput}`}>
                        <h3>Registrate!</h3>
                    </div>

                    <div name = "name_birthdate" className={styles.DoubleInput}>
                        <div name = "name" className={styles.EachInput}>
                            <label>Nombre:</label>
                            <input 
                                type= "text"
                                value={userData.name}
                                name = "name" 
                                placeholder={"Ingresa tu nombre" }
                                onChange={handleChange} 
                                className={errors.name ? `${styles.input} ${styles.errorBorder}` : styles.input}                            
                            />
                            <FaRegUser className={styles.icon}/>
                            
                            {errors.name && <span>{errors.name}</span>}
                        </div>
                        <div name = "birthdate" className={styles.EachInput}>
                            <label>Fecha de nacimiento: </label>
                            <input
                                type= "text"
                                value={userData.birthdate}
                                name = "birthdate" 
                                placeholder="1995-03-20" 
                                onChange={handleChange}
                                className={errors.birthdate ? `${styles.input} ${styles.errorBorder}` : styles.input}                            
    
                            />

                            <FaCalendar className={styles.icon}/>
                            {errors.birthdate && <span>{errors.birthdate}</span>}
                        </div>
                    </div>


                    <div>

                        <div name = "nDni" className={styles.EachInput}>
                            <label>DNI</label>
                            <input
                                type= "text"
                                value={userData.nDni}
                                name = "nDni" 
                                placeholder="Ingresa tu DNI"
                                onChange={handleChange}
                                className={errors.nDni ? `${styles.input} ${styles.errorBorder}` : styles.input}                            
     
                            />
                            <MdOutlineNumbers className={styles.icon}/>
                        </div>

                        {errors.nDni && <span>{errors.nDni}</span>}
                        
                    </div>

                    <div>

                        <div name = "email" className={styles.EachInput}>
                            <label>Correo electronico: </label>
                            <input
                                type= "text"
                                value={userData.email}
                                name = "email" 
                                placeholder="example@gmail.com"  
                                onChange={handleChange}
                                className={errors.email ? `${styles.input} ${styles.errorBorder}` : styles.input}                            
   
                            />

                            <MdOutlineEmail className={styles.icon}/> 
                        </div>

                        {errors.email && <span>{errors.email}</span>}
                        
                    </div>

                    <div name = "username_password" className={styles.DoubleInput}>
                        <div name = "username" className={styles.EachInput}>
                            <label>Username</label>
                            <input
                                type= "text"
                                value={userRegister.username}
                                name = "username" 
                                placeholder="Crea tu usuario" 
                                onChange={handleChange}
                                className={errors.username ? `${styles.input} ${styles.errorBorder}` : styles.input}                            
  
                            />

                            <FaRegUserCircle className={styles.icon}/> 

                            {errors.username && <span>{errors.username}</span>}
                            
                        </div>
                        <div name = "password" className={styles.EachInput}>
                            <label>Contraseña</label>
                            <input
                                type= "password"
                                value={userRegister.password}
                                name = "password" 
                                placeholder="******"  
                                onChange={handleChange}
                                className={errors.password ? `${styles.input} ${styles.errorBorder}` : styles.input}                            
 
                            />

                            <MdPassword className={styles.icon}/>
                            {errors.password && <span>{errors.password}</span>}   
                        </div>
                    </div>

                    {mensaje && <div className={styles.mensaje}>{mensaje}</div>}

                    <div className={styles.Centrar}>
                        <button type="submit" disabled={Object.values(errors).some(error => error)}>

                            <FaLongArrowAltRight className={styles.iconButton}/>

                            Enviar 
                        
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default FormRegister;