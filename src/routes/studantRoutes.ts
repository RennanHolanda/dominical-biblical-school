import { Router, Request, Response } from "express";
import { StudentController } from "../controllers/StudentController";

const router = Router();
const studentController = new StudentController();

router.get("/student/index", (req: Request, res: Response) => {
    const message = studentController.index();

    res.send(message);
})

router.get("/student/register", (req: Request, res: Response) => {
    const message = studentController.showRegister();

    res.send(message);
})

router.post("/student/register", (req: Request, res: Response) => {
    const message = studentController.register();

    res.send(message);
})

router.get("/student/:id/edit", (req: Request, res: Response) => {
    const message = studentController.showEdit();

    res.send(message);
})

router.post("/student/:id/edit", (req: Request, res: Response) => {
    const message = studentController.update();

    res.send(message);
})

router.get("/student/:id", (req: Request, res: Response) => {
    const message = studentController.delete();

    res.send(message);
})

export default router;