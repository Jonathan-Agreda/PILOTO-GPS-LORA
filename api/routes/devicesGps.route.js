import { Router } from "express";

import { getDevicesGps, getDevicesGpsOnly, createDevicesGps, updateDevicesGps, deleteDevicesGps } from "../controllers/devicesGps.controller.js";

const devicesGpsRouter = Router();

devicesGpsRouter.get("/", getDevicesGps);

devicesGpsRouter.get("/:id", getDevicesGpsOnly);

devicesGpsRouter.post("/", createDevicesGps);

devicesGpsRouter.put("/:id", updateDevicesGps);

devicesGpsRouter.delete("/:id", deleteDevicesGps);

export default devicesGpsRouter;