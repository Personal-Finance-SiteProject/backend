const express = require('express');
const { categoryExpenseLib } = require('../../../db');

const api = express.Router();

api.route('list-all-category').get(async (req, res, next) => {
    try {
        const data = await categoryExpenseLib.findAllCategoryExpense({

        })
    } catch (e) {

    }

})



module.exports = api
