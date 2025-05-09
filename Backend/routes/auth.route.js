import signup from "../controller.js/auth.controller.js";
import express from "express"

const router = express.Router()

// signup

router.post('/signup', signup)

//login

router.post('/login', login)










export default router
