import { DataSource } from "typeorm"
import { Appointment } from "../entities/Appointment"

export const AppDataSource = new DataSource({
    type: "postgres",
    //host: "34.86.252.165",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "appointments",
    synchronize: true,
    logging: true,
    entities: [Appointment],
    subscribers: [],
    migrations: [],
    dropSchema: true
})

export const AppointmentModel = AppDataSource.getRepository(Appointment)