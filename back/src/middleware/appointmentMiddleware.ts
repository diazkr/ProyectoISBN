import { Request, Response, NextFunction } from 'express';

export const validateAppointmentInput = (req: Request, res: Response, next: NextFunction) => {
    const { date, time, userId, status } = req.body;

    if (!date || !time || !userId || !status) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    // Verificar que userId sea un número entero positivo
    if (isNaN(userId) || !Number.isInteger(parseFloat(userId)) || parseInt(userId) <= 0) {
        return res.status(400).json({ error: "El ID de usuario debe ser un número entero positivo" });
    }

    next();
};