const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input.js")

console.log("Connecting ...");
connect();
setupInput();
