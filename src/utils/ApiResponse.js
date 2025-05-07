

class ApiResponse {
    constructor(statusCode, data , message = "Success" ){ //in future we can overWrite the message, so here set the message on constructor
        this.statusCode  = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export{ ApiResponse }