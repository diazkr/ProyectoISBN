
import React from 'react';
import styles from './Navbar.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandHoldingMedical } from "react-icons/fa6";
import ContentNav from '../reusable/ContentNav/ContentNav';

import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(

        <header id="header" className={`fixed-top ${styles.header}`}>
        <div className="container d-flex align-items-center">
            <h1 className={`me-auto ${styles.logo}`}>
            <FaHandHoldingMedical className = {styles.iconNav}/>Medilab</h1>
            
            <nav id="navbar" className={`order-last order-lg-0 ${styles.navbar}`} >
                <ContentNav/>
                <GiHamburgerMenu className={`bi bi-list ${styles.mobileNavToggle}`}/>
                
            </nav>

            <Link to='/crearcita'> <a className={`scrollto ${styles.appointmentBtn}`}>Crear una cita médica</a></Link>
            

        </div>
        </header>
        

    )
}

export default Navbar;