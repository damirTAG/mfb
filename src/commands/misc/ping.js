const { Options, Client } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Pong!",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
};
