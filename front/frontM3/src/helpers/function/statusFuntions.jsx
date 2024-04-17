import styles from "../../components/CardTurn/CardTurn.module.css"
export const getStatusClassButton = (status) => {
    if (status === "active") {
        return styles.botonCancelar;
    } else if (status === "cancelled") {
        return styles.botonCancelarDisable;
    } else {
        return ''; // Devuelve una cadena vacía si el estado no es válido
    }
};
export const trueIfActive = (status) => {
    return status === "active";
    
};
