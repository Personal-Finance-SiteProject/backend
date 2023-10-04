const express = require('express');
const asyncify = require('express-asyncify');
const api = asyncify(express.Router());
const { compare, encrypt } = require('../../libs/byencrypt.lib');
const { sign } = require('../../libs/auth.lib');
const { usersLib } = require('../../../db');

api.route('/sign-in').post(async (req, res, next) => {
    let { username, password } = req.body
    let result = null
    try {
        result = await usersLib.findUserByUserName(username);
        console.log(result)
        if (result) {
            const pass = await compare(password, result.password)
            if ( pass ) {
                const {
                    id,
                    fullName,
                    email,
                    userName,
                    password,
                    createdAt,
                    avatar,
                    updatedAt,
                    status
                } = result
                result = {
                    id,
                    fullName,
                    email,
                    userName,
                    password,
                    createdAt,
                    avatar,
                    updatedAt,
                    status
                }
                result.token = sign(result);
                result['token'] = sign(result);
                res.send(result);
            } else {
                res.status(404).send({
                    password: 'Invalid Password'
                })
            }
        } else {
            res.status(404).send({
                password: 'Invalid User'
            })
        }
    } catch (err) {
        return next(err)
    }
})

module.exports = api
