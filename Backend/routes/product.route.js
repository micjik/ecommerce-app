import express from "express"
import { deleteproduct, getAllproducts, getProduct, ratingProduct, updateProduct } from "../controller/product.controller.js"
import router from "./auth.route.js"
const route = express.Router()

//GET PRODUCT

 route.get("/find/:id", getProduct)

 //GET ALL PRODUCTS

 route.get("/", getAllproducts)

 //UPDATE PRODUCT 

  route.put("/:id", updateProduct)

  //DELETE PRODUCT

  route.delete("/:id", deleteproduct)

  // RATING PRODUCT

  route.post("/rating/:id", ratingProduct)

  export default router