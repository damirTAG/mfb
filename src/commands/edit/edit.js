const { EmbedBuilder, Embed, Client } = require("discord.js");

const update = new EmbedBuilder({ disableEveryone: false })
    .setTitle("Внимание!")
    .setDescription("Этой ночью ожидаются тех. работы")
    .setColor(0x000000)
    .setTimestamp()
    .addFields({ name: "Бот будет временно не работать", value: "с 01:00 до 3:00" }); //CHANGE THIS IF NEW UPDATES UPCOMING

module.exports = {
    name: "update",
    description: "новости о грядущих обновлениях!",
    devOnly: true,
    // testOnly: Boolean,
    // options: Object[],

    callback: (client, interaction) => {
        interaction.reply({ embeds: [update] });
    },
};
