import styles from "../../components/CardTurn/CardTurn.module.css"
const getStatusClass = (status) => {
    if (status === "active") {
        return styles.statusActive;
    } else if (status === "cancelled") {
        return styles.statusCancelled;
    } else {
        return ''; // Devuelve una cadena vacía si el estado no es válido
    }
};

export default getStatusClass;