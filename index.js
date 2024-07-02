const TelegramBot = require("node-telegram-bot-api");

const token = "6603635168:AAGZAGJMPfg5YCIl0lY_0M-QtvImWgDfekI";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const id = msg.chat.id;
    bot.sendMessage(id, "Salom " + msg.from.first_name + " bizning botimizga xush kelibsan!");
});












