import { Request, Response } from "express"
import { getAllUsers, getUserById, createUser} from "../services/usersService"
import {verifyCredential} from "../services/credentialService"
import { IuserDto } from "../dto/userDto";
import { User } from "../entities/User";
//getUsers, getUsersById, registerUsers, loginUsers

export const getUsersController = async (req: Request, res: Response) => {
    try {
        const allUser: User[]= await getAllUsers();
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).json({ "mensaje": "Ha ocurrido un error al obtener todos los usuarios" });
        
    }
}

export const getUsersByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const byId:User = await getUserById(parseInt(id));
        res.status(200).json(byId );
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ "error": error.message });
        } else {
            res.status(500).json({ "mensaje": "Ha ocurrido un error al obtener el usuario por ID" });
        }
    }
}

export const registerUsersController = async (req: Request, res: Response) => {
    try {
        const inputUser: IuserDto = req.body;
        const register = await createUser(inputUser);
        res.status(201).json({register});
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ "error": error.message });
        } else {
            res.status(500).json({ "mensaje": "Ha ocurrido un error al crear el usuario" });
        }
    }
}

export const loginUsersController = async (req: Request, res: Response) => {
    try {
        const inputlogin = req.body;
        const loginUser = await verifyCredential(inputlogin);
        res.status(200).json(loginUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ "error": error.message });
        } else {
            res.status(500).json({ "mensaje": "Ha ocurrido un error al iniciar sesión" });
        }
    }
}
