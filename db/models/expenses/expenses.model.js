module.exports = function(sequelize, DataTypes) {
    return sequelize.define('expenses', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        spentDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.fn('current_timestamp'),
            field: 'spent_date'
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'description'
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            field: 'amount'
        },
        necessarySpent: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '1',
            field: 'necessary_spent'
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'user_id'
        },
        categoryId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'category_id'
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
        }
    }, {
        tableName: 'expenses',
        timestamps: false
    });
};
