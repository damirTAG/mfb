const { Options, Client } = require("discord.js");

module.exports = {
    name: "ora",
    description: "ORA!",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],

    callback: (client, interaction) => {
        interaction.reply("ORA ORA ORA ORA ORA ORAAAAAA!");
    },
};
