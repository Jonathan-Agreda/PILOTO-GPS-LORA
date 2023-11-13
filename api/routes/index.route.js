import { Router } from "express";

import gpsRouter from "./gps.route.js";

const indexRouter = Router();

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
    res.send("Welcome to TRACKIOT API");
});

indexRouter.use(`${prefix}/gps`, gpsRouter);


indexRouter.use("*", (req, res) => {
    res.send("404 - not found");
})

export default indexRouter;