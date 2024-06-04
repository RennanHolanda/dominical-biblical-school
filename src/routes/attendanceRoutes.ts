import { Router, Request, Response } from "express";
import { AttendanceController } from "../controllers/AttendanceController";

const router = Router();
const attendanceController = new AttendanceController();

router.get("/attendace/index", (req: Request, res: Response) => {
    const message = attendanceController.index();

    res.send(message);
})

router.get("/attendace/register", (req: Request, res: Response) => {
    const message = attendanceController.showRegister();

    res.send(message);
});

export default router;