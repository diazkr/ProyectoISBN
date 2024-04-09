import { AppointmentModel, UserModel } from "../config/data-source";
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
    const foundUser = await UserModel.findOne({ where: { id: turno.userId } });
    if(foundUser){
        const newAppointment= {
            date: turno.date,
            time: turno.time,
            userId: turno.userId
        };
        const appointmentCreate = await AppointmentModel.create(newAppointment)
        const result = await AppointmentModel.save(appointmentCreate)

        appointmentCreate.user = foundUser;
        AppointmentModel.save(appointmentCreate)

        return result;
    }else{
        throw new Error("No se puede crear el turno porque no se encontró usuario");    
    }
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
