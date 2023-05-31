const { EmbedBuilder } = require("discord.js");
const site = new EmbedBuilder()
    .setTitle("Наш сайт")
    .setURL("https://aksaysquad.infinityfreeapp.com/")
    .setDescription("Ссылка на наш сайт")
    .setColor(0xffe601);
module.exports = {
    deleted: false,
    name: "site",
    description: "Отправить Url сайта",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],

    callback: (client, interaction) => {
        interaction.reply({ embeds: [site] });
    },
};
