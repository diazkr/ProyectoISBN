import styles from "../FormRegister/FormRegister.module.css"
import axios from "axios";
import { useEffect, useState} from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { validate, ValidateFullData} from "../../../helpers/function/forms/validateForm";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormAppointment=({userLogin})=>{
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        date: '',
        time: '',
        userId: userLogin,
        description: '',
        especialist: ''
    })
    const [errors, setErrors] = useState({
        date: '',
        time: '',
        userId: '',
        description: '',
        especialist: ''
    })

    //Set mensaje de error:

    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        const validationErrors = validate(userData);
        setErrors(validationErrors);
    }, [userData])

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!ValidateFullData(userData)) {
            setMensaje('Todos los campos son requeridos');
        } else {
            try {
                const respuesta = await axios.post("http://localhost:3000/appointment/schedule", userData);
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
        const errors = validate(userData)
        setErrors(errors)
    }

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6; // 0 = Domingo, 6 = Sábado
    };


    return(
        <div className={styles.ContainerMain}>

            <div className={styles.Container}>
                <form onSubmit={(e) => handleSubmit(e)}>

                    <div name = "introduction" className={`${styles.Centrar} ${styles.EachInput}`}>
                        <h3>Crear cita</h3>
                    </div>

                    <div name = "date" className={styles.DoubleInput}>
                        <div className={styles.EachInput}>
                            <label>Fecha:</label>
                            <DatePicker
                                selected={userData.date}
                                onChange={(date) => setUserData({ ...userData, date: date.toISOString().slice(0, 10) })}                                filterDate={isWeekday}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Selecciona una fecha"
                            />
                            <FaHandHoldingMedical className={styles.icon}/>
                            {errors.date && <span>{errors.date}</span>}
                        </div>
                        <div name="time" className={styles.EachInput}>
                            <label>Hora:</label>
                            <input
                                type="text"
                                value={userData.time} // Asegúrate de que userData tenga una propiedad llamada "time"
                                name="time"
                                placeholder="15:30"
                                onChange={handleChange}
                                className={errors.time ? `${styles.input} ${styles.errorBorder}` : styles.input}
                            />
                            <FaHandHoldingMedical className={styles.icon}/>
                            {errors.time && <span>{errors.time}</span>}
                        </div>

                    </div>


                    <div>

                    <div name="especialist" className={styles.EachInput}>
                        <label>Especialidad</label>
                        <select
                            value={userData.especialist}
                            name="especialist"
                            className={styles.selectEspecialidad}
                            onChange={handleChange} 
                        >
                            <option value="">Selecciona la especialidad</option>
                            <option value="Cardiología">Cardiología</option>
                            <option value="Neurología">Neurología</option>
                            <option value="Pediatría">Pediatría</option>
                            <option value="Hepatología">Hepatología</option>
                        </select>

                        <FaHandHoldingMedical className={styles.icon}/>
                    </div>
                        
                    </div>

                    <div>

                        <div name = "description" className={styles.EachInput}>
                            <label>Descripción: </label>
                            <input
                                type= "text"
                                value={userData.description}
                                name = "description" 
                                placeholder="Motivo de tu cita"  
                                onChange={handleChange}
                                className={errors.description ? `${styles.input} ${styles.errorBorder}` : styles.input}                            
   
                            />

                            <FaHandHoldingMedical className={styles.icon}/> 
                        </div>

                        {errors.description && <span>{errors.description}</span>}
                        
                    </div>

                    {mensaje && <div className={styles.mensaje}>{mensaje}</div>}

                    <div className={styles.Centrar}>
                        <button type="submit" disabled={Object.values(errors).some(error => error)}>

                            <FaHandHoldingMedical className={styles.iconButton}/>

                            Crear
                        
                        </button>
                    </div>
                </form>

            </div> 
        </div>
    )
}

export default FormAppointment;