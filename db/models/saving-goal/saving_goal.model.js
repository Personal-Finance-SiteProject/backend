module.exports = function(sequelize, DataTypes) {
    return sequelize.define('savingGoal', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        goalName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'goal_name'
        },
        description: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'description'
        },
        goalAmount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            field: 'goal_amount'
        },
        totalAmount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            field: 'total_amount'
        },
        complete: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '1',
            field: 'complete'
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'user_id'
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.fn('current_timestamp'),
            field: 'start_date'
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.fn('current_timestamp'),
            field: 'end_date'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.fn('current_timestamp'),
            field: 'created_at'
        },
        status: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '1',
            field: 'status'
        }
    }, {
        tableName: 'saving_goal',
        timestamps: false
    });
};
