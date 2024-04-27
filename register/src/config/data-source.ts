import { DataSource } from "typeorm"
import {User} from "../entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.86.252.165",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "register",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
    dropSchema: true
})

export const UserModel = AppDataSource.getRepository(User)