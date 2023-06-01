const { Options, Client } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Displays the bot current ping.",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],

    callback: (client, interaction) => {
        interaction.reply(`ping ${client.ws.ping}ms`);
    },
};
