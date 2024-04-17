import styles from "./MisTurnos.module.css"
import {useEffect, useState} from "react"
import CardTurn from "../CardTurn/CardTurn"
import HeaderTable from "../reusable/HeaderTable/HeaderTable"
import CitaDetails from "../CitaDetails/CitaDetails"
import axios from "axios";
import { Link } from "react-router-dom"
import BlurBackground from "../reusable/BlurBackground/BlurBackground"
import NoLogin from "../reusable/NoLogin/NoLogin"
import CancelarDetails from "../CancelarDetails/CancelarDetails"
import { addAppointment } from "../../redux/appointmentSlice"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'





const MisTurnos =()=>{

    const userGlobal = useSelector((state)=>(state.userLogin))
    const userLogin = userGlobal.userLogin.id;

    const [myTurns, setMyTurns] = useState([]);
    
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get(`http://localhost:3000/users/${userLogin}`)
                setMyTurns(dispatch(addAppointment(response.data.appointments)).payload)


            } catch (error) {
                throw Error("Error al traer los datos", error)
            }
        }

        if (userLogin) { 
            fetchData();
        }
    }, [userLogin, dispatch]); 

    const [detail, setDetail] = useState(false);
    const [selectedTurn, setSelectedTurn] = useState(null);
    const clickHandler = (id, event) => {
        event.preventDefault();
        setSelectedTurn(myTurns.find(turn => turn.id === id));
        setDetail(true);
    }
    const closeHandler = (event) => {
        event.preventDefault();
        setSelectedTurn(null);
        setDetail(false);
    }


    const [detailCancel, setDetailCancel] = useState(false);
    const [selectedTurnCancel, setSelectedTurnCancel] = useState(null);
    
    const clickHandlerCancel = (id, event) => {
        event.preventDefault();
        setSelectedTurnCancel(myTurns.find(turn => turn.id === id));
        setDetailCancel(true);
    }
    const closeHandlerCancel = (event) => {
        event.preventDefault();
        setSelectedTurnCancel(null);
        setDetailCancel(false);
    }

    const actualizarTurnos = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/users/${userLogin}`);
          setMyTurns(dispatch(addAppointment(response.data.appointments)).payload);
        } catch (error) {
          console.error("Error al actualizar los turnos después de cancelar la cita:", error);
        }
      };


    return(
        <div className={styles.containerMain}>
        {userLogin== undefined || userLogin== null  ? (
            <NoLogin/>
        ) : myTurns.length === 0 ? (
            
            <div>
                <h1 className={styles.title}>No hay citas registradas</h1>
                <Link to="/crearcita"><button className={styles.botonCita}> Crear una cita</button></Link>
            </div>
            
        ) : (
            <>
                <h1 className={styles.title}>Mis citas</h1>
                <HeaderTable />
                {myTurns.map((app, i) => (
                    <CardTurn {...app} key={i} clickHandler={(id, event) => clickHandler(id, event)} clickHandlerCancel={(id, event) => clickHandlerCancel(id, event)} />
                ))}
                {detail && selectedTurn && <BlurBackground />}
                {detail && selectedTurn && <CitaDetails {...selectedTurn} closeHandler={(event) => closeHandler(event)} />}

                {detailCancel && selectedTurnCancel && <BlurBackground />}
                {detailCancel && selectedTurnCancel && <CancelarDetails {...selectedTurnCancel} closeHandlerCancel={(event) => closeHandlerCancel(event)} actualizarTurnos={actualizarTurnos}  />}
                
                <Link to="/crearcita"><button className={styles.botonCita}> Crear una cita médica</button></Link>
            </>
        )}
    </div>
    );
}
export default MisTurnos;