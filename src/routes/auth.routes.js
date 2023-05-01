import { Router } from "express"
import { signIn, signUp, logOut } from "../controllers/auth.controllers.js"
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js"
import { loginSchema, singUpSchema } from "../schemas/user.schemas.js"
import { authValidation } from "../middlewares/authValidation.middleware.js"

const authRouter = Router()

authRouter.post("/signIn", schemaValidation(loginSchema), signIn)
authRouter.post("/signUp", schemaValidation(singUpSchema), signUp)
authRouter.delete("/logout", authValidation, logOut)

export default authRouter
