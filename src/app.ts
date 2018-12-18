//import express from "express";
import express from "express";
import path from "path";
const app = express();
import http from "http";
import socket from "socket.io";

const io = socket(http);

app.set("port", process.env.PORT || 3000);

io.on("connection", (socket: any) => {
  console.log("someone joined!!");
});

export default app;
