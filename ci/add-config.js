if(!process.env["IRC_USER"] || !process.env["IRC_PASS"])
	throw new Error("Environment variables not correctly set!");

const getConfig = () => {
	const config = {
		"irc_user": process.env["IRC_USER"],
		"irc_pass": process.env["IRC_PASS"]
	};
	if(process.env["IRC_HOST"])
		config["irc_host"] = process.env["IRC_HOST"];
	if(process.env["IRC_PORT"])
		config["irc_port"] = process.env["IRC_PORT"];
	
	return config;
};

require("fs").writeFileSync("./config.json", JSON.stringify(getConfig()));