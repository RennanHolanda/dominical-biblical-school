import { Router, Request, Response } from "express";
import { AdminController } from "../controllers/AdmController";

const router = Router();
const admController = new AdminController();

router.get("/adm/index", (req: Request, res: Response) => {
    const message = admController.index();

    res.send(message);
})

router.get("/adm/register", (req: Request, res: Response) => {
    const message = admController.showRegister();

    res.send(message);
})

router.post("/adm/register", (req: Request, res: Response) => {
    const message = admController.register();

    res.send(message);
})

router.get("/adm/:id/edit", (req: Request, res: Response) => {
    const message = admController.showEdit();

    res.send(message);
})

router.post("/adm/:id/edit", (req: Request, res: Response) => {
    const message = admController.update();

    res.send(message);
})

router.get("/adm/:id", (req: Request, res: Response) => {
    const message = admController.delete();

    res.send(message);
})

export default router;