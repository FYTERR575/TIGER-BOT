const fs = require("fs");
module.exports.config = {
	name: "nasta",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Naaina", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "nasta",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Khana")==0 || event.body.indexOf("brekfast")==0 || event.body.indexOf("Breakfast")==0 || event.body.indexOf("Nasta")==0) {
		var msg = {
				body: "💝 YE LO BABY khana KHA LO🫓\n\n(─━━◉❖𝗡𝗔𝗔𝗜𝗡𝗔❖◉━━─)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Nasta.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
