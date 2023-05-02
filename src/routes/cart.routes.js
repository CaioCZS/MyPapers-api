import { Router } from "express"
import { authValidation } from "../middlewares/authValidation.middleware.js"
import {
  getCartItens,
  removeCartItem,
  updateCartItem,
} from "../controllers/cart.controllers.js"
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js"
import { quantitySchema } from "../schemas/cart.schemas.js"

const cartRouter = Router()

cartRouter.get("/cart", authValidation, getCartItens)
cartRouter.put("/cart/:id", authValidation, schemaValidation(quantitySchema), updateCartItem)
cartRouter.delete("/cart/:id", authValidation, removeCartItem)

export default cartRouter
