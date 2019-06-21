module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(45),
        email: DataTypes.STRING(45),
        password: DataTypes.STRING(255),
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, { timestamps: false })

    return User
}