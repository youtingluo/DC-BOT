const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const userData = JSON.parse(fs.readFileSync("./userData.json", "utf-8"));
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
bot.on("message", message => {
  let msg = message.content.split(" ");
  if (msg[0] === "!給錢" && msg[1]) {
    if (message.author.username != "RT") {
      message.channel.send("你不是管理員，嫩");
      return;
    } else {
      userData[msg[1]] = { money: 1000 };
    }

    fs.writeFile("./userData.json", JSON.stringify(userData), err => {
      if (err) console.error(err);
    });
  }

  if (msg[0] === "!賭" && Number(msg[1])) {
    let money = userData[message.author.username].money;
    if (money <= 0 || msg[1] >= money) {
      message.channel.send("沒錢還想賭啊！");
      return;
    }
    let r = getRandomInt(1, 101);
    if (r >= 1 && r <= 70) {
      userData[message.author.username].money -= msg[1] * 1;
      message.channel.send(
        `你擲出了 ${r} 失去了 ${msg[1]}，現在剩餘金額 ${
          userData[message.author.username].money
        } 元`
      );
    } else {
      userData[message.author.username].money += msg[1] * 1;
      message.channel.send(
        `你擲出了 ${r} 得到了 ${msg[1]}，現在剩餘金額 ${
          userData[message.author.username].money
        } 元`
      );
    }

    fs.writeFile("./userData.json", JSON.stringify(userData), err => {
      if (err) console.error(err);
    });
  }
});
bot.login("NjczNzk3NDMzMzMwODkyODE5.XjfRLA.Ji0E8pcKt4OU4iBP3MfvAjeJ_po");
