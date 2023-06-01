const { EmbedBuilder, Embed } = require("discord.js");
const help = new EmbedBuilder()
    .setTitle("Помощь")
    .setDescription("Доступные команды:")
    .setColor(0x000000)
    .setTimestamp()
    .addFields(
        { name: "/help", value: "показывает доступные команды" },
        { name: "/dick", value: "увеличивай писюн, соревнуйся со всеми(скоро сделаю топ)" },
        { name: "/ping", value: "проверка соединения", inline: false },
        { name: "/site", value: "отправляет рабочую ссылку на сайт", inline: false },
        { name: "/develop", value: "все нужные ссылки для обучения программированию", inline: false }
    );
module.exports = {
    deleted: false,
    name: "help",
    description: "Помощь по командам",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],

    callback: (client, interaction) => {
        interaction.reply({ embeds: [help] });
    },
};
