const Discord = require("discord.js");
const bot = new Discord.Client();
// 菜單
const food = {
  breakfast: [
    "豬排蛋餅",
    "玉米蛋餅",
    "燻雞蛋餅",
    "蘿蔔糕",
    "吐司夾蛋",
    "火腿蛋吐司",
    "鐵板麵",
    "饅頭",
    "豬排堡",
    "燒餅",
    "花生厚片",
    "巧克力厚片",
    "燒餅油條"
  ], // 0-1 len = 2
  lunch: [
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
    "鍋貼"
  ],
  dinner: [
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
    "鍋貼"
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
      `!早餐\n!午餐\n!晚餐\n!抽卡(單抽)\n!十抽(十連抽)\n!機率(卡片機率)`
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
      message.channel.send(`R 卡機率 80%\nSR 卡機率 15%\nSSR卡 5%`);
    }
    if (message.content === "!抽卡") {
      let num = getRandomInt(1, 101);
      if (num >= 1 && num <= 80) {
        message.channel.send(
          `${message.author.toString()}，恭喜抽中 R，今天還是個非洲人`
        );
      } else if (num >= 81 && num <= 95) {
        message.channel.send(
          `${message.author.toString()}，恭喜抽中 SR，再...`
        );
      } else {
        message.channel.send(`${message.author.toString()}，恭喜抽中 SSR`);
      }
    }
  }
  // 十連抽字串
  function tenCard() {
    if (message.content === "!十抽") {
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
      }
    }
  }
  foodRecommend();
  card();
  tenCard();
});

bot.login("NjczNzk3NDMzMzMwODkyODE5.XjfRLA.Ji0E8pcKt4OU4iBP3MfvAjeJ_po");
