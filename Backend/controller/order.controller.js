import Order from "../models/order.model.js"

//CREATE ORDER

const createOrder = async(req, res)=> {
    try{
        const newOrder = await Order(req.body)
        const savedOrder = newOrder.save()

        if(!savedOrder){
            res.status.json({
                success:false,
                message: "Unable to create Order"
            })
        }else{
            res.status(201).json({
               success: true,
               message: "user created successfully"
            })
        }

    }catch(error){
        res.status.json({
            success: false,
            message: "Error while creating Order"
        })

    }
}

// UPDATE ORDER

const updateOrder = async(req, res)=> {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,
            {
                $set:req.body
            },
             { new: true}
        )
        if(!updatedOrder){
            res.status(400).json({
                success: false,
                message: "Unable to update Order"
            })
        }else {
            res.status(201).json({
                success: true,
                message: "Order Updated successfully"
            })
        }

    }catch(error){
        res.status(400).json({
            success: false,
            message: "Unable to update order"
        })
    }
}

// DELETE ORDER

  const deleteOrder = async(req, res)=> {
    try{
        const order = await Order.findByIdAndDelete(req.params.id)
        if(!order){
            res.status(400).json({
                success: false,
                message: "Unable to delete order"
            })
        }else{
            res.status(201).json({
                success: false,
                message: "order deleted successfully"
            })
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
    
  }

  //GET USER ORDER

     const getUserOrder = async(req, res)=> {
        try{
            const orders = await Order.findById({userId:req.params.id}).reverse()

            if(!orders){
                res.status(400).json({
                    success: false,
                    message: "Unable to fetch order"   
                 
                })
            }else{
                res.status(201).json({
                    success: true,
                    message: "Order fetched successfully"
                })
            }

        }catch(error){
            res.status(500).json({
                success: false,
                message: "Something went wrong"
            })
        }
     }

     // GET ALL ORDERS
     const getAllorders = async(req, res)=> {
        try{
            const orders = await Order.find().reverse()

            if(!orders){
                res.status(400).json({
                    success: false,
                    message: "Unable to fetch order"   
                 
                })
            }else{
                res.status(201).json({
                    success: true,
                    message: "Order fetched successfully"
                })
            }
        }catch(error){
            res.status(500).json({
                success: false,
                message: "Unable to get orders"
                
            })
        }
     }

     export { createOrder, getUserOrder, updateOrder, deleteOrder, getAllorders}