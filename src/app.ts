//import express from "express";
import express from 'express';
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('origins', '*:*');

export default app;
