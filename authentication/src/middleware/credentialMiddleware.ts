import { Request, Response, NextFunction } from 'express';
import { CredentialModel} from '../config/data-source';


export const validateCredentialInput= async(req: Request, res: Response, next: NextFunction) => {
    const { userId, username, password } = req.body;

    if ( !userId || !username || !password) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }
    if (password.length < 6) {
        return res.status(400).json({ error: "La contraseña debe tener al menos 6 caracteres" });
    }
    const foundCredential = await CredentialModel.findOneBy({username});
    if (foundCredential) {
        return res.status(400).json({ error: "El usuario ya existe en la base de datos" });
    }

    next();
};


export const validateLogin = async(req: Request, res: Response, next: NextFunction) => {
    const { username, password} = req.body;
    const foundCredential = await CredentialModel.findOneBy({ username });
    if (!foundCredential || foundCredential.password !== password) {
        return res.status(400).json({ error: "El usuario o la contraseña son incorrectas" });
    }
    next();
}
