const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {

    console.log("Установлено новое соединение");

    ws.on('message', (message) => {

        console.log(`Получено новое сообщение ${message}`);
        ws.send(`Эхо: ${message}`);

    })

    ws.send("Добро пожаловать на websocekt сервер!");

})

console.log("WebSocket был запущен");