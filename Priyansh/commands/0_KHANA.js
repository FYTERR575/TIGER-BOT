const fs = require("fs");
module.exports.config = {
	name: "Khana",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Naaina", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("KHANA") ||
     react.includes("khana") || react.includes("lunch") ||  react.includes("nasta") || 
react.includes("breakfast") ||
react.includes("dinner") ||
react.includes("khaa lo")) {
		var msg = {
				body: `💝𝐌𝐚𝐝𝐞 𝐁𝐲:-☞𝗡𝗔𝗔𝗜𝗡𝗔 𝗖𝗔𝗥𝗧𝗢𝗢𝗡☜\n🙂 aja babu mere sath khaana kha lo 🙂`,attachment: fs.createReadStream(__dirname + `/noprefix/khana.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍲", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
