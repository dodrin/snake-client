const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //print message when the connection is established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: IND");
  });

  return conn;
};

module.exports = { connect };
