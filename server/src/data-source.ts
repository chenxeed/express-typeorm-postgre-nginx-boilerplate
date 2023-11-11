import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./modules/User/entity"
import dotenv from "dotenv"

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT) || 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: true,
    logging: true,
    migrationsRun: true,
    migrationsTableName: "migrations",
    entities: [User],
    migrations: [],
    subscribers: [],
})
