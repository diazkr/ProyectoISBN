import { DataSource } from "typeorm"
import { Credential } from "../entities/Credential"

export const AppDataSource = new DataSource({
    type: "postgres",
    // host: "34.86.252.165",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "login",
    synchronize: true,
    logging: true,
    entities: [Credential],
    subscribers: [],
    migrations: [],
    dropSchema: true
})

export const CredentialModel = AppDataSource.getRepository(Credential)