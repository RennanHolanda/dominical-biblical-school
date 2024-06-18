"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdmController_1 = require("../controllers/AdmController");
const router = (0, express_1.Router)();
const admController = new AdmController_1.AdminController();
router.get("/adm/index", (req, res) => {
    const message = admController.index();
    res.send(message);
});
router.get("/adm/register", (req, res) => {
    const message = admController.showRegister();
    res.send(message);
});
router.post("/adm/register", (req, res) => {
    const message = admController.register();
    res.send(message);
});
router.get("/adm/:id/edit", (req, res) => {
    const message = admController.showEdit();
    res.send(message);
});
router.post("/adm/:id/edit", (req, res) => {
    const message = admController.update();
    res.send(message);
});
router.get("/adm/:id", (req, res) => {
    const message = admController.delete();
    res.send(message);
});
exports.default = router;
