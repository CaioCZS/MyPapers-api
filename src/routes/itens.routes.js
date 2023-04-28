import { Router } from "express";
import { getItemById, getItens } from "../controllers/itens.controllers.js";

const itensRouter = Router();

itensRouter.get("/", getItens);
itensRouter.get("/item/:id", getItemById);

export default itensRouter;
