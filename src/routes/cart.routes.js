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
cartRouter.put("/cart", updateCartIten)
cartRouter.delete("/cart", removeCartIten)

export default cartRouter
