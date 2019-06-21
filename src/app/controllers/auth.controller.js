const AuthService = require('../services/auth.service')
const {resError, resSuccess} = require('../../utils/utils')

class AuthController {
    static async login(req, res) {
        try {
            const authenticate = await AuthService.login(req.body)
            if (authenticate) return resSuccess(res, 200, 'Login Successful', authenticate)
        } catch (error) {
            console.log(error)
            return resError(res, error.statusCode, error.message)
        }
    }
}

module.exports = AuthController