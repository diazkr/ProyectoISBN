


const {Router} = require("express");

const {appointmentRouter} = require("./appointment");

const router = Router();

//router.use("/credential", credentialRouter);
router.use("/appointment", appointmentRouter);
router.use("/appointments", appointmentRouter);



export default router;