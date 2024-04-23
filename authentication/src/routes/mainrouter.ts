

// Creación del enrutador 


const {Router} = require("express");

const {credentialRouter} = require("./credential");

const router = Router();

router.use("/credential", credentialRouter);



export default router;