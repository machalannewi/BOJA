import express from "express"
import Register from "../controller/register.js"
import Login from "../controller/login.js"
import { registerValidationRules, validateRegister} from "../middleware/validateRegister.js"
import { loginValidationRules, validateLogin} from "../middleware/validateLogin.js"

const router = express.Router();

router.post("/register", registerValidationRules(), validateRegister, Register)
router.post("/login", loginValidationRules(), validateLogin, Login)

export default router;