import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import Connection from "./model/dbConnection.js";

import DefaultData from "./default.js";
import router from "./routes/routes.js";


dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
Connection(process.env.USER, process.env.PASSWORD)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use("/", router)

app.listen(PORT, async () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
// DefaultData()