"use strict";
exports.__esModule = true;
//import express from "express";
var express = require("express");
var path_1 = require("path");
var app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static(path_1["default"].join(__dirname, "public"), { maxAge: 31557600000 }));
console.log("inside app");
exports["default"] = app;