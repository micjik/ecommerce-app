import User from "../models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const signup = async(req, res)=> {

    try{
         const { username, email, password } = req.body

    if(!username || !email || !password){
        res.status(400).json({success: false, message: "All fields are required"}) // check one
    }
     const emailExists = await User.findOne({email})
     if(emailExists) {
        res.status(400).json({success: false, message: "Email Already Exists"}) //check two
     }
     const usernameExists = await User.findOne({username})
     if(usernameExists){
        res.status(400).json({success:false, message: "Username is already taken"}) // check three
     }
      // bcryptjs to hash our password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const user = await User.create({
        username,
        email,
        password: hashedPassword
      })
      // jwt to put our token in the cookie

      if(user){
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )
        res.cookie('token', token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
      } return res.status(200).json({sucess: true, message: "user created successfully"})
    }catch(error){
        res.status(400).json({success: false, message: "Error creating user"})
    }
   
}

const login =  async(req, res)=> {
    const {email, password} = req.body

    try{
        const user = await User.findOne({email})
        if(!user){
           return res.status(400).json({success: false, message: "invalid credential"})

        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(400).json({success: false, message: "invalid credential"})
        }

        //jwt
         if(user){
                const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,
                    {
                        expiresIn: "7d"
                    }
                )
                res.cookie('token', token,{
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    maxAge: 7 * 24 * 60 * 60 * 1000
                })
              } return res.status(200).json({sucess: true, message: "user login successfully"})


    }catch(error){
        return res.status(400).json({success: false, message: "Error signing in"})
    }
}
export {login, signup} 