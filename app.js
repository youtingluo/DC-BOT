const Discord = require("discord.js");
const bot = new Discord.Client();
const food = {
  breakfast: ["蛋餅", "蘿蔔糕", "吐司夾蛋", "鐵板麵", "饅頭", "豬排堡"], // 0-1 len = 2
  lunch: ["丼飯", "肯德基", "麥當勞", "炒飯", "義大利麵"],
  dinner: ["雞腿便當", "廣東粥", "牛肉麵", "水餃", "雞排"]
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
  if (message.content === "!指令") {
    message.channel.send(`!早餐\n!午餐\n!晚餐\n!抽卡\n!十抽\n!機率`);
  }
  function foodRecommend() {
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
    } else if (message.content === "!晚餐") {
      let random = getRandomInt(0, food.dinner.length);
      message.channel.send(
        `${message.author.toString()}，真心推薦 ${food.dinner[random]}`
      );
    }
  }
  function card() {
    if (message.author.bot) {
      return;
    }
    if (message.content === "!機率") {
      message.channel.send(`SSR 卡機率 95%\nSR 卡機率 4%\nR卡 1%`);
    }
    if (message.content === "!抽卡") {
      let num = getRandomInt(1, 101);
      if (num >= 1 && num <= 95) {
        message.channel.send(
          `${message.author.toString()}，恭喜抽中 R，今天還是個非洲人`
        );
      } else if (num >= 96 && num <= 99) {
        message.channel.send(
          `${message.author.toString()}，恭喜抽中 SR，再...`
        );
      } else {
        message.channel.send(`${message.author.toString()}，恭喜抽中 SSR`);
      }
    }
    // 十連抽
    if (message.content === "!十抽") {
      for (let i = 0; i < 10; i++) {
        let num = getRandomInt(0, 101);
        if (num >= 0 && num <= 94) {
          message.channel.send(
            `${message.author.toString()}，恭喜抽中 R，今天還是個非洲人`
          );
        } else if (num >= 95 && num <= 98) {
          message.channel.send(
            `${message.author.toString()}，恭喜抽中 SR，再...`
          );
        } else {
          message.channel.send(`${message.author.toString()}，恭喜抽中 SSR`);
        }
      }
    }
  }

  foodRecommend();
  card();
});

bot.login("NjczNzk3NDMzMzMwODkyODE5.XjfRLA.Ji0E8pcKt4OU4iBP3MfvAjeJ_po");
