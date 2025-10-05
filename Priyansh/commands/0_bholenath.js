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
  if(react.includes("bolo darling") ||
     react.includes("bolk darling") || react.includes("bolo darling") || react.includes("jai bholenath") ||
react.includes("jai shiv sambhoo") ||
react.includes("Har har mhadev")) {
    var msg = {
        body: `【  𝗡𝗔𝗔𝗜𝗡𝗔 𝗖𝗔𝗥𝗧𝗢𝗢𝗡 ______❤️】`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("♥️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
