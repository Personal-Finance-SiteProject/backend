const express = require('express');
const { expensesLib } = require('../../../db');

const api = express.Router();

api.route('find-all-expense').get(async (req, res, next) => {
    let expenseList = null;
    const { userId, page, pageSize } = req.query
    try {
        expenseList = await expensesLib.findAll({
                where: { userId },
                page: parseInt(page),
                pageSize: parseInt(pageSize)
        })
    } catch (err) {
            return next(err)
    }
    res.send(expenseList)
})


module.exports = api;
