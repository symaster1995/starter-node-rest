const database = require('../../database/models')

class UserService {
    static async getAllUsers() {
        try {
            return await database.users.findAll();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService