import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./utils/db.js"
import { errorHandler, notFound } from "./middleware/error.middleware.js"
import authRoute from "./routes/auth.route.js"
import productRoute from "./routes/product.route.js"
import bannerRoute from "./routes/banner.route.js"
import userRoute from "./routes/user.route.js"
import orderRoute from "./routes/order.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()
const PORT = process.env.PORT

//json body
app.use(express.json())

// Route
app.use('/api/auth',authRoute)
app.use('/api/products', productRoute)
app.use('/api/banners', bannerRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)

//cors
app.use(cors())

app.use(cookieParser)

//error middleware
app.use(notFound)
app.use(errorHandler)


app.get('/', (req, res)=> {
    res.json({message:"Hello Express"})
})

app.listen(PORT, ()=> {
    console.log(`The Server is running on port ${PORT}`)
    connectDB()
})