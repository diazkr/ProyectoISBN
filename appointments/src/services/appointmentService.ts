import { AppointmentModel} from "../config/data-source";
import { IAppointmentDto } from "../dto/appointmetDto";


export const getAllAppointment = async () =>{
    const allAppointments = await AppointmentModel.find()
    return allAppointments;
}


export const getAppointmentById = async (id: number) =>{
    const foundAppointment = await AppointmentModel.findOneBy({
        id
    })
    if(foundAppointment){
        return foundAppointment;
    }else {
        throw new Error("No se encontró turno con ese id");
    }
}

export const createAppointment = async( turno: IAppointmentDto)=>{
        const newAppointment= {
            date: turno.date,
            time: turno.time,
            userId: turno.userId, 
            description: turno.description,
            especialist: turno.especialist
        };
        const appointmentCreate = await AppointmentModel.create(newAppointment)
        const result = await AppointmentModel.save(appointmentCreate)

        return result;
    
}


export const cancelAppointment = async (id:number) => {
    const foundAppointment = await AppointmentModel.findOneBy({
        id
    })    
    
    if (foundAppointment) {
        foundAppointment.status = "cancelled"; 
        await AppointmentModel.save(foundAppointment);
        return foundAppointment;
    } else {
        throw new Error("No se encontró este turno para cancelarlo");
    }
}
