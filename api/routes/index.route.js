import { Router } from "express";

import gpsRouter from "./gps.route.js";
import devicesGpsRouter from "./devicesGps.route.js";
import panicoRouter from "./panico.route.js";
import devicesPanicoRouter from "./devicesPanico.route.js";


const indexRouter = Router();

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
    res.send("Welcome to TRACKIOT API");
});

indexRouter.use(`${prefix}/gps`, gpsRouter);

indexRouter.use(`${prefix}/devicesGps`, devicesGpsRouter);

indexRouter.use(`${prefix}/panico`, panicoRouter);

indexRouter.use(`${prefix}/devicesPanico`, devicesPanicoRouter);

indexRouter.use("*", (req, res) => {
    res.send("404 - not found");
})

export default indexRouter;