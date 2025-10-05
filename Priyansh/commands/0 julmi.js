module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "... - Long LTD",
  description: "War In Chatbox",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
var mention = Object.keys(event.mentions)[0];

let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰\n\n\ (─━━◉❖𝗡𝗔𝗔𝗜𝗡𝗔𝗔❖◉━━─)(•◡•)\n\n𝐀𝐠𝐞 : 19\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 :-𝗤𝗨𝗘𝗘𝗡)\n\n𝐅𝐫𝐨𝐦 : (𝐒𝐈𝐓𝐀𝐌𝐆𝐀𝐑𝐇)\n\n𝐒𝐭𝐮𝐝𝐲 : 𝐂𝐎𝐌𝐏𝐔𝐓𝐄𝐑 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 :-👇👇https://www.facebook.com/profile.php?id=100090277345439 \n\n𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐋𝐢𝐧𝐤:-👉 :https://www.instagram.com/chotibabu____541?igsh=MWdxbGF2aWYzZDU1eA==");


}
