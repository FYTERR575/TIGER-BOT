const fs = require("fs");
module.exports.config = {
  name: "NAaina Bot",
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
  if(react.includes("Naina here") ||
     react.includes("massom bachi") || react.includes("JAY SHRI RAM") || react.includes("jay mahakal") ||
react.includes("Most wanted criminal naaina") ||
react.includes("Naaina bolti public")) {
    var msg = {
        body: `【 Naina bot ________________❤️🙏  】`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
