const {Router} = require("express")
import { validateUserInput, validateLogin } from "../middleware/userMiddleware";

// Traer los controllers 

const {getUsersController, getUsersByIdController, registerUsersController, loginUsersController} = require("../controllers/users")


const usersRouter = Router(); 

//Creación de los metodos CRUD

usersRouter.get("/", getUsersController);
usersRouter.get("/:id", getUsersByIdController);
usersRouter.post("/register",validateUserInput, registerUsersController);
usersRouter.post("/login", validateLogin, loginUsersController);


export {
    usersRouter
}