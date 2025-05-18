import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

//UPDATE USER

const updateUser = async(req, res)=> {
    try {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body},
            {new:true}
        )
        if(!updatedUser){
            res.status(400).json({
                success:false,
                message: "User not updated"
            })
        }else {
            res.status(201).json({
                success: true,
                message:"User updated successfully"
            })
        }
    }catch(error){
        res.status(400).json({
            success: false,
            message: "User not updated"
        })
    }
}

//DELETE USER

 const deleteUser = async(req, res)=> {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        if(!deletedUser){
            res.status(400).json({
                success:false,
                message: "Unable to delete user"
            })
        }else {
            res.status(201).json({
                success: false,
                message: "User deleted successfully"
            })
        }

    }catch(error){
        res.status(500).json({
            success:false,
            message: "Something went wrong"
        })
    }
 }

   // GET USER

   const getUser = async(req, res)=> {
    try{
        const user = await User.findById(req.params.id)

        if(!user){
            res.status(400).json({
                success: false,
                message:"Unable to fetch user"
            })
        }else{
            res.status(201).json({
                success: true,
                message:" user fetched successfully"
            })
        }
    }catch(error){
        res.status(500).json({
            success:false,
            message: "Something went wrong"
        })
    }
   }

   //GET ALL USERS

    const getAllUsers = async(req, res)=> {
         try{
             const users = await User.find()

             if(!users){
                res.status({
                    success:false,
                    message: "Unable to fetch all users"
                })
             }else{
                res.status({
                    success: true,
                    message: "All users fetched successfully"
                })
             }

         }catch(error){
                res.status(500).json({
                    success:false,
                    message:"Unable to fetch users"
                })
         }
    }

    export { updateUser,deleteUser,getAllUsers, getUser}

