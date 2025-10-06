const fs = require("fs");
module.exports.config = {
	name: "love",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "𝑱𝑼𝑳𝑴𝑰 𝑱𝑨𝑨𝑻", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("ummmah") ||
     react.includess("Love") || react.includes("🍫🍫🍫") || react.includes("pyaar") ||
react.includes("baby") || event.body.indexOf("🙈")==0 || event.body.indexOf("baby")==0 || event.body.indexOf("Chumma")==0 || event.body.indexOf("Ppi")==0 ||
react.includes("Love you")) {
		var msg = {
				body: `𝑰 𝑲𝑰𝑺𝑺 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑩𝑨𝑩𝒀 💋🙊💞`,attachment: fs.createReadStream(__dirname + `/noprefix/kissyou.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
