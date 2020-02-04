const Discord = require("discord.js");
const bot = new Discord.Client();
const embed = new Discord.RichEmbed();
// 菜單
const food = {
  breakfast: [
    "豬排蛋餅",
    "玉米蛋餅",
    "火腿蛋餅",
    "培根蛋餅",
    "起司蛋餅",
    "玉米蛋餅",
    "肉鬆蛋餅",
    "鮪魚蛋餅",
    "蘿蔔糕",
    "吐司夾蛋",
    "火腿蛋吐司",
    "培根蛋吐司",
    "豬排蛋吐司",
    "鐵板麵",
    "饅頭",
    "豬排堡",
    "牛肉堡",
    "香雞堡",
    "飯糰",
    "花生厚片",
    "巧克力厚片",
    "奶酥厚片",
    "燒餅油條",
    "麵包"
  ], // 0-1 len = 2
  lunch: [
    "雞肉飯",
    "鐵板燒",
    "三寶飯",
    "丼飯",
    "肯德基",
    "麥當勞",
    "炒飯",
    "乾麵",
    "義大利麵",
    "焗烤蛤蠣燉飯",
    "吉野家",
    "自助餐",
    "滷肉飯",
    "披薩",
    "咖哩飯",
    "烏龍麵",
    "壽司",
    "拉麵",
    "油飯",
    "鍋貼",
    "Subway",
    "漢堡王",
    "擔仔麵"
  ],
  dinner: [
    "炸豬排飯",
    "牛丼",
    "雞腿飯",
    "廣東粥",
    "小籠包",
    "牛肉麵",
    "水餃",
    "雞排",
    "小火鍋",
    "燉飯",
    "牛排",
    "肉圓",
    "肉羹麵",
    "碗粿",
    "排骨飯",
    "鍋貼",
    "蝦仁炒飯",
    "肉絲炒麵",
    "烏龍麵",
    "海鮮總匯鮮蔬焗飯",
    "鴨肉飯",
    "筒仔米糕"
  ]
};
// 產生隨機數
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
    message.channel.send(
      `!早餐\n!午餐\n!晚餐\n!抽卡(單抽)\n!十抽(十連抽)\n!十抽 <祭品> (出現SSR有祭品)\n!機率(卡片機率)`
    );
  }
  // 推薦食物功能
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
  // 抽卡功能
  function card() {
    if (message.author.bot) {
      return;
    }
    if (message.content === "!機率") {
      message.channel.send(`R 卡機率 85%\nSR 卡機率 10%\nSSR卡 5%`);
    }
    if (message.content === "!抽卡") {
      let num = getRandomInt(1, 101);
      if (num >= 1 && num <= 85) {
        message.channel.send(
          `${message.author.toString()}，恭喜抽中 R，今天還是個非洲人`
        );
      } else if (num >= 86 && num <= 95) {
        message.channel.send(
          `${message.author.toString()}，恭喜抽中 SR，再...`
        );
      } else {
        message.channel.send(`${message.author.toString()}，恭喜抽中 SSR`);
      }
    }
  }
  // 十連抽
  function tenCard() {
    let msg = message.content.split(" ");
    if (msg[0] === "!十抽" && !msg[1]) {
      let times = 0;
      let str = "";
      for (let i = 0; i < 10; i++) {
        let num = getRandomInt(1, 101);
        if (num >= 1 && num <= 85) {
          times += 1;
          if (times == 10) break;
          str += "恭喜抽中 R，今天還是個非洲人\n";
        } else if (num >= 86 && num <= 95) {
          str += "恭喜抽中 SR，再...\n";
        } else {
          str += "恭喜抽中 SSR，賽狗一條\n";
        }
      }
      if (times != 10) {
        message.channel.send(message.author.toString() + "\n" + str);
      }
      if (times == 10) {
        num = getRandomInt(1, 101);
        if (num >= 1 && num <= 95) {
          str += "保底 SR，下次一定...";
        } else {
          str += "保底 SSR，再...";
        }
        message.channel.send(message.author.toString() + "\n" + str);
        message.channel.send("", {
          files: ["G:\\DC_BOT\\QQ.jpg"]
        });
      }
    }
    if (msg[0] === "!十抽" && msg[1]) {
      let times = 0;
      let str = "";
      for (let i = 0; i < 10; i++) {
        let num = getRandomInt(1, 101);
        if (num >= 1 && num <= 85) {
          times += 1;
          if (times == 10) break;
          str += "恭喜抽中 R，今天還是個非洲人\n";
        } else if (num >= 86 && num <= 95) {
          str += "恭喜抽中 SR，再...\n";
        } else {
          str += "恭喜抽中 SSR，賽狗一條\n";
        }
      }
      if (times != 10) {
        message.channel.send(message.author.toString() + "\n" + str);
      }
      if (times == 10) {
        num = getRandomInt(1, 101);
        if (num >= 1 && num <= 95) {
          str += "保底 SR，下次一定...";
        } else {
          str += "保底 SSR，再...";
        }
        message.channel.send(message.author.toString() + "\n" + str);
        message.channel.send("", {
          files: ["G:\\DC_BOT\\QQ2.jpg"]
        });
      }
      if (str.indexOf("SSR") > -1) {
        message.channel.send(msg[1] + "囉，" + message.author.username);
      }
    }
  }
  // 祭品
  foodRecommend();
  card();
  tenCard();
});

bot.login("NjczNzk3NDMzMzMwODkyODE5.XjfRLA.Ji0E8pcKt4OU4iBP3MfvAjeJ_po");
