

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went Wrong ",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message // why this line is written , we also call the super at top ?? ->  is not required — it's just extra. 
        this.data = null
        this.success = false; 
        this.error = error 

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export { ApiError }