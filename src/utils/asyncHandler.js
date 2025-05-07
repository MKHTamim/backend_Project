

    const asyncHandler = (requestHandler) => {
        async(req,res,next) => {
            Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
        }
    }

/*

//higher order function  -> function inside a function
//const asyncHandler = (func) => { () => {} } -> const asyncHandler = () = () => {}

//make handler using async await | try catch block

const asyncHandler = (fn) = async (req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success : false,
            message : error.message
        })
    }
}

*/

export { asyncHandler }