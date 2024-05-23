import express from "express";
import config from "config";

const app = express();

app.use(express.json());

import router from "./router";

app.use("/api/", router);

const port = config.get<number>("port")

app.listen(3000, async () => {
    console.log(`rodando na porta: ${port}`)
});