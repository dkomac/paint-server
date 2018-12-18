"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express from "express";
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const io = socket_io_1.default(http_1.default);
app.set("port", process.env.PORT || 3000);
io.on("connection", (socket) => {
    console.log("someone joined!!");
});
exports.default = app;
//# sourceMappingURL=app.js.map