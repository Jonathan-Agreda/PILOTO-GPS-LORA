import { Router } from "express";

import { getGps, getGpsOnly, createGps, updateGps, deleteGps } from "../controllers/gps.controller.js";

const gpsRouter = Router();

gpsRouter.get("/", getGps);

gpsRouter.get("/:id", getGpsOnly);

gpsRouter.post("/", createGps);

gpsRouter.put("/:id", updateGps);

gpsRouter.delete("/:id", deleteGps);

export default gpsRouter;