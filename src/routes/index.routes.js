import { Router } from "express"
import authRouter from "./auth.routes.js"
import itensRouter from "./itens.routes.js"
import cartRouter from "./cart.routes.js"

const router = Router()
router.use(authRouter)
router.use(itensRouter)
router.use(cartRouter)

export default router
