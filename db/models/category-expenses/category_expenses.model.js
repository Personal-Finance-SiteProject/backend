module.exports = function(sequelize, DataTypes) {
    return sequelize.define('categoryExpense', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'name'
        },
        type: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'type'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.fn('current_timestamp'),
            field: 'created_at'
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
        },
        idCreatorUser: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users',
                key: 'id'
            },
            field: 'id_creator_user'
        }
    }, {
        sequelize,
        tableName: 'category_expense',
        timestamps: false
    });
};
