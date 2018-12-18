"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express from "express";
const express = require("express");
const path_1 = __importDefault(require("path"));
const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static(path_1.default.join(__dirname, "public"), { maxAge: 31557600000 }));
exports.default = app;
//# sourceMappingURL=app.js.map