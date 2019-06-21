const database = require('../../database/models')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class AuthService {
    static async login(req) {
        try {
            const user = await database.users.findOne({
                where: {
                    email: req.email
                }
            })

            if (user.length == 0) {
                throw {statusCode: 404, message: 'User does not exists'}
            }
            
            const isEqual = await bcrypt.compare(req.password, user.password)

            if (!isEqual) {
                throw {statusCode: 400, message: 'Wrong Credentials'}
            }

            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
            return { id: user.id, token: token, tokenExpiration: 1 }

        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthService