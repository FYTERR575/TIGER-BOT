module.exports.config = {
  name: "welcome",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN",
  description: "THIS BOT IS MADE BY Naaina",
  commandCategory: "PROFILE DP",
  cooldowns: 0
};

module.exports.run = async function({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) {
const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply")
      let name = await Users.getNameUser(event.messageReply.senderID) 
  uid = event.messageReply.senderID
  var callback = () =>   api.sendMessage({body:`${name} 💞sanam teri kasam.oo sanam teri kasam.tujhe dekhte hi aankhain ho jati naamm..!!
«☆☆☆☆☆☆☆☆☆☆☆☆☆»
dil karta hai tere pas aaou tere paa a ke tera hojao..!!
«☆☆☆☆☆☆☆☆☆☆☆☆☆»
mai hu our tu mahan kayar hai yahi suna hu group walo se..!!
«☆☆☆☆☆☆☆☆☆☆☆☆☆»
आये aao sunao pyaar ki ek kahani ek tha ladka ek thi ladki deewani dono rone lage ek doosre ki G marne lage the, 💞`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 

  }
}
}
