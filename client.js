const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", 
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //print message when the connection is established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: IND");
  });

  // conn.on("connect", () => {
  //   conn.write("Move: left");
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 50);
  // });

  return conn;
};

module.exports = { connect };
