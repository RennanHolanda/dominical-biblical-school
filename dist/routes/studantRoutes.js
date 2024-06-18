"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StudentController_1 = require("../controllers/StudentController");
const router = (0, express_1.Router)();
const studentController = new StudentController_1.StudentController();
router.get("/student/index", (req, res) => {
    const message = studentController.index();
    res.send(message);
});
router.get("/student/register", (req, res) => {
    const message = studentController.showRegister();
    res.send(message);
});
router.post("/student/register", (req, res) => {
    const message = studentController.register();
    res.send(message);
});
router.get("/student/:id/edit", (req, res) => {
    const message = studentController.showEdit();
    res.send(message);
});
router.post("/student/:id/edit", (req, res) => {
    const message = studentController.update();
    res.send(message);
});
router.get("/student/:id", (req, res) => {
    const message = studentController.delete();
    res.send(message);
});
exports.default = router;
