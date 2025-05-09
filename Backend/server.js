import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./utils/db.js"
import authRoute from "./routes/auth.route.js"
import bannerRoute from "./routes/banner.route.js"
import cors from "cors"



const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) // built-in middleware in server

//Routes
app.use('/api/', authRoute)
app.use('/api', bannerRoute)

//cors

app.use(cors({origin:process.env.CLIENT_URL, credentials: true}))



app.get('/', (req, res) => {
    res.send('Hello')
})



app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT}`)
    connectDB()
})