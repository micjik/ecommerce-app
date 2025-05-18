import express from "express"
import { loginUser, logoutUser, RegisterUser } from "../controller/auth.controller.js"

const router = express.Router()

//REGISTER USER

router.post('/register', RegisterUser)

//LOGIN USER

router.post('/login', logoutUser)

//LOGOUT USER

router.get('/logout', logoutUser)

export default router;








