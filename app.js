const Discord = require("discord.js");
const bot = new Discord.Client();
const food = {
  breakfast: ["蛋餅", "蘿蔔糕", "吐司夾蛋", "鐵板麵"], // 0-1 len = 2
  lunch: ["丼飯", "肯德基", "麥當勞", "炒飯"],
  dinner: ["雞腿便當", "廣東粥", "牛肉麵", "水餃"]
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

bot.on("message", message => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "!早餐") {
    let random = getRandomInt(0, food.breakfast.length);
    message.channel.send(
      `${message.author.toString()}，真心推薦 ${food.breakfast[random]}`
    );
  } else if (message.content === "!午餐") {
    let random = getRandomInt(0, food.lunch.length);
    message.channel.send(
      `${message.author.toString()}，真心推薦 ${food.lunch[random]}`
    );
  } else {
    let random = getRandomInt(0, food.dinner.length);
    message.channel.send(
      `${message.author.toString()}，真心推薦 ${food.dinner[random]}`
    );
  }
});

bot.login("NjczNzk3NDMzMzMwODkyODE5.XjfRLA.Ji0E8pcKt4OU4iBP3MfvAjeJ_po");
