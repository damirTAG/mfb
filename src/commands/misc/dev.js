const { EmbedBuilder, Embed } = require("discord.js");
const dev = new EmbedBuilder()
    .setTitle("Девелопмент - разработка")
    .setDescription("Полезные ссылки на обучающие материалы по программированию:")
    .setColor(0x000000)
    .setTimestamp()
    .addFields(
        { name: "https://iscode.ru/", value: "видео-хостинг с собранными материалами и уроками по программированию" },
        { name: "https://metanit.com/", value: "обучающии, полезный сайт", inline: false },
        { name: "https://github.com/", value: "соцсеть для программеров", inline: false },
        { name: "https://devdocs.io/", value: "сайт со всеми документациями", inline: false },
        { name: "https://t.me/progforum", value: "телеграмм форум программистов", inline: false },
        { name: "https://t.me/front_arch", value: "архив-канал с курсами по фронт-разработке и не только", inline: false }
    );
module.exports = {
    deleted: false,
    name: "develop",
    description: "Ссылки на обучающие материалы",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],

    callback: (client, interaction) => {
        interaction.reply({ embeds: [dev] });
    },
};
