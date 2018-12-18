//import express from "express";
const express = require("express");
import path from "path";
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

export default app;