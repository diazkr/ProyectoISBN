

// Creación del enrutador 


const {Router} = require("express");

//Requiriendo las nuevas rutas
//const {credentialRouter} = require("./credential");
const {appointmentRouter} = require("./appointment");
const {usersRouter} = require("./users");

const router = Router();

//router.use("/credential", credentialRouter);
router.use("/appointment", appointmentRouter);
router.use("/appointments", appointmentRouter);
router.use("/users", usersRouter);



export default router;