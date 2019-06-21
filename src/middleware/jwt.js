const jwt = require('jsonwebtoken')
const {resError, resSuccess} = require('../utils/utils')

module.exports = async(req, res, next) => {

    const authHeader = req.get('Authorization')
    if (!authHeader) return res.json({ message: 'Token not provided'})

    const token = authHeader.split(' ')[1]

    if (!token || token === '') return res.json({ message: 'Token not provided'})

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY)
    } catch (error) {
        return res.json(error)
    }
    
    next()
}