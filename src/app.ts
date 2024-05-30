import express from "express";
import config from "config";
import admRoutes from "./routes/admRoutes"
import teacherRoutes from "./routes/teacherRoutes"

const app = express();

app.use(express.json());

app.use("/api/", admRoutes);
app.use("/api/", teacherRoutes);

const port = config.get<number>("port")

app.listen(port, async () => {
    console.log(`Server running on the port: ${port}`)
});