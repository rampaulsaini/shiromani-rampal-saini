const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let users = {};

io.on("connection", (socket) => {

  users[socket.id] = { x:0, y:2, z:0 };

  socket.emit("init", socket.id);
  io.emit("users", users);

  socket.on("move", (data)=>{
    users[socket.id] = data;
    io.emit("users", users);
  });

  socket.on("disconnect", ()=>{
    delete users[socket.id];
    io.emit("users", users);
  });

});

server.listen(3000, ()=>{
  console.log("Temple Server Running on port 3000");
});renderer.setAnimationLoop(()=>{
  if(myId){
    socket.emit("move", {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z
    });
  }
  renderer.render(scene,camera);
});navigator.mediaDevices.getUserMedia({audio:true})
.then(stream=>{
  const localStream = stream;
  // WebRTC peer logic here
});
