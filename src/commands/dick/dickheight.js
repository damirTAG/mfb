const { Client, Interaction, ApplicationCommandOptionType } = require("discord.js");
const User = require("../../models/user");

module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
    callback: async (client, interaction) => {
        if (!interaction.inGuild()) {
            interaction.reply({
                content: "Эту команду можно запустить только на сервере дс.",
                ephemeral: true,
            });
            return;
        }

        const targetUserId = interaction.options.get("user")?.value || interaction.member.id;

        await interaction.deferReply();

        const user = await User.findOne({ userId: targetUserId, guildId: interaction.guild.id });

        if (!user) {
            interaction.editReply(`<@${targetUserId}> еще не прописывал(-а) </dick:1113907658731298837>.`);
            return;
        }

        interaction.editReply(
            targetUserId === interaction.member.id
                ? `Размер твоего писюна: **${user.balance} см**`
                : `Размер пользователя <@${targetUserId}>: **${user.balance} см**`
        );
    },

    name: "dickheight",
    description: "узнай размер писюна другого участника!",
    options: [
        {
            name: "user",
            description: "участник, размер писюна которого ты хочешь узнать.",
            type: ApplicationCommandOptionType.User,
        },
    ],
};
