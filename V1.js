const Discord = require('discord.js');
const bot = new Discord.Client({intents: 3276799});
const loadCommands = require('./Loader/loadCommands');
const config = require("./config");

bot.commands = new Discord.Collection();

bot.login(config.token);
loadCommands(bot);

bot.on("messageCreate", async message => {
    
    if(message.content === "!test") return bot.commands.get("test").run(bot, message)
})

bot.on("ready", async () => {

    console.log(`${bot.user.tag} is online!`);
})