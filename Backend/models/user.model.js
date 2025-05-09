import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    {timestamp: true // updatedAt, createdAt

    })

    const User = mongoose.model("User", userSchema)

    export default User