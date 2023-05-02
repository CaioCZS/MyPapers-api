import { Router } from "express";
import {
  getItemById,
  getItens,
  buy,
} from "../controllers/itens.controllers.js";

const itensRouter = Router();

itensRouter.get("/", getItens);
itensRouter.get("/item/:id", getItemById);
itensRouter.post("/buy/:id", buy);

export default itensRouter;
