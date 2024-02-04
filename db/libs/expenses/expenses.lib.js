const { Sequelize, where, Op} = require('sequelize');
const dayjs = require('dayjs');
const models = require('../../models');
const { expensesModel, categoryExpensesModel } = models();

module.exports = {
    findAllExpense: async (where) => {
        return expensesModel.findAll({
            where: { ... where }
        })
    },


    findAllExpenseByUser: async ( userId, page, limit ) => {
        const offset = (page - 1) * limit
        try {
            const { count, rows } = await expensesModel.findAndCountAll({
                attributes: [
                    'spentDate', 'description', 'amount', 'necessarySpent',
                    'userId', 'categoryId', 'createdAt', 'updatedAt'
                ],
                include: [
                    {
                        model: categoryExpensesModel, as: 'category', required: true,
                        attributes: ['name', 'status', 'type']
                    }
                ],
                where: { userId: userId },
                order: [['createdAt', 'DESC']],
                limit,
                offset,

            })
            // const totalPages = Math.ceil(count/limit);

            return {
                count: count,
                // itemsPerPage: limit,
                // totalPages,
                // currentPage: page,
                rows: rows
            }

        } catch (err) {
            console.error('Ha ocurrido un error al recuperar los usuarios', err);
        }
    },


    createOrUpdateExpenseByUser: async (model) => {
        try {
            const expenseModel = model.id ? await expensesModel.findByPk(model.id) : null;
            if (expenseModel) {
                model.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
                try {
                    await expenseModel.update(model);
                    return { ...expenseModel, ...model };
                } catch (err) {
                    if (err instanceof Sequelize.UniqueConstraintError) {
                        err.message = 'Id must be unique update';
                    }
                }
            } else {
                model.createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
                try {
                    return await expensesModel.create(model);
                } catch (err) {
                    if (err instanceof Sequelize.UniqueConstraintError) {
                        err.message = 'Id must be unique create';
                    }
                }
            }
        } catch (error) {
            throw error;
        }
    },


    findExpenseByIdUser: async (userId) => {
        try {
            const expenses = await expensesModel.findAll({
                where: {
                    user_id: userId,
                    status: { [Op.in]: [1] },
                },
                raw: true,
            });

            const totalAmount = expenses.reduce((total, expense) => {
                return total + parseFloat(expense.amount);
            }, 0);

            return {
                expenses,
                totalAmount,
            };
        } catch (err) {
            throw err;
        }
    },


    deleteExpenseByUser: async (idExpense) => {
        try {
            const result = await expensesModel.update(
                {
                    updatedAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
                    status: 0
                },
                {
                    where: {
                        id: idExpense
                    }
                }
            );
            return result
        } catch (err) {
            throw err;
        }
    }
}
