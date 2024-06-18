"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AttendanceController_1 = require("../controllers/AttendanceController");
const router = (0, express_1.Router)();
const attendanceController = new AttendanceController_1.AttendanceController();
router.get("/attendace/index", (req, res) => {
    const message = attendanceController.index();
    res.send(message);
});
router.get("/attendace/register", (req, res) => {
    const message = attendanceController.showRegister();
    res.send(message);
});
exports.default = router;
