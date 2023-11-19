import { Router } from "express";

import { getDevicesPanico, getDevicesPanicoOnly, createDevicesPanico, updateDevicesPanico, deleteDevicesPanico } from "../controllers/devicesPanico.controller.js";

const devicesPanicoRouter = Router();

devicesPanicoRouter.get("/", getDevicesPanico);

devicesPanicoRouter.get("/:id", getDevicesPanicoOnly);

devicesPanicoRouter.post("/", createDevicesPanico);

devicesPanicoRouter.put("/:id", updateDevicesPanico);

devicesPanicoRouter.delete("/:id", deleteDevicesPanico);

export default devicesPanicoRouter;