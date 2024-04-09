import { Request, Response, NextFunction } from 'express';


export const validateUserInput= (req: Request, res: Response, next: NextFunction) => {
    const { name, email, birthdate, nDni, username, password } = req.body;

    if (!name || !email || !birthdate || !nDni || !username || !password) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }
    if (password.length < 6) {
        return res.status(400).json({ error: "La contraseña debe tener al menos 6 caracteres" });
    }

    next();
};