const fs = require("fs");
module.exports.config = {
  name: "Bkkk",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Bkkk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Bhk")==0 || event.body.indexOf("Bhak")==0 || event.body.indexOf("Bhak")==0 || event.body.indexOf("bhak")==0) {
    var msg = {
        body: "😻Tum sab ganne ho mujhe bhagane mai lage rehte ho kotte kahi ke🥺😻",
        attachment: fs.createReadStream(__dirname + `/cache/Bhak.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🏃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
