import { Router, Request, Response } from "express";
import { TeacherController } from "../controllers/TeachersController";

const router = Router();
const teacherController = new TeacherController();

router.get("/teacher/index", (req: Request, res: Response) => {
    const message = teacherController.index();

    res.send(message);
})

router.get("/teacher/register", (req: Request, res: Response) => {
    const message = teacherController.showRegister();

    res.send(message);
})

router.post("/teacher/register", (req: Request, res: Response) => {
    const message = teacherController.register();

    res.send(message);
})

router.get("/teacher/:id/edit", (req: Request, res: Response) => {
    const message = teacherController.showEdit();

    res.send(message);
})

router.post("/teacher/:id/edit", (req: Request, res: Response) => {
    const message = teacherController.update();

    res.send(message);
})

router.get("/teacher/:id", (req: Request, res: Response) => {
    const message = teacherController.delete();

    res.send(message);
})

export default router;