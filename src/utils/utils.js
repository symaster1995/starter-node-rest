module.exports.resSuccess = (res, statusCode, message, data) => {
    const result = {
        status: statusCode,
        message: message,
        data: data,
    }

    return res.json(result)
}

module.exports.resError = (res, statusCode, message) => {
    const result = {
        status: statusCode,
        message: message,
    }

    console.log(message, 'message')
    
    return res.json(result)
}