const express = require('express');
const { compare, encrypt } = require('../../libs/byencrypt.lib');
const { sign, verify } = require('../../libs/auth.lib');
const { usersLib } = require('../../../db');
const {apiConfig} = require("../../../config");


const api = express.Router();

api.route('/sign-in').post(async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await usersLib.findUserByUserName(username);

        if (user) {
            if (password === user.password) {
                const { id, fullName, email, userName, createdAt, avatar, updatedAt, status } = user;
                const tokenData = {
                    id,
                    fullName,
                    email,
                    expiresIn: apiConfig.sessionTime,
                    userName,
                    createdAt,
                    avatar,
                    updatedAt,
                    status
                };
                const token = sign(tokenData);
                console.log(user)
                res.send({ token, user });
            } else {
                res.status(401).send({
                    error: 'Invalid Password'
                });
            }
        } else {
            res.status(401).send({
                error: 'Invalid User'
            });
        }
    } catch (err) {
        next(err);
    }
});



module.exports = api
