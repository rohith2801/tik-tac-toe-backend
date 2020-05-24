const express = require('express');
const socket = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const http = app.listen(4001, function() {
    console.log('listening on localhost:4001');
});

const io = socket(http);

io.on('connection', function(socket) {
    console.warn("im getting connected");
    socket.on('tihor', function(data) {
        console.log(data);
    });
});
