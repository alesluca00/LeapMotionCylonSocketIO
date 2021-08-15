var port = 8000;

const
    {Server} = require("socket.io"),
    server = new Server(port);
 
// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
 
    socket.on("gesture", (msg) => console.info(msg));
 
    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        console.info(`Client disconnected [id=${socket.id}]`);
    });
});