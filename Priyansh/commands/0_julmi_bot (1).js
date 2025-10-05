const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Dil 👉💖 ko to behla kar chup kara lunga, par is #Dimaag_ka_kya_karu 😁😁 jiska tune 👉👸 #Dahi kar diya hai..🤣😂🤣👈","Pagli tu Facebook ki baat karti hai 😀 hum to OLX pe bhi ladki set kar lete hai 🤣😂🤣👈","Ye jo tu phone me notification baar baar check karti hai na!! Shastro me ise hi 🥀Moh Maya🦋 kaha gaya hai 🤣😂🤣👈","Mere papa ka bhi koi aisa dost nahi jo bole — ‘chal is dosti ko rishtedari me badal de!’ 🤣😂🤣👈","Agar sad songs sunke bhi dard na ho to samajh ja fir se pyaar karne ke liye ready ho gaya hai tu ❤🤣😂🤣👈","Ek ladki ke samne uski saheli ki tarif karna petrol pump pe cigarette peene jaisa hai 🤣😂🤣👈","Meri jaan ho tu, mere gusse ki dukaan ho tu 😜👈","Dil me na jaane kab se teri jagah ban gayi, tujhse baat karna meri aadat ban gayi 🙈👈","Meri pasand bhi lajawaab hai — yakin nahi to khud ko dekh le 🙈👈","Dusro ke liye bhi chhod de, khud hi beauty ki thekedaar mat ban 😕👈","Teri boli bandook ki goli jaisi hai — seedha dil pe lagti hai 😒👈","Raat ko sapne, din me khayal — bada ajeeb sa hai is deewane ka haal 😒👈","Aadat nahi hai hume kisi pe mar mitne ki, par dil ne tujhe dekh ke sochne tak ki mohlaat nahi di 🤐👈","Dil me feeling ka samundar aa jaata hai, jab turant tera reply aa jaata hai 😎👈"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "koi h kya") || (event.body.toLowerCase() == "koi h kiya") || (event.body.toLowerCase() == "koi hai kiya") || (event.body.toLowerCase() == "Koi hai kya")) {
     return api.sendMessage("mai yahan hu baby 🙂🤟", threadID);
   };

    if ((event.body.toLowerCase() == "call aao") || (event.body.toLowerCase() == "call") || (event.body.toLowerCase() == "call aaja") || (event.body.toLowerCase() == "Call aao sab")) {
     return api.sendMessage("Call nahi a skta kyunke Mai Naina Bot hu😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "kya kar rahe ho") || (event.body.toLowerCase() == "k kr h")) {
    return api.sendMessage("Style mera alag hai, compare mujhe koi mat karna 😎👈"", threadID);
   };

    if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("Tutte kahi ke group mai sota ha tu 🤨👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("is group mai garami bhut hai🥵🥵👈", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha g") || (event.body.toLowerCase() == "oo acha ji")) {
     return api.sendMessage("ha jaan 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "kamina bot") || (event.body.toLowerCase() == "tamina") || (event.body.toLowerCase() == "kamine")) {
     return api.sendMessage("i am branded  kamina meko aye na pasina😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "shat up") || (event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "shut") || (event.body.toLowerCase() == "stup")) {
     return api.sendMessage("You Stup Up 😕👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("😘😘😘😘", threadID);
   };

  if ((event.body.toLowerCase() == "ludo") || (event.body.toLowerCase() == "ludo link do") || (event.body.toLowerCase() == "ludo bejo") || (event.body.toLowerCase() == "link do")) {
     return api.sendMessage("ludo bacche khelte hai apun murder karta hai🥺👈", threadID);
   };

  if ((event.body.toLowerCase() == "kya hua") || (event.body.toLowerCase() == "kiya hua") || (event.body.toLowerCase() == "tya hua") || (event.body.toLowerCase() == "kiya hua")) {
     return api.sendMessage("meko tumse pyaar hua ab kya kare 😒👈", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("BOT") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🌹${name}🥀, ${rand} 🔥🍁❤

*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍𝗝𝗨𝗟𝗠𝗜✦ 
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
