const { apiConfig, expirationPass  } = require('../../config')
const jwt = require('jsonwebtoken');

function sign (payload) {
    return jwt.sign(payload, apiConfig.secret)
}

function verify (payload) {
    return jwt.verify(payload, apiConfig.secret)
}

function verificationLink (payload) {
    return jwt.sign({
        userId: payload.id,
        username: payload.username
    }, apiConfig.secret, { expiresIn: expirationPass.expirationRecoveryToken });
}

module.exports = {
    sign,
    verify,
    verificationLink
}
