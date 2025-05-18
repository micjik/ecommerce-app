import express from "express"
import { deleteUser, updateUser, getAllUsers, getUser } from "../controller/user.controller.js"

const router = express.Router()

// UPDATE ROUTE

router.put('/:id', updateUser)

//DELETE ROUTE

router.delete('/:id',deleteUser)

// GET USER

router.get('/find/:userId', getUser)

// GET ALL USERS

router.get('/', getAllUsers)

export default router