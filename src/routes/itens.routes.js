import { Router } from "express";
import {
  getItemById,
  getItens,
  buy,
} from "../controllers/itens.controllers.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";

const itensRouter = Router();

itensRouter.get("/", getItens);
itensRouter.get("/item/:id", getItemById);
itensRouter.post("/buy/:id", authValidation, buy);

export default itensRouter;
