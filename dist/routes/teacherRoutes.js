"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TeachersController_1 = require("../controllers/TeachersController");
const router = (0, express_1.Router)();
const teacherController = new TeachersController_1.TeacherController();
router.get("/teacher/index", (req, res) => {
    const message = teacherController.index();
    res.send(message);
});
router.get("/teacher/register", (req, res) => {
    const message = teacherController.showRegister();
    res.send(message);
});
router.post("/teacher/register", (req, res) => {
    const message = teacherController.register();
    res.send(message);
});
router.get("/teacher/:id/edit", (req, res) => {
    const message = teacherController.showEdit();
    res.send(message);
});
router.post("/teacher/:id/edit", (req, res) => {
    const message = teacherController.update();
    res.send(message);
});
router.get("/teacher/:id", (req, res) => {
    const message = teacherController.delete();
    res.send(message);
});
exports.default = router;
