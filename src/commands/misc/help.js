const { EmbedBuilder, Embed } = require("discord.js");
const help = new EmbedBuilder()
    .setTitle("Помощь")
    .setDescription("Доступные команды:")
    .setColor(0x000000)
    .setTimestamp()
    .addFields(
        { name: "</help:1113856898043744276>", value: "показывает доступные команды" },
        { name: "</dick:1113907658731298837>", value: "увеличивай писюн, соревнуйся со всеми(скоро сделаю топ)" },
        { name: "</ping:1113530197564735510>", value: "проверка соединения" },
        { name: "</site:1113499104287399986>", value: "отправляет рабочую ссылку на сайт" },
        { name: "</develop:1113868130712817724>", value: "все нужные ссылки для обучения программированию", inline: false },
        { name: "GitHub", value: "https://github.com/damirTAG/mfb", inline: true },
        { name: "Обнаружили баг? Сообщите мне", value: "<@857008895935512598>" }
    );
module.exports = {
    deleted: false,
    name: "help",
    description: "Помощь по командам",
    // devOnly: Boolean,
    // testOnly: true,
    // options: Object[],

    callback: (client, interaction) => {
        interaction.reply({ embeds: [help] });
    },
};
