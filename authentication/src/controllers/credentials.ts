import { Request, Response } from "express"
import {verifyCredential, createCredential} from "../services/credentialService"
import { IcredentialDto } from "../dto/IcredentialDto";

export const registerCredentialController= async (req: Request, res: Response) => {
    try {
        const inputUser: IcredentialDto = req.body;
        const register = await createCredential(inputUser);
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
