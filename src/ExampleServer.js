const io = require("socket.io")();

io.on("connection", client => {
  console.log("user connected: ", client.id);
  client.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      client.emit("timer", new Date());
    }, interval);
    
  });
  client.on("subscribeToVehicle", (data) => {
    console.log('data:',data);
    io.emit('veh-data',data);
  });

  client.on("disconnect", () =>
    console.log("user disconnected..user:", client.id)
  );
});

const port = 4001;
io.listen(port);
console.log("listening on port ", port);
