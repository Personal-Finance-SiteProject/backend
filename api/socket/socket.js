const db = require('../../db/index');
const { userSessionLib } = db
// const { subscribeMessage } = require('../queue/notification.queue');


module.exports = async (io) => {
    // io.on('connection', async function (socket) {
    //     console.log('connected', socket.id)
    //     socket.on('set-auth', async (data) => {
    //         console.log(socket.id, 'update')
    //         let dataUser = `${data.userId}-${data.username}`
    //         let session = await userSessionLib.findOne(dataUser)
    //         if (!session) {
    //             const model = {
    //                 active: true,
    //                 notifications: [],
    //                 socketId: socket.id
    //             }
    //             await userSessionLib.createOrUpdate(dataUser, model)
    //         } else {
    //             if (session.value.socketId !== socket.id) {
    //                 session.value.socketId = socket.id
    //                 await userSessionLib.createOrUpdate(dataUser, session.value)
    //             }
    //         }
    //     })
    //     socket.on('disconnect', async function (socket) {
    //     })
    // })
    // await subscribeMessage(async (msg, channel, msgOrigin) => {
    //     const userMode = await userSessionLib.findOne(msg.idUser)
    //     if (userMode.value.socketId) {
    //         console.log(userMode.value.socketId, 'send')
    //         io.to(userMode.value.socketId).emit('send-update-table', userMode.value)
    //         io.to(userMode.value.socketId).emit('send-update-user-session', userMode.value)
    //     }
    //     if (msgOrigin) {
    //         channel.ack(msgOrigin)
    //     }
    // })
}

function handleFatalError (err) {
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
}
