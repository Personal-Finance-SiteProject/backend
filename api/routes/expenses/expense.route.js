const express = require('express');
const { expensesLib } = require('../../../db');
const api = express.Router();

api.route('/find-all-expense').get(async (req, res, next) => {
    let expenseList = null;
    const { user_id, page, limit } = req.query

    if (!user_id) {
        return res.status(400).json({ error: 'user_id is required' });
    }
    const numPage = Number(page);
    const numLimit = Number(limit);

    if (isNaN(numPage) || isNaN(numLimit)) {
        return res.status(400).json({ error: 'page and limit must be numbers' });
    }

    try {
        expenseList = await expensesLib.findAllExpenseByUser(user_id, numPage, numLimit)
        res.status(200).json(expenseList);
    } catch (err) {
        return next(err)
    }
})




module.exports = api;
