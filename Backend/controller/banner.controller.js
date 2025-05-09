import Banner from "../models/banner.model.js"


//CREATE BANNER

const createBanner = async(req, res)=> {
    try {
        const newBanner = await Banner(req.body);
        const savedBanner = newBanner.save()

        if(!savedBanner){
            res.status(400).json({
                success:false,
                message:"Unable to create Banner"
            })
        }else{
            res.status(201).json({
                success:true,
                message:"Banner created successfully"
            })
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Unable to create Banner"
        })
    }
}

// DELETE BANNER
 const deleteBanner = async(req, res)=> {
    try{
        const banner = await Banner.findByIdAndDelete(req.params.id)
        if(!banner){
            res.status(400).json({
                success:false,
                message: "Unable to delete banner"
            })
        }else {
            res.status(201).json({
                success:true,
                message:"Banner deleted successfully"
            })
        }
    }catch(error){
        res.status(500).json({
            success:"false",
            message:"Unable to delete banner"
        })
    }
 }

 //GET ALL BANNERS
   const getAllBanners = async(req, res)=> {
    try{
        const banners = await Banner.find()
        if(!banners){
            res.status(400).json({
                success:false,
                message:"Unable to fetch all banners"
            })
        }else {
            res.status(201).json({
                success:true,
                message:"banners fetched successfully"
            })
        }

    }catch(error){
        res.status(500).json({
            success:false,
            message:"unable to fetch all banners"
        })
    }
   }

   //GET RANDOM BANNER
    const getRandomBanner = async(req, res)=> {
        try{ 
            const banners = await Banner.find()
            if(!banners){
                res.status(400).json({
                    success:false,
                    message:"Unable to get random banner"
                })
            }else{
                const randomIndex = Math.floor(Math.random() * banners.length)
                const randomBanner = banners[randomIndex];
                res.status(201).json({
                    success:true,
                    message:"random banner fetched successfully"
                })
            }

        }catch(error){
            res.status(400).json({
                success:false,
                message:"Unable to get random banner"
            })
        }
    }

        export {getRandomBanner, createBanner, deleteBanner,getAllBanners}