import dotenv from "dotenv"
dotenv.config()

const notFound = (req, res, next)=> {
    const newError = new Error(`not found ${req.originalurl}`)
    res.status(404)
    next(error)
}

const errorHandler = (error, req, res, next)=> {
    let statuscode = res.statuscode === 200 ? 500: res.statuscode

    if(err.name === "CastError" && err.kind === "objectId"){
        statuscode = 404
        message = "resource not Found"
    }
    res.status(statuscode).json({
        message,
        stack:process.env.NODE_ENV == "production" ? null : err.stack
    })
}
export {errorHandler, notFound}