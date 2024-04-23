

const {Router} = require("express");

const {usersRouter} = require("./users");

const router = Router();

//router.use("/credential", credentialRouter);
router.use("/users", usersRouter);



export default router;