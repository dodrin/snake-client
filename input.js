// setup interface to handle user input from stdin
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  
  // sets the input mode to raw mode
  // keypress are immediately provided as input without waiting for the use to press Enter key
  stdin.setRawMode(true);
  
  stdin.setEncoding("utf8");
  stdin.resume();

  //event listner, "data" event invokes handleUserInput function
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //ctrl + c to exit
  if (key === "\u0003") {
    process.exit();
  } else {
    //WASD key to move the snake
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
    //KMN keys to send messages
    if (key === "k") {
      connection.write("Say: konnichiwa");
    }
    if (key === "m") {
      connection.write("Say: meow");
    }
    if (key === "n") {
      connection.write("Say: nande");
    }
  }
};

module.exports = { setupInput };
