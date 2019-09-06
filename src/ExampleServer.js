const io = require("socket.io")();

io.on("connection", client => {
  client.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    console.log('user connected: ', client.id);
    setInterval(() => {
      client.emit("timer", new Date());
    }, interval);
  });
  client.on("subscribeToVehicle", (data) => {
    console.log('data:',data);
    io.emit('veh-data',data);
  });
});

const port = 4001;
io.listen(port);
console.log("listening on port ", port);
