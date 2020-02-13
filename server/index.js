const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const router = require("./router");

const PORT = process.env.PORT || 8080;

const app = express();

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", socket => {
  console.log("sockeet connection established");
  socket.on("disconnect", () => {
    console.log("user left the io connection!!!");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
