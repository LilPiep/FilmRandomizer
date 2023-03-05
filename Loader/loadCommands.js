const fs = require("fs");

module.exports = async bot => {
    fs.readdirSync("./Commandes").filter(f => f.endsWith(".js")).forEach(async file => {
        let command = require(`../Commandes/${file}`);
        if(!command.name || typeof command.name !== "string") throw new TypeError("Commande sans nom ou nom invalide");
        bot.commands.set(command.name, command);
        console.log(`Commande chargée: ${command.name}`);
    })
}