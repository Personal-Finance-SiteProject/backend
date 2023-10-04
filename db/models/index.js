const DataTypes = require('sequelize').DataTypes;
const { mainDB } = require('../sequelize.config');
/** MODELS **/
const _user = require('./admin-users/admin_users.model');
const _categoryExpenses = require('./category-expenses/category_expenses.model');
const _expenses = require('./expenses/expenses.model');
const _savingGoal = require('./saving-goal/saving_goal.model');

function index () {
    const sequelizeMain = mainDB();
    // Call Models
    const usersModel = _user(sequelizeMain, DataTypes);
    const categoryExpensesModel = _categoryExpenses(sequelizeMain, DataTypes);
    const expensesModel = _expenses(sequelizeMain, DataTypes);
    const savingGoalModel = _savingGoal(sequelizeMain, DataTypes);

    /** Relations Models **/
    usersModel.belongsTo(usersModel, { foreignKey: 'createdUserId', as: 'userToUser' });
    usersModel.belongsTo(usersModel, { foreignKey: 'updatedUserId', as: 'userToUserUpdate' });

    return {
        usersModel,
        expensesModel,
        savingGoalModel,
        categoryExpensesModel
    }
}

module.exports = index;
