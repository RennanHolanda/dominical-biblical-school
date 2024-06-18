"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const admRoutes_1 = __importDefault(require("./routes/admRoutes"));
const teacherRoutes_1 = __importDefault(require("./routes/teacherRoutes"));
const studantRoutes_1 = __importDefault(require("./routes/studantRoutes"));
const attendanceRoutes_1 = __importDefault(require("./routes/attendanceRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/", admRoutes_1.default);
app.use("/api/", teacherRoutes_1.default);
app.use("/api/", studantRoutes_1.default);
app.use("/api/", attendanceRoutes_1.default);
const port = config_1.default.get("port");
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server running on the port: ${port}`);
}));
