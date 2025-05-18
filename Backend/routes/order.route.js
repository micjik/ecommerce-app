import express from "express"
import { deleteOrder, getAllorders, getUserOrder, updateOrder, createOrder } from "../controller/order.controller.js"
import protect from "../middleware/auth.middleware.js"

const router = express.Router()

//CREATE ORDER

router.post('/', createOrder)

//GET USER ORDERS

router.get('/find/:id', getUserOrder)

// GET ALL ORDERS

router.get('/', protect, getAllorders)

//UPDATE ORDER

router.put('/:id', updateOrder)

//DELETE ORDER
router.delete('/:id', deleteOrder)

export default router
