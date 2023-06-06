const { EmbedBuilder, Embed, Client } = require("discord.js");

// const update = new EmbedBuilder({ disableEveryone: false })
//     .setTitle("Нет ближайших обнов")
//     .setDescription("No upcoming updates")
//     .setColor(0x439949)
//     .setImage(" https://media.tenor.com/Ng5ofwU70sEAAAAC/captain-price-call-of-duty.gif")
//     .setTimestamp();

module.exports = {
    name: "update",
    description: "новости о грядущих обновлениях!",
    devOnly: true,
    // testOnly: true,
    // options: Object[],

    callback: (client, interaction) => {
        interaction.reply({ embeds: [update] });
    },
};

/*
----
*/

// IF NEW UPDATES INCOMING
const update = new EmbedBuilder({ disableEveryone: false })
    .setTitle("Обновление!")
    .setDescription("Бот будет временно отключен на тех. работы!")
    .setColor(0x439949)
    .setImage(" https://media.tenor.com/K2FTH3BoAIwAAAAC/modern-warfare-call-of-duty.gif")
    .setTimestamp()
    .addFields({ name: "Бот будет временно не работать", value: "с 01:00 до 3:00" });
// CHANGE THIS IF NEW UPDATES UPCOMING
