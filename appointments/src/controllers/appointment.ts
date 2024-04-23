import { Request, Response } from "express"
import {getAllAppointment,getAppointmentById, createAppointment, cancelAppointment} from "../services/appointmentService"

//getAllappointment, getappointment, createappointment, cancelappointment
export const getAllappointmentController = async (req: Request, res: Response) => {
    try {
        const getAllappointment = await getAllAppointment();
        res.status(200).json(getAllappointment);
    } catch (error) {
        res.status(500).json({ "mensaje": "Ha ocurrido un error al observar todos los turnos"});
    }
}

export const getappointmentController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointmentId = await getAppointmentById(parseInt(id));
        res.status(200).json(appointmentId);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ "error": error.message });
        } else {
            res.status(500).json({ "mensaje": "Ha ocurrido un error al traer el turno" });
        }
    }

}

export const createappointmentController = async (req: Request, res: Response) => {
    try {
        const dataAppointment = req.body;
        const create = await createAppointment(dataAppointment);
        res.status(201).json( create );
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ "error": error.message });
        } else {
            res.status(500).json({ "mensaje": "Ha ocurrido un error al crear los turnos" });
        }
    }

}

export const cancelappointmentController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const cancel = await cancelAppointment(parseInt(id));
        res.status(200).json({ cancel });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({"error": error.message });
        } else {
            res.status(500).json({ "mensaje": "Ha ocurrido un error al cancelar el turno" });
        }
    }

}
