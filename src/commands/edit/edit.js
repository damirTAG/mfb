const { EmbedBuilder, Embed, Client } = require("discord.js");

// const update = new EmbedBuilder({ disableEveryone: false })
//     .setTitle("Нет ближайших обнов")
//     .setDescription("No upcoming updates")
//     .setColor(0x29292e)
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
    .setTitle("Новость!")
    .setDescription("Объявлен набор на прием тестировщиков бота!")
    .setColor(0x439949)
    .setImage("https://media.discordapp.net/attachments/982586905214455858/1115967807872577626/image.png?width=1439&height=580")
    .setTimestamp()
    .addFields({ name: "Если желаете, пишите", value: "**<@857008895935512598>**" });
// CHANGE THIS IF NEW UPDATES UPCOMING
// https://media.tenor.com/K2FTH3BoAIwAAAAC/modern-warfare-call-of-duty.gif
