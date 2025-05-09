import {signup, login} from "../controller/auth.controller.js";
import express from "express"

const router = express.Router()

// signup

router.post('/signup', signup)

//login

router.post('/login', login)












export default router
