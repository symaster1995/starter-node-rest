const UserService = require('../services/user.service')
const {resError, resSuccess} = require('../../utils/utils')

class UserController {
    static async getAllUsers(req, res) {
        try {
            const allUsers = await UserService.getAllUsers()
            if (allUsers.length > 0) {
                return resSuccess(res, 200, 'Users retrived', allUsers)
            } else {
                return resSuccess(res, 200, 'User does not exists')
            }
        } catch (error) {
            console.log(error)
            return resError(res, 400, error)
        }
    }
}

module.exports = UserController