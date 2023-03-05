const Discord = require('discord.js');

module.exports = {
    name: "test",

    async run(bot, message) {
        await message.channel.send("test réussi!");
    }
}