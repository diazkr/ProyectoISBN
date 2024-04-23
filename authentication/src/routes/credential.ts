const {Router} = require("express")
import { validateCredentialInput, validateLogin } from "../middleware/credentialMiddleware";

// Traer los controllers 

const {registerCredentialController, loginUsersController} = require("../controllers/credentials")


const credentialRouter = Router(); 


credentialRouter.post("/register",validateCredentialInput, registerCredentialController);
credentialRouter.post("/login", validateLogin, loginUsersController);


export {
    credentialRouter
}