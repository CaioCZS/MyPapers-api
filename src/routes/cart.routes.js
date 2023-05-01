import { Router } from "express"
import { authValidation } from "../middlewares/authValidation.middleware.js"
import {
  getCartItens,
  removeCartIten,
  updateCartIten,
} from "../controllers/cart.controllers.js"

const cartRouter = Router()

cartRouter.use(authValidation)

cartRouter.get("/cart", getCartItens)
cartRouter.put("/cart/:id", updateCartIten)
cartRouter.delete("/cart/:id", removeCartIten)

export default cartRouter
