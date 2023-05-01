import { Router } from "express"
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js"
import { authValidation } from "../middlewares/authValidation.middleware.js"
import { checkout } from "../controllers/checkout.controllers.js"
import { checkoutSchema } from "../schemas/checkout.schema.js"

const checkOutRouter = Router()

checkOutRouter.use(authValidation)

checkOutRouter.post("/checkout", schemaValidation(checkoutSchema), checkout)

export default checkOutRouter
