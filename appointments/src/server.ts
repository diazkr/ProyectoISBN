import express from "express"
import morgan from "morgan"
import router from "./routes/mainrouter"
import cors from "cors"


const app = express();

app.use(cors({ origin: true }))

app.use(morgan("dev"))
app.use(express.json());
app.use(router)


export default app;
