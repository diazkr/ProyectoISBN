const {Router} = require("express")
import { validateAppointmentInput } from "../middleware/appointmentMiddleware";
// Traer los controllers 

const {getAllappointmentController , getappointmentController , createappointmentController , cancelappointmentController } = require("../controllers/appointment")


const appointmentRouter = Router(); 

//Creación de los metodos CRUD

appointmentRouter.get("/", getAllappointmentController );
appointmentRouter.get("/:id", getappointmentController );
appointmentRouter.post("/schedule",validateAppointmentInput, createappointmentController );
appointmentRouter.post("/cancel/:id", cancelappointmentController );


export {
    appointmentRouter
}