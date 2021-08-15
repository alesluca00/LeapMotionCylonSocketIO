var IPAddr = "192.168.189.50";
var port = "8000";
 
const
    io = require("socket.io-client"),
    ioClient = io.connect(`http://${IPAddr}:${port}`)
 
ioClient.on("gesture", (msg) => console.info(msg));