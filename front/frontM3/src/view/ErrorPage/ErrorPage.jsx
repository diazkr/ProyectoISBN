import styles from "./ErrorPage.module.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    const [countDown, setCountdown] = useState(3);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(countdownInterval);
            navigate("/")
        }, 3000);
        
        return() => clearInterval(countdownInterval);
    }, [navigate])


  return (
    <div className={styles.container}>
        <h1>Page Not Found</h1>
        <p>Redirecting to home in {countDown} seconds...</p>
    </div>
  )
}

export default ErrorPage