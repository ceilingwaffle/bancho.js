const config = require("../config.json");
const Banchojs = require(".."); // Replace .. by bancho.js when coding outside of the library
const client = new Banchojs.BanchoClient(config["irc_user"], config["irc_pass"], config["irc_host"], config["irc_port"]);

client.connect().then(() => {
	console.log("We're online! Now listening for incoming messages.");
	client.on("PM", (message) => {
		console.log(message.user+": "+message.message);
	});
}).catch(console.error);