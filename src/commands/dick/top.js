const { EmbedBuilder, Client, Interaction } = require("discord.js");
const User = require("../../models/user");

module.exports = {
    name: "dick",
    description: "пиписа",
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
    callback: async (client, interaction) => {
        if (!interaction.inGuild()) {
            interaction.reply({
                content: "Вы можете запустить эту команду только на сервере дс.",
                ephemeral: true,
            });
            return;
        }

        try {
            await interaction.deferReply();

            const query = {
                userId: interaction.member.id,
            };

            let user = await User.findOne(query);

            interaction.editReply(``);
        } catch (error) {
            console.log(`Error with /top: ${error}`);
        }
    },
};
