const fs = require("fs");
module.exports.config = {
	name: "Naina",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "NAAINA", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Queen") ||
     react.includes("King") || react.includes("mahadev") || react.includes("Har har mahadev") ||
react.includes("Mai Naina ka bot hu") ||
react.includes("shiv")) {
		var msg = {
				body: `【  NAAINA  RIMG MASTER😍_________________❤️  】`,attachment: 
fs.createReadStream(__dirname + `/noprefix/mahadev.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
