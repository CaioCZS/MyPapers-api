import { Router } from "express"
import authRouter from "./auth.routes.js"
import itensRouter from "./itens.routes.js"

const router = Router()
router.use(authRouter)
router.use(itensRouter)

export default router
