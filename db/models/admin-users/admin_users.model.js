module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        fullName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'full_name'
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            field: 'email'
        },
        userName: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'user_name'
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false,
            field: 'password'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.fn('current_timestamp'),
            field: 'created_at'
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'avatar'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.fn('current_timestamp'),
            field: 'updated_at'
        },
        status: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '1',
            field: 'status'
        }
    }, {
        sequelize,
        tableName: 'users',
        timestamps: false,
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                using: 'BTREE',
                fields: [
                    { name: 'id' }
                ]
            }
        ]

    });
};
