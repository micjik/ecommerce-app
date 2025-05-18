import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/products.model.js"
dotenv.config()

const protect = async(req, res, next)=> {
    let token;
    token = req.cookies.jwt
    if(token){
        try {
            const decodedToken = jwt.verify(token, process.env.PRIVATE_SECURITY)

            req.user = await User.findById(decodedToken.userId).select("-password")
            next()

        }catch(error){
            res.status(401).json({
                success: false,
                message:"Not authorised invalid token"
            })
        }
    }else{
        res.status(401).json({
            success: false,
            message: "Not authorised no token"
        })
    }
}

export default protect
