import mongoose from "mongoose"

const bannerSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },

}, {timestamps: true } // updatedAt, createdAt


)

const Banner = mongoose.model("Banner", bannerSchema)

export default Banner