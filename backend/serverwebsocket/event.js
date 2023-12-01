const express = require('express');
const {createServer} = require('node:http')

const join = require('node:path');

const app = express();
const server = createServer();
const { Server } = require('socket.io');



module.exports = class NotificarUsuarios{
     io = new Server(server);
     conectado = io.on('connection', (socket) => {
        console.log('Usuario conectado!', socket)
    })
    

}