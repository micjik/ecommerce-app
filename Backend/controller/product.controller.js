import Product from "../models/products.model.js"

// CREATE PRODUCT

const createProduct = async(req, res)=> {
    try {
        const newProduct = await Product(req.body)
        const product = newProduct.save()

        if(product){
            res.status(201).json({
                success: true,
                message:"product created successfully"
            })
        }else {
            res.status(400).json({
                success:false,
                message:"Unable to create product"
            })
        }
    }catch(error){
        res.status(401).json({
            success:false,
            message: "Error While creating product"
        })
    }
}

//UPDATE PRODUCT

const updateProduct = async(req,res)=> {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            {
                $set:req.body
            },
            {new: true}
        )
        if(!updatedProduct){
            res.status(400).json({
                success: false,
                message:"Unable to update product"
            })
        }else{
            res.status(201).json({
                success: true,
                message: "product update successfully"
            })
        }


    }catch(error){
        res.status(500).json({
            success:false,
            message:"Unable to update product"
        })
    }
} 

//DELETE PRODUCT

 const deleteproduct = async(req, res)=> {
    try{
        const product = await Product.findByIdAndDelete(req.params.id)

        if(!product){
            res.status(400).json({
                success: false,
                message:"Unable to delete product"
            })
        }else {
            res.status(201).json({
                success:true,
                message:"product deleted successfully"
            })
        }
    }catch(error){
        res.status(400).json({
            success:false,
            message:"Unable to delete product"
        })
    }
        
    }

    //GET PRODUCT

    const getProduct = async(req, res)=> {
        try{
            const product = await Product.findById(req.params.id)
            if(!product){
                res.status(400).json({
                    success:false,
                    message:"Unable to fetch product"
                })
            }else{
                res.status(201).json({
                    success:false,
                    message:"product fetch successfully"
                })
            }
        }catch(error){
            res.status(500).json({
                success:false,
                message:"Error while fetching product"
            })
        }
    }

    //GET ALL PRODUCTS
    const getAllproducts = async(req, res)=> {
        try{
            const qNew = req.query.New
            const qCategory = req.query.Category
            const qSearch = req.query.search

            let products
            if(qNew){
                products = await Product.find().sort({createdAt:-1})
            }else if(qCategory){
                products = await Product.find({categories: {$in: [qCategory]}})
            }else if(qSearch){
                products = await Product.find({
                    $text:{
                        $search:qSearch,
                        $caseSensitive: false,
                        postedBy: {type: string}
                    }
                })
            }else {
                products = await Product.find().sort({createdAt:-1})

                res.status(201).json({
                    success: true,
                    message:"all product fetched successfully"
                })
            }

        }catch(error){
            res.status(500).json({
                success:false,
                message:"Unable to get all products"
            })
        }
    }

    //RATING PRODUCT

    const ratingProduct = async(req, res)=> {
        const { name, star, comment, postedBy} = req.body
        try{
            if(star && name && comment && postedBy){
                const postedBy = await Product.findByIdAndUpdate(req.params.id,
                    {
                        $push:{ratings: {star,name, comment, postedBy}}
                    },
                    {new: true}
                )
                res.status(201).json({
                    success: true,
                    message: "product was rated successfully"
                })
            }
        }catch(error){
            res.status(400).json({
                success:false,
                message: "product was not rated successfully"
            })
        }
    }

    export {createProduct,updateProduct, deleteproduct, getProduct,getAllproducts, ratingProduct}
    