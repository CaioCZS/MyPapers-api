import { Router } from "express"
import authRouter from "./auth.routes.js"
import itensRouter from "./itens.routes.js"
import cartRouter from "./cart.routes.js"
import checkOutRouter from "./chekout.routes.js"

const router = Router()
router.use(authRouter)
router.use(itensRouter)
router.use(cartRouter)
router.use(checkOutRouter)

export default router
