import { Router } from "express";

import { getPanico, getPanicoOnly, createPanico, updatePanico, deletePanico } from "../controllers/panico.controller.js";

const panicoRouter = Router();

panicoRouter.get("/", getPanico);

panicoRouter.get("/:id", getPanicoOnly);

panicoRouter.post("/", createPanico);

panicoRouter.put("/:id", updatePanico);

panicoRouter.delete("/:id", deletePanico);

export default panicoRouter;