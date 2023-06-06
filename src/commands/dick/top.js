const { EmbedBuilder, Client, Interaction } = require("discord.js");
const User = require("../../models/user");

module.exports = {
    name: "top",
    description: "топ-10 пиписек",
    callback: (client, interaction) => {
        interaction.reply("скоро");
    },
};
