import { Request, Response, NextFunction } from 'express';


export const validateUserInput= async(req: Request, res: Response, next: NextFunction) => {
    const { name, email, birthdate, nDni } = req.body;

    if (!name || !email || !birthdate || !nDni) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    next();
};
