const {Op, Sequelize} = require('sequelize');
const dayjs = require('dayjs');
const models = require('../../models');
const { savingGoalModel } = models();

module.exports = {
    findAllSavings: async (where) => {
        return savingGoalModel.findAll({
            where: {...where}
        })
    },
    findSavingByIdUser: async (userId) => {
        try {
            return await savingGoalModel.findOne({
                attributes: ['id', 'goalName', 'goalAmount', 'userId'],
                where: {userId},
                raw: true
            });
        } catch (err) {
            throw err;
        }
    },
    createOrUpdateSaving: async (model) => {
        return new Promise(async (resolve, reject) => {
            const instanceModel = model.id ? await savingGoalModel.findOne(
                { where: { id: model.id }}).catch(reject) : null;
            if ( instanceModel ) {
                model.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
                savingGoalModel.update(model, { where: { id: instanceModel }})
                    .then(() => resolve ({ ...instanceModel, model }))
                    .catch((e = new Sequelize.UniqueConstraintError) => {
                        e.message = 'Saving data must be unique'
                        reject(e)
                    }).catch(err => reject(err))
            } else {
                model.createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
                savingGoalModel.create(model).then(result => resolve(resolve))
                    .catch((e = new Sequelize.UniqueConstraintError) => {
                        e.message = 'Saving data must unique create'
                        reject(e)
                    }).catch(err => reject(err))
            }
        })
    },
    deleteSaving: async (model) => {
        return new Promise( async (resolve, reject) => {
            return savingGoalModel.update({
                updatedAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
                status: 0
            }, {
                where: {
                    id: model.id
                },
                raw: true
            }).then(result => {
                if (result) {
                    resolve(result)
                } else {
                    resolve(null)
                }
            }).catch(err => reject(err))
        })
    }

}
