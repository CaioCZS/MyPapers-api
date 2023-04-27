import { Router } from "express"
import { signIn, signUp } from "../controllers/auth.controllers.js"
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js"
import { loginSchema, singUpSchema } from "../schemas/user.schemas.js"

const authRouter = Router()

authRouter.post("/signIn", schemaValidation(loginSchema), signIn)
authRouter.post("/signUp", schemaValidation(singUpSchema), signUp)

export default authRouter
