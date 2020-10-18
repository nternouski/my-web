import * as express from "express";
import * as multer from "multer";

const app = express();
app.disable("x-powered-by");
// handle multipart form data
app.use([multer().any()]);

// import { listener as ocr } from "./text-detection";
// app.use("/api/ocr", ocr);

export const listener = app;
