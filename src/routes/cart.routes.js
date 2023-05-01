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

cartRouter.use(authValidation)

cartRouter.get("/cart", getCartItens)
cartRouter.put("/cart/:id", schemaValidation(quantitySchema), updateCartItem)
cartRouter.delete("/cart/:id", removeCartItem)

export default cartRouter
