import app from "./server"
import "reflect-metadata"
import {AppDataSource} from "./config/data-source"

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3003

AppDataSource.initialize()
    .then(res =>{
        console.log("Conexión a la base de datos realziada con éxito");
        app.listen(PORT, ()=>{
            console.log("escuchando en el puerto" +`${PORT}`)
        });
    })

